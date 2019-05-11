import { createServer, Server } from 'http'
import KernelMySQL, { KernelMySQLConfig } from '../kernel-mysql'
import KernelRedis from '../kernel-redis'
import KernelGraphQL from '../kernel-graphql'

export interface KernelMainConfig {
  port: number,
  graphql: KernelGraphQL,
  mysql: KernelMySQL,
  redis: KernelRedis
}

export default class KernelMain {
  server: Server
  graphql: KernelGraphQLConfig
  mysql: KernelMySQLConfig
  redis: KernelRedisConfig

  constructor(private config: KernelMainConfig) {
    this.graphql = new KernelGraphQL(this.config.graphql);
    this.serve()
  }

  serve() {
    this.server = createServer((request, response) => {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
      response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    }).listen(this.config.port, ( ) => console.log(`Server listening on port: ${this.config.port}`))
  }
}