<script setup lang="ts">
const props = defineProps<{
  closeDialog: () => void
  isTravelDialogOpen: boolean
  travelToEdit?: Travel
}>()

const { closeDialog } = props

let travels = ref<Travel[]>()
let travelImage = ref<string>()

let isToastOpen = ref(false)
let toastMsg = ref("")
function closeToast(): void {
  isToastOpen.value = false
}

const formInitialState = {
  name: "",
  description: "",
  departureDate: "",
  returnDate: "",
  price: 0,
  averageRating: 0,
}

const formRef = ref<Partial<Travel>>(formInitialState)

function updateFormRef(travelToEdit?: Travel): void {
  if (travelToEdit) {
    const { images, ...rest } = travelToEdit
    formRef.value = {
      ...rest,
    }
  } else {
    formRef.value = formInitialState
  }
}

watch(
  () => props.travelToEdit,
  (travel) => {
    updateFormRef(travel)
  },
  { immediate: true },
)

const validateForm = (form: typeof formRef.value): boolean => {
  return Object.values(form).every((value) => value !== null && value !== "")
}

const isDisabled = computed(() => !validateForm(formRef.value))

function generateImage(): void {
  travelImage.value = `${PICSUM_URL}/2000?random=${Math.floor(Math.random() * 100)}`
}

onMounted(() => {
  travels.value = inject<Travel[]>("travels")
})

function updateTravel(): void {
  assert(travels.value)
  const travelToUpdate = {
    ...formRef.value,
    id: formRef.value.id,
    images: [
      {
        alt: "",
        src:
          travelImage.value || `${PICSUM_URL}/2000?random=${formRef.value.id}`,
      },
    ],
  }
  const { data, success, error } = travelSchema.safeParse(travelToUpdate)
  assert(success, error)

  travels.value[
    travels.value.findIndex((travel) => travel.id === formRef.value.id)
  ] = data

  localStorage.setItem("travels", JSON.stringify(travels.value))

  closeDialog()

  toastMsg.value = `Travel "${travelToUpdate.name}" was successfully updated!`
  isToastOpen.value = true
}

function saveTravel(): void {
  const errMsg = `No travels data on ${saveTravel.name}`
  assert(travels.value, errMsg)
  const travelID = travels.value?.length + 1
  const travelToAdd = {
    ...formRef.value,
    id: travelID,
    images: [
      {
        alt: "",
        src: travelImage.value || `${PICSUM_URL}/2000?random=${travelID}`,
      },
    ],
  }
  const { data, success, error } = travelSchema.safeParse(travelToAdd)
  assert(success, error)
  travels.value.push(data)

  localStorage.setItem("travels", JSON.stringify(travels.value))

  closeDialog()

  toastMsg.value = `Travel "${travelToAdd.name}" was successfully added!`
  isToastOpen.value = true
}
</script>

<template>
  <Toast :closeDialog="closeToast" :isToastOpen :msg="toastMsg" />

  <HeadlessTransitionRoot appear :show="isTravelDialogOpen" as="template">
    <HeadlessDialog as="div" class="relative" :open="isTravelDialogOpen">
      <HeadlessTransitionChild
        as="template"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/50" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex h-full min-h-full items-center justify-center">
          <HeadlessTransitionChild
            as="template"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="mx-2 h-2/3 w-full transform overflow-auto border-2 border-b-8 border-black bg-white text-center align-middle font-body shadow-xl transition-all xl:mx-0 xl:h-auto xl:w-2/3 xl:overflow-hidden"
            >
              <div
                class="sticky top-0 flex justify-between border-b-2 border-black bg-[#ff4758] p-4 text-start text-white"
              >
                <p><strong>Add a new travel</strong></p>
                <button @click="closeDialog"><IconX /></button>
              </div>

              <div
                class="grid grid-cols-1 gap-x-2 gap-y-5 p-2 lg:p-8 xl:grid-cols-2 xl:gap-8"
              >
                <div
                  class="order-last aspect-square h-[300px] w-full space-y-5 px-2 text-start md:h-[500px] xl:order-first xl:h-full"
                >
                  <NuxtImg
                    alt=""
                    id="travelImage"
                    :src="
                      travelImage ||
                      `${PICSUM_URL}/2000?random=${formRef.id}` ||
                      `${PICSUM_URL}/2000?random=${travels.length + 1}`
                    "
                    class="h-full w-full border border-black object-cover"
                  />
                </div>

                <div
                  class="xl:gray-borders grid h-full p-2 xl:border xl:border-dashed xl:p-4"
                >
                  <form class="space-y-5 text-start">
                    <div>
                      <label class="mb-2 block" for="name">Name</label>
                      <input
                        v-model="formRef.name"
                        class="gray-borders h-9 w-full border px-3"
                        type="text"
                        placeholder="A trip in Florence"
                        id="name"
                      />
                    </div>

                    <div>
                      <label class="mb-2 block" for="description"
                        >Description</label
                      >
                      <textarea
                        v-model="formRef.description"
                        class="gray-borders h-24 w-full resize-none border px-3 py-2"
                        placeholder="Relax on the beautiful beaches of Hawaii and explore its islands."
                        id="description"
                      ></textarea>
                    </div>

                    <fieldset class="grid grid-cols-2 gap-8">
                      <div>
                        <label class="mb-2 block" for="departureDate"
                          >Departure date</label
                        >
                        <input
                          v-model="formRef.departureDate"
                          class="gray-borders h-9 w-full border px-3"
                          type="date"
                          id="departureDate"
                        />
                      </div>
                      <div>
                        <label class="mb-2 block" for="returnDate"
                          >Return date</label
                        >
                        <input
                          v-model="formRef.returnDate"
                          class="gray-borders h-9 w-full border px-3"
                          type="date"
                          id="returnDate"
                        />
                      </div>
                    </fieldset>

                    <fieldset class="grid grid-cols-2 gap-8">
                      <div>
                        <label class="mb-2 block" for="price">Price</label>
                        <input
                          v-model="formRef.price"
                          class="gray-borders h-9 w-full border px-3"
                          type="number"
                          id="price"
                          min="0"
                          placeholder="1200"
                        />
                      </div>
                      <div>
                        <label class="mb-2 block" for="averageRating"
                          >Average rating</label
                        >
                        <input
                          v-model="formRef.averageRating"
                          class="gray-borders h-9 w-full border px-3"
                          type="number"
                          min="1"
                          max="5"
                          id="averageRating"
                          placeholder="4.7"
                        />
                      </div>
                    </fieldset>
                  </form>

                  <div class="space-y-2 text-start">
                    <button
                      @click="generateImage"
                      class="gray-borders mt-7 h-9 w-full border px-4"
                    >
                      Generate image*
                    </button>
                    <p class="text-xs">
                      *This will be random anyway on next page reload. In a
                      real-life app it would be a proper
                      <strong>upload image</strong> button instead
                    </p>
                  </div>
                </div>
              </div>

              <div class="mx-4 mb-8 mt-4 flex justify-end gap-4 xl:mx-8">
                <button
                  v-if="props.travelToEdit"
                  :disabled="isDisabled"
                  @click="updateTravel"
                  class="button-base button-primary w-[200px] disabled:opacity-50"
                >
                  Update
                </button>
                <button
                  v-else
                  :disabled="isDisabled"
                  @click="saveTravel"
                  class="button-base button-primary w-[200px] disabled:opacity-50"
                >
                  Save
                </button>
                <button @click="closeDialog" class="button-base w-[200px]">
                  Cancel
                </button>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
