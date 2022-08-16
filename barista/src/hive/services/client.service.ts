import { Injectable } from "@nestjs/common";
import { Client } from "@hiveio/dhive"

@Injectable()
export class HiveClientService {
  constructor() {}
  
  client: Client

  getClient() {
    if (this.client) return this.client
    return this.client = new Client('http://localhost:8090', {addressPrefix: "TST", chainId: "" })
  }
}