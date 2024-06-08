<script setup lang="ts">
useHead({
  title: `Bookings | ${APP_NAME}`,
})

let bookingsRef = ref<Booking[]>()
let travelsRef = ref<Travel[]>()
let isBookingDialogOpen = ref(false)

// we are wrapping this inside `onMounted` to prevent hydration errors since data is coming from `localStorage`
onMounted(() => {
  bookingsRef.value = inject<Booking[]>("bookings")
  travelsRef.value = inject<Travel[]>("travels")
})

// handlers
function addBooking(): void {
  isBookingDialogOpen.value = true
}
function closeDialog(): void {
  isBookingDialogOpen.value = false
}
</script>

<template>
  <BookingModal
    v-if="travelsRef"
    :closeDialog
    :isBookingDialogOpen
    :travels="travelsRef"
  />

  <div class="mb-4">
    <h1 class="text-4xl">Bookings</h1>
  </div>

  <div>
    <button @click="addBooking" class="flex gap-3 border p-4">
      <IconCirclePlus /> Add a new booking
    </button>
  </div>

  <div class="mx-auto w-full overflow-x-auto">
    <BookingsTable v-if="isArray(bookingsRef)" :bookings-ref />
  </div>
</template>