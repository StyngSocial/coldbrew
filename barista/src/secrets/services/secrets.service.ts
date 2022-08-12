import { Head, Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class SecretsService {
  constructor() {}

  constructVaultPath(userId: string, credentialId: string) {
    return `${userId}/${credentialId}`
  }

  async createSecret(userId:string, credentialId:string, data: any) {
    const vaultPath = this.constructVaultPath(userId, credentialId)
    console.log("path", data)
    const requestOptions: AxiosRequestConfig = {
      baseURL: process.env.VAULT_URL,
      url: `/v1/secret/data/${vaultPath}`,
      method: "POST",
      headers: {
        "X-Vault-Token": process.env.VAULT_TOKEN
      },
      data: data
    }
    const secret = await axios.request(requestOptions)
    console.log(secret.data)
    return secret.data
  }

  async getSecret(userId:string, credentialId: string) {
    const vaultPath = this.constructVaultPath(userId, credentialId)
    console.log(vaultPath)
    const requestOptions: AxiosRequestConfig = {
      baseURL: process.env.VAULT_URL,
      url: `/v1/secret/data/${vaultPath}`,
      method: "GET",
      headers: {
        "X-Vault-Token": process.env.VAULT_TOKEN
      }
    }
    const secret = await axios.request(requestOptions)
    return secret.data
  }
}
