export default defineNuxtConfig({
  modules: [
    '@huntersofbook/naive-ui-nuxt',
    '@nuxtjs/tailwindcss',
  ],

  naiveUI: {
    themeOverrides: {
      common: {
        primaryColor: '#ff0000',
        primaryColorHover: '#8b0000',
      },
    },
  },

  typescript: {
    tsConfig: {
      include: [
        '../../tests/**/*.ts',
        '../../*.ts',
        '../../src/**/*.ts',
      ],
      compilerOptions: {
        resolveJsonModule: true,
        paths: {
          '~/nuxt/*': [
            '../playground-nuxt/*',
          ],
        },
      },
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },
})
