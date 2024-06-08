<script setup lang="ts">
useHead({
  title: `Bookings | ${APP_NAME}`,
})

let bookingsRef = ref<Booking[]>()
let travelsRef = ref<Travel[]>()
let isBookingDialogOpen = ref(false)

let isToastOpen = ref(false)
let toastMsg = ref("")
let bookingToEdit = ref<Booking>()

onMounted(() => {
  bookingsRef.value = inject<Booking[]>("bookings")
  travelsRef.value = inject<Travel[]>("travels")
})

// handlers
function addBooking(): void {
  isBookingDialogOpen.value = true
}

function editBooking(booking: Booking): void {
  bookingToEdit.value = booking
  isBookingDialogOpen.value = true
}

function removeBooking(bookingID: number): void {
  assert(bookingsRef.value)
  toastMsg.value = `Booking with the ID of "${bookingsRef.value.find((booking) => booking.id === bookingID)?.id}" was correctly removed!`

  bookingsRef.value = bookingsRef.value.filter(
    (booking) => booking.id !== bookingID,
  )

  localStorage.setItem("bookings", JSON.stringify(bookingsRef.value))

  isToastOpen.value = true
}
function closeDialog(): void {
  isToastOpen.value = false
  isBookingDialogOpen.value = false
  // we reset this so that next time we add a new booking form will be empty
  bookingToEdit.value = undefined
}
</script>

<template>
  <Toast :closeDialog :isToastOpen :msg="toastMsg" />
  <BookingModal
    v-if="travelsRef"
    :bookingToEdit
    :closeDialog
    :isBookingDialogOpen
    :travels="travelsRef"
  />

  <div class="mb-4">
    <h1 class="text-4xl">Bookings</h1>
  </div>

  <div>
    <button @click="addBooking" class="button-base flex gap-2">
      <IconCirclePlus /> Add a new booking
    </button>
  </div>

  <div class="mx-auto w-full overflow-x-auto">
    <BookingsTable
      v-if="isArray(bookingsRef)"
      :bookings-ref
      :edit-booking
      :remove-booking
    />
  </div>
</template>
