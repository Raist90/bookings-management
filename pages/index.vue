<script setup lang="ts">
let travelsRef = ref<Travel[]>()
let isToastOpen = ref(false)
let isTravelDialogOpen = ref(false)
let toastMsg = ref("")
let travelToEdit = ref<Travel>()

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

  isToastOpen.value = true
}

function closeDialog(): void {
  isToastOpen.value = false
  isTravelDialogOpen.value = false
  // we reset this so that next time we add a new travel form will be empty
  travelToEdit.value = undefined
}

function addTravel(): void {
  isTravelDialogOpen.value = true
}

function editTravel(travel: Travel): void {
  travelToEdit.value = travel
  isTravelDialogOpen.value = true
}
</script>

<template>
  <Toast :closeDialog :isToastOpen :msg="toastMsg" />
  <TravelModal :closeDialog :isTravelDialogOpen :travelToEdit />

  <div class="mb-4">
    <h1 class="text-4xl">Travels</h1>
  </div>

  <div>
    <button @click="addTravel" class="flex gap-3 border p-4">
      <IconCirclePlus /> Add a new travel
    </button>
  </div>

  <div class="mx-auto w-full overflow-x-auto">
    <TravelsTable
      v-if="isArray(travelsRef)"
      :edit-travel
      :remove-travel
      :travels-ref
    />
  </div>
</template>
