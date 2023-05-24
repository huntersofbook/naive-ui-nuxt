export default defineNuxtConfig({
  modules: [
    '../src/module',
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
})
