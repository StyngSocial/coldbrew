import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateSecretDto } from 'src/types/dto/secrets';
import { SecretsService } from '../services/secrets.service';

class GetSecretDto {
  userId: string;
  credentialId: string
}

@Controller('secret')
export class SecretsController {
  constructor(private readonly secretsService: SecretsService) {}

  @Post("/create")
  async createSecret(@Body() body: CreateSecretDto) {
    const secret = await this.secretsService.createSecret(body.userId, body.credentialId, body.data)
    return secret
  }

  @Get("/read")
  async getSecret(@Query() params: GetSecretDto) {
    const secret = await this.secretsService.getSecret(params.userId, params.credentialId)
    return secret
  }
}
