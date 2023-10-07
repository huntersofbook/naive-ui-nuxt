# This package has been deprecated

# New Package -> https://github.com/becem-gharbi/nuxt-naiveui

--------------
--------------
--------------
--------------
--------------
--------------


![alt text](https://github.com/huntersofbook/naive-ui-nuxt/blob/main/.github/assets/naive-ui-nuxt.png?raw=true)

# Naive UI Nuxt 3 Module
<br/>

<p>
      <a href="https://www.npmjs.com/package/@huntersofbook/naive-ui-nuxt"><img src="https://img.shields.io/npm/v/@huntersofbook/naive-ui-nuxt.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Version"></a>
      <a href="https://www.npmjs.com/package/@huntersofbook/naive-ui-nuxt"><img src="https://img.shields.io/npm/dm/@huntersofbook/naive-ui-nuxt.svg?style=flat&colorA=002438&colorB=28CF8D" alt="Downloads"></a>
      <a href="./LICENSE"><img src="https://img.shields.io/github/license/huntersofbook/naive-ui-nuxt.svg?style=flat&colorA=002438&colorB=28CF8D" alt="License"></a>
      <a href="https://github.com/huntersofbook/naive-ui-nuxt">
      <img src="https://img.shields.io/github/stars/huntersofbook/naive-ui-nuxt.svg?style=social&label=Star&maxAge=2592000" alt="Github Stars"> </a>
      <a href="https://chat.huntersofbook.com"> <img src="https://img.shields.io/discord/1008640116564181023?color=7289da&label=Discord&logo=discord&logoColor=white" alt="Discord"></a>
</p>

### @huntersofbook/naive-ui-nuxt [![npm](https://img.shields.io/npm/v/@huntersofbook/naive-ui-nuxt.svg)](https://npmjs.com/package/@huntersofbook/naive-ui-nuxt)
<br/>

This module huntersofbook team created.

> [Naive UI](https://www.naiveui.com/en-US/light/components/button) integration for [Nuxt](https://nuxtjs.org)

## Features

- Zero-config required
- Auto-import component and imports
- Tailwind CSS support

## Setup
```
pnpm add @huntersofbook/naive-ui-nuxt
```
```
yarn add @huntersofbook/naive-ui-nuxt
```
```
npm add @huntersofbook/naive-ui-nuxt
```
### Nuxt Config

```ts
export default defineNuxtConfig({
  modules: [
    '@huntersofbook/naive-ui-nuxt'
  ],

  // Optionally, specify global naive-ui config
  // Supports options that are normally set via 'n-config-provider'
  // https://www.naiveui.com/en-US/os-theme/docs/customize-theme
  naiveUI: {
    themeOverrides: {
      common: {
        primaryColor: '#ff0000',
        primaryColorHover: '#8b0000'
      }
    }
  }
})
```

### Composables

```vue
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NGlobalStyle />
    <div>
      Nuxt module playground!
      <NButton>Default</NButton>
    </div>
  </NConfigProvider>
</template>
```


### How to fix naive-ui nuxt conflict with tailwindcss Preflight style ?

The real reason is that tailwind has a preset default style of Preflight, which is friendly to new projects, but when we integrate tailwindcss into existing projects, it will cause style conflicts, we only need to disable this tailwindcss Preflight The style settings in your tailwind.config.js or tailwind.config.cjs

```ts
module.exports = {
  corePlugins: {
    preflight: false,
  }
}
```

Refer to tailwind css official website for explanation：
https://tailwindcss.com/docs/preflight#disabling-preflight


## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Stub module with `pnpm dev:prepare`
- Run `pnpm dev` to start [playground](./playground) in development mode


## Thanks

Thanks to [@07akioni](https://github.com/07akioni), this project is heavily inspired by [naive-ui-nuxt-demo](https://github.com/07akioni/naive-ui-nuxt-demo).

Thanks to [@tobiasdiez](https://github.com/tobiasdiez), this project is inspired by some code structure.
z


## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/oku-ui/static/sponsors/sponsors.svg">
    <img alt="sponsors" src='https://cdn.jsdelivr.net/gh/oku-ui/static/sponsors/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2022-PRESENT [productdevbook](https://github.com/productdevbook)
