import { fileURLToPath } from 'node:url'
import { describe, it } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'

describe('module', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../../playground-nuxt', import.meta.url)),
    build: true,
  })

  it('should purge classes', async () => {
    const ctx = useTestContext()
  })
})
