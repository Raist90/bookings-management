<script setup lang="ts">
let links = ref<Navigation["header"]["primary"]>()
onMounted(() => {
  const navigation = inject<Navigation>("navigation")
  const errMsg = "Can't inject navigation"
  assert(navigation, errMsg)
  const primary = navigation.header.primary
  links.value = primary
})
</script>

<template>
  <header
    role="banner"
    class="mx-auto mt-8 w-10/12 border-2 border-b-8 border-black bg-primary-color p-4 font-body text-white"
  >
    <nav>
      <ul class="flex gap-4">
        <li aria-label="logo" class="font-bold">Logo</li>
        <li v-for="link in links">
          <NuxtLink :href="link.href">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <slot />
</template>
