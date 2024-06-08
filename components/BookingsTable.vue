<script setup lang="ts">
defineProps<{
  bookingsRef: Booking[]
  editBooking: (booking: Booking) => void
  removeBooking: (bookingID: number) => void
}>()
</script>

<template>
  <table
    class="my-10 w-full border-collapse border-2 border-b-8 border-black text-sm"
  >
    <thead class="text-nowrap border-2 border-black bg-[#ff4758] text-white">
      <tr class="text-xs [&_th]:px-2 [&_th]:py-4 [&_th]:text-start">
        <th>Actions</th>
        <th>ID</th>
        <th>Customer name</th>
        <th>Customer email</th>
        <th>Customer phone</th>
        <th>Notes</th>
        <th>Payment type</th>
        <th>Travel ID</th>
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
        <td>{{ booking.id }}</td>
        <td>{{ booking.customer.name }}</td>
        <td>{{ booking.customer.email }}</td>
        <td>{{ booking.customer.phone }}</td>
        <td>{{ booking.notes }}</td>
        <td>{{ booking.paymentType }}</td>
        <td>{{ booking.travelId }}</td>
      </tr>
    </tbody>
  </table>
</template>
