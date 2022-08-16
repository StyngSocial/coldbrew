import { Injectable } from '@nestjs/common';
import { CreateHiveAccountDto, StoreKeysDto } from 'src/types/dto/hive';
import { HiveClientService } from './client.service';
import * as dhive from '@hiveio/dhive';
import { Operation, PrivateKey } from '@hiveio/dhive';
import { SecretsService } from 'src/secrets/services/secrets.service';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class HiveService {
  constructor(private readonly client: HiveClientService, private readonly vault: SecretsService, private readonly user: UserService) {}

  async createHiveAccount(account: CreateHiveAccountDto) {
    const ownerKey = dhive.PrivateKey.fromLogin(
      account.username,
      account.password,
      'owner',
    );
    const activeKey = dhive.PrivateKey.fromLogin(
      account.username,
      account.password,
      'active',
    );
    const postingKey = dhive.PrivateKey.fromLogin(
      account.username,
      account.password,
      'posting',
    );
    const memoKey = dhive.PrivateKey.fromLogin(
      account.username,
      account.password,
      'memo',
    ).createPublic('TST');

    const ownerAuth = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[ownerKey.createPublic('TST'), 1]],
    };
    const activeAuth = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[activeKey.createPublic('TST'), 1]],
    };
    const postingAuth = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[postingKey.createPublic('TST'), 1]],
    };

    await this.storeKeysInVault({ownerKey: ownerKey, activeKey: activeKey, postingKey: postingKey})
    await this.storePublicKeys({ownerKey: ownerKey, activeKey: activeKey, postingKey: postingKey})

    const privateKey:PrivateKey = PrivateKey.fromLogin(account.username, account.password);

    const op: Operation = [
      "account_create",
      {
        fee: 3,
        creator: 'benny.blockchain',
        new_account_name: 'ben',
        owner: ownerAuth,
        active: activeAuth,
        posting: postingAuth,
        memo_key: memoKey,
        json_metadata: '',
      },
    ];
    this.client.getClient().broadcast.sendOperations([op], privateKey);
  }

  private async storeKeysInVault(keys: StoreKeysDto) {
    const ownerKey = keys.ownerKey.toString()
    const activeKey = keys.activeKey.toString()
    const postingKey = keys.postingKey.toString()

    // create uuid for credential id
    // decorator for user id
    const vault = await this.vault.createSecret("ben", "keys", {ownerKey: ownerKey, activeKey: activeKey, postingKey: postingKey})
    return vault
  }

  private async storePublicKeys(keys: StoreKeysDto) {
    const ownerKey = keys.ownerKey.createPublic("TST").toString()
    const activeKey = keys.activeKey.createPublic("TST").toString()
    const postingKey = keys.postingKey.createPublic("TST").toString()

    const user = await this.user.updateUser("ben", {ownerKey: ownerKey, activeKey: activeKey, postingKey: postingKey})
    return user
  }
}
