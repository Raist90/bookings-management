<script setup lang="ts">
const props = defineProps<{ filters: Record<string, { isActive: boolean }> }>()

const filterOptions = Object.keys(props.filters)
</script>

<template>
  <div
    class="mx-auto mt-10 w-fit rounded-lg border border-b-4 border-black p-2"
  >
    <div class="flex flex-wrap items-center gap-3 text-xs">
      <p class="text-sm"><strong>Filters</strong></p>
      <div
        v-for="filter in filterOptions"
        class="inline-flex items-center gap-1"
      >
        <input
          type="checkbox"
          :id="filter"
          v-model="filters[filter].isActive"
        />
        <label :for="filter">{{ filter }}</label>
      </div>
    </div>
  </div>
</template>
