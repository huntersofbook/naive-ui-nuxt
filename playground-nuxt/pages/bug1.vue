<script setup>
import { NButton, NConfigProvider, NGlobalStyle } from 'naive-ui'
</script>

<template>
  <NConfigProvider>
    <NGlobalStyle />
    <div>
      Nuxt module playground!
      <NButton type="success">
        Default
      </NButton>
      <div class="bg-red-500">
        asd
      </div>
    </div>
  </NConfigProvider>
</template>
