import { setup } from '@css-render/vue3-ssr'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const meta = document.createElement('meta')
    meta.name = 'naive-ui-style'
    document.head.appendChild(meta)
  })

  if (process.server) {
    const { collect } = setup(nuxtApp.vueApp)
    console.log('setup', collect())

    nuxtApp.hook('app:rendered', ({ ssrContext }) => {
      if (!ssrContext)
        return
      const originalRenderMeta = ssrContext.renderMeta
      ssrContext.renderMeta = () => {
        if (!originalRenderMeta) {
          return {
            headTags: collect(),
          }
        }
        const originalMeta = originalRenderMeta()
        if ('then' in originalMeta) {
          return originalMeta.then((resolvedOriginalMeta) => {
            return {
              ...resolvedOriginalMeta,
              headTags: resolvedOriginalMeta.headTags + collect(),
            }
          })
        }
        else {
          return {
            ...originalMeta,
            headTags: originalMeta.headTags + collect(),
          }
        }
      }
    })
  }
})
