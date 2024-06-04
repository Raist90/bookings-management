<script setup lang="ts">
let travelsRef = ref<Travel[]>()
let isOpen = ref(false)
let toastMsg = ref("")

// we are wrapping this inside `onMounted` to prevent hydration errors since data is coming from `localStorage`
onMounted(() => {
  travelsRef.value = inject<Travel[]>("travels")
})

function removeTravel(travelID: number): void {
  assert(travelsRef.value)
  /** @todo Refactor this mess */
  toastMsg.value = `Travel "${travelsRef.value.find((travel) => travel.id === travelID)?.name}" was correctly removed!`

  travelsRef.value = travelsRef.value.filter((travel) => travel.id !== travelID)

  localStorage.setItem("travels", JSON.stringify(travelsRef.value))

  isOpen.value = true
}

function closeDialog(): void {
  isOpen.value = false
}
</script>

<template>
  <div>
    <h1 class="text-4xl">Travels</h1>
  </div>
  <Toast :closeDialog :isOpen :msg="toastMsg" />

  <div class="mx-auto w-full overflow-x-auto">
    <table
      class="my-10 w-full border-collapse border-2 border-b-8 border-black text-sm"
    >
      <thead class="text-nowrap border-2 border-black bg-[#ff4758] text-white">
        <tr class="text-xs [&_th]:px-2 [&_th]:py-4 [&_th]:text-start">
          <th>Actions</th>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Departure date</th>
          <th>Return date</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="p-4 [&_td]:text-nowrap [&_td]:border-y [&_td]:border-black [&_td]:p-2"
          v-for="travel in travelsRef"
          :key="travel.id"
        >
          <td class="z-1 border-r">
            <div class="grid w-max grid-cols-2 gap-2 p-2">
              <button>
                <IconPencil
                  :stroke-width="1"
                  :size="18"
                  fill="rgb(229, 231, 235)"
                />
              </button>
              <button @click="removeTravel(travel.id)">
                <IconTrash2
                  :stroke-width="1"
                  :size="18"
                  fill="rgb(229, 231, 235)"
                />
              </button>
            </div>
          </td>
          <td>{{ travel.id }}</td>
          <td>
            <div class="aspect-square w-[50px]">
              <NuxtImg
                class="h-full w-full rounded-sm object-cover"
                :alt="travel.images[0].alt"
                :src="travel.images[0].src"
              />
            </div>
          </td>
          <td>{{ travel.name }}</td>
          <td>{{ travel.description }}</td>
          <td>{{ travel.departureDate }}</td>
          <td>{{ travel.returnDate }}</td>
          <td>{{ travel.price }} €</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
