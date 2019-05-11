import mysql, { Connection } from 'mysql'

export interface KernelMySQLConfig {
  host: string,
  user: string,
  password: string,
  database: string
}

export default class KernelMySQL {
  connection: Connection

  constructor(private config: KernelMySQLConfig) {
    this.connection = mysql.createConnection(this.config)
    this.connection.connect()
  }



}
