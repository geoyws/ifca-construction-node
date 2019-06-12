import { KernelMain } from 'kernel'
import { KernelMainConfig } from 'kernel/kernel-main'

const config: KernelMainConfig = {
  port: 1337,
  graphql: {
    schemas: []
  },
  mysql: {
    endpoints: []
  },
  redis: {
    port: 6379
  }
}

new KernelMain(
  config
)