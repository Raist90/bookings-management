<script setup lang="ts">
defineProps<{
  bookingsRef: Booking[]
  editBooking: (booking: Booking) => void
  removeBooking: (bookingID: number) => void
}>()

const filters = ref({
  customerAge: { isActive: false },
  customerEmail: { isActive: true },
  customerGender: { isActive: false },
  customerName: { isActive: true },
  customerPhone: { isActive: true },
  id: { isActive: true },
  notes: { isActive: true },
  paymentType: { isActive: true },
  travelID: { isActive: true },
})
</script>

<template>
  <Filters :filters />

  <table
    class="my-10 w-full border-collapse border-2 border-b-8 border-black text-sm"
  >
    <thead
      class="text-nowrap border-2 border-black bg-primary-color text-white"
    >
      <tr class="text-xs [&_th]:px-2 [&_th]:py-4 [&_th]:text-start">
        <th>Actions</th>
        <th v-if="filters.id.isActive">ID</th>
        <th v-if="filters.customerName.isActive">Customer name</th>
        <th v-if="filters.customerAge.isActive">Customer age</th>
        <th v-if="filters.customerEmail.isActive">Customer email</th>
        <th v-if="filters.customerGender.isActive">Customer gender</th>
        <th v-if="filters.customerPhone.isActive">Customer phone</th>
        <th v-if="filters.notes.isActive">Notes</th>
        <th v-if="filters.paymentType.isActive">Payment type</th>
        <th v-if="filters.travelID.isActive">Travel ID</th>
      </tr>
    </thead>

    <tbody>
      <tr
        class="p-4 [&_td]:text-nowrap [&_td]:border-y [&_td]:border-black [&_td]:p-2"
        v-for="booking in bookingsRef"
      >
        <td class="z-1 w-0 border-r">
          <div class="grid w-max grid-cols-2 gap-2 p-2">
            <button @click="editBooking(booking)">
              <IconPencil
                :stroke-width="1"
                :size="18"
                fill="rgb(229, 231, 235)"
              />
            </button>
            <button @click="removeBooking(booking.id)">
              <IconTrash2
                :stroke-width="1"
                :size="18"
                fill="rgb(229, 231, 235)"
              />
            </button>
          </div>
        </td>
        <td v-if="filters.id.isActive">{{ booking.id }}</td>
        <td v-if="filters.customerName.isActive">
          {{ booking.customer.name }}
        </td>
        <td v-if="filters.customerAge.isActive">{{ booking.customer.age }}</td>
        <td v-if="filters.customerEmail.isActive">
          {{ booking.customer.email }}
        </td>
        <td v-if="filters.customerGender.isActive">
          {{ capitalize(booking.customer.gender) }}
        </td>
        <td v-if="filters.customerPhone.isActive">
          {{ booking.customer.phone }}
        </td>
        <td v-if="filters.notes.isActive">{{ booking.notes }}</td>
        <td v-if="filters.paymentType.isActive">{{ booking.paymentType }}</td>
        <td v-if="filters.travelID.isActive">{{ booking.travelId }}</td>
      </tr>
    </tbody>
  </table>
</template>
