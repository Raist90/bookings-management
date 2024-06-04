<script setup lang="ts">
const global = await useGlobal()

// iterating over global to provide all app data to components
for (const key in global) {
  provide(key, global[key as keyof typeof global])
}
</script>

<template>
  <main class="mx-auto my-8 w-10/12 font-body">
    <NuxtPage />
  </main>
</template>
