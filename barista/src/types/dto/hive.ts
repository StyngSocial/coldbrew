import { PrivateKey } from "@hiveio/dhive";

export class CreateHiveAccountDto {
  username: string;
  password: string;
}

export class StoreKeysDto {
  ownerKey: PrivateKey;
  activeKey: PrivateKey;
  postingKey: PrivateKey;
}