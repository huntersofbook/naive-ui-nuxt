export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  typescript: {
    tsConfig: {
      include: [
        '../../tests/**/*.ts',
        '../../*.ts',
        '../../src/**/*.ts',
      ],
      compilerOptions: {
        paths: {
          '~/vue/*': [
            '../playground-vue/*',
          ],
          '~/vue': [
            '../playground-vue',
          ],
        },
      },
    },
  },
})
