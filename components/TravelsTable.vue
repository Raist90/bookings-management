<script setup lang="ts">
defineProps<{
  editTravel: (travel: Travel) => void
  removeTravel: (travelID: number) => void
  travelsRef: Travel[]
}>()

const filters = ref({
  averageRating: { isActive: false },
  departureDate: { isActive: true },
  description: { isActive: true },
  id: { isActive: true },
  images: { isActive: true },
  name: { isActive: true },
  price: { isActive: true },
  returnDate: { isActive: true },
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
        <th v-if="filters.images.isActive">Image</th>
        <th v-if="filters.name.isActive">Name</th>
        <th v-if="filters.averageRating.isActive">Av. Rating</th>
        <th v-if="filters.description.isActive">Description</th>
        <th v-if="filters.departureDate.isActive">Departure date</th>
        <th v-if="filters.returnDate.isActive">Return date</th>
        <th v-if="filters.price.isActive">Price</th>
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
            <button @click="editTravel(travel)">
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
        <td v-if="filters.id.isActive">{{ travel.id }}</td>
        <td v-if="filters.images.isActive">
          <div class="aspect-square w-[50px]">
            <NuxtImg
              class="h-full w-full rounded-sm object-cover"
              :alt="travel.images[0].alt"
              :src="travel.images[0].src"
            />
          </div>
        </td>
        <td v-if="filters.name.isActive">{{ travel.name }}</td>
        <td v-if="filters.averageRating.isActive">
          {{ travel.averageRating }}
        </td>
        <td v-if="filters.description.isActive">{{ travel.description }}</td>
        <td v-if="filters.departureDate.isActive">
          {{ travel.departureDate }}
        </td>
        <td v-if="filters.returnDate.isActive">{{ travel.returnDate }}</td>
        <td v-if="filters.price.isActive">{{ travel.price }} €</td>
      </tr>
    </tbody>
  </table>
</template>
