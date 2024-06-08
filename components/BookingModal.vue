<script setup lang="ts">
const props = defineProps<{
  closeDialog: () => void
  isBookingDialogOpen: boolean
  travels: Travel[]
  bookingToEdit?: Booking
}>()

const { travels } = props

const initialFormState = {
  firstStep: {
    isActive: true,
    isValid: false,
  },
  secondStep: {
    isActive: false,
    isValid: false,
  },
  thirdStep: {
    isActive: false,
    isValid: false,
  },
}

let formRef = ref(initialFormState)
let selectedTravel = ref<Travel>(travels[0])
let query = ref("")
let travelRef = computed(() =>
  travels.find((travel) => travel.id === selectedTravel.value.id),
)
let bookings = ref<Booking[]>()
/** @todo This will hold the data to write on `localStorage` */
let booking = ref<Booking>()
let customer = ref<Booking["customer"]>({
  age: 0,
  email: "",
  gender: "",
  name: "",
  phone: "",
})
const paymentTypes = ["Credit transfer", "PayPal", "Revolut"] as const
let paymentType = ref<(typeof paymentTypes)[number]>()
let notes = ref<Booking["notes"]>()

const filteredTravel = computed(() =>
  query.value === ""
    ? travels
    : travels.filter((travel) => {
        return travel.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      }),
)

// validators
const validateCustomerForm = (form: typeof customer.value): boolean => {
  return Object.values(form).every(
    (value) => value !== null && value !== "" && value !== 0,
  )
}

const validatePaymentType = (payment: typeof paymentType.value): boolean =>
  !!payment

const isCustomerFormButtonDisabled = computed(
  () => !validateCustomerForm(customer.value),
)
const isPaymentTypeButtonDisabled = computed(
  () => !validatePaymentType(paymentType.value),
)

// handlers
function updateBooking(): void {}
function saveBooking(): void {
  assert(bookings.value)
  assert(travelRef.value)
  /** @todo Add notes */
  const bookingToAdd = {
    customer: customer.value,
    id: bookings.value.length + 1,
    paymentType: paymentType.value,
    travelId: travelRef.value.id,
    notes: notes.value,
  }
  const { data, success, error } = bookingSchema.safeParse(bookingToAdd)
  /** @todo Handle this error */
  assert(success, error)
  bookings.value.push(data)

  localStorage.setItem("bookings", JSON.stringify(bookings.value))
}
function goToSecondStep(): void {
  formRef.value.firstStep.isActive = false
  formRef.value.secondStep.isActive = true
}
function goToThirdStep(): void {
  formRef.value.secondStep.isActive = false
  formRef.value.thirdStep.isActive = true
}
function resetForm(): void {
  formRef.value.firstStep.isActive = true
  formRef.value.secondStep.isActive = false
  formRef.value.thirdStep.isActive = false
  props.closeDialog()
}

/** @todo Make sure to remove this one once you've done */
const isDisabled = false

onMounted(() => (bookings.value = inject<Booking[]>("bookings")))
</script>

<template>
  <HeadlessTransitionRoot appear :show="isBookingDialogOpen" as="template">
    <HeadlessDialog as="div" class="relative" :open="isBookingDialogOpen">
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
              v-if="formRef.firstStep.isActive"
              class="mx-2 h-2/3 w-full transform overflow-auto border-2 border-b-8 border-black bg-white text-center align-middle font-body shadow-xl transition-all xl:mx-0 xl:h-auto xl:w-2/3 xl:overflow-hidden"
            >
              <div
                class="sticky top-0 z-[1] flex justify-between border-b-2 border-black bg-[#ff4758] p-4 text-start text-white"
              >
                <p><strong>Add a new booking</strong></p>
                <button @click="resetForm"><IconX /></button>
              </div>

              <div
                class="flex flex-col gap-x-2 gap-y-5 p-4 lg:p-8 xl:flex-row xl:gap-8"
              >
                <div class="text-start">
                  <HeadlessCombobox v-model="selectedTravel">
                    <label class="mb-2 block" for="search"
                      >Select a travel</label
                    >
                    <div
                      class="relative w-72 cursor-default overflow-hidden border focus:outline-none"
                    >
                      <HeadlessComboboxInput
                        id="search"
                        class="h-9 w-full border border-gray-400 px-3 focus:ring-0"
                        :display-value="
                          (selectedTravel: any) => selectedTravel.name
                        "
                        @change="query = $event.target.value"
                      />
                      <HeadlessComboboxButton
                        class="absolute inset-y-0 right-0 flex items-center pr-2"
                      >
                        <IconChevronDown
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </HeadlessComboboxButton>
                    </div>
                    <HeadlessComboboxOptions
                      class="mt-1 max-h-60 w-72 overflow-auto border border-gray-400"
                    >
                      <HeadlessComboboxOption
                        as="template"
                        v-for="travel in filteredTravel"
                        :key="travel.id"
                        :value="travel"
                        v-slot="{ selected, active }"
                      >
                        <li
                          class="relative cursor-default select-none py-2 pl-10 pr-4"
                          :class="{
                            'bg-primary-color text-white': active,
                            'text-gray-900': !active,
                          }"
                        >
                          <span
                            class="block truncate"
                            :class="{
                              'font-bold': selected,
                            }"
                          >
                            {{ travel.name }}
                          </span>
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                            :class="{
                              'text-white': active,
                              'text-teal-600': !active,
                            }"
                          >
                            <IconCheck class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </HeadlessComboboxOption>
                    </HeadlessComboboxOptions>
                  </HeadlessCombobox>
                </div>

                <div
                  v-if="travelRef"
                  class="relative grid h-[400px] w-full gap-8 border border-gray-400 xl:h-[600px]"
                >
                  <div
                    class="w-full space-y-2 place-self-end border-t border-gray-400 bg-white p-4 text-start"
                  >
                    <p>
                      <strong>{{ travelRef.name }}</strong>
                    </p>

                    <p>{{ travelRef.description }}</p>
                  </div>

                  <div class="absolute left-0 top-0 z-[-1] h-full w-full">
                    <NuxtImg
                      class="h-full w-full object-cover"
                      alt=""
                      :src="`https://picsum.photos/2000?random=${travelRef.id}`"
                    />
                  </div>
                </div>
              </div>

              <div class="mx-4 mb-8 mt-4 flex justify-end gap-4 xl:mx-8">
                <button
                  v-if="props.bookingToEdit"
                  :disabled="isDisabled"
                  @click="updateBooking"
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Update
                </button>
                <button
                  v-else
                  :disabled="isDisabled"
                  @click="goToSecondStep"
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Next
                </button>
                <button @click="resetForm" class="w-[200px] border p-4">
                  Cancel
                </button>
              </div>
            </HeadlessDialogPanel>

            <HeadlessDialogPanel
              v-else-if="formRef.secondStep.isActive"
              class="mx-2 h-auto w-full transform overflow-auto border-2 border-b-8 border-black bg-white text-center align-middle font-body shadow-xl transition-all xl:mx-0 xl:w-1/3 xl:overflow-hidden"
            >
              <div
                class="sticky top-0 z-[1] flex justify-between border-b-2 border-black bg-[#ff4758] p-4 text-start text-white"
              >
                <p><strong>Add a new booking</strong></p>
                <button @click="resetForm"><IconX /></button>
              </div>

              <div class="grid p-4 lg:p-8">
                <form class="space-y-5 text-start">
                  <div>
                    <label class="mb-2 block" for="name">Name</label>
                    <input
                      v-model="customer.name"
                      class="h-9 w-full border border-gray-400 px-3"
                      type="text"
                      placeholder="John Doe"
                      id="name"
                    />
                  </div>

                  <div>
                    <label class="mb-2 block" for="email">Email</label>
                    <input
                      v-model="customer.email"
                      class="h-9 w-full border border-gray-400 px-3"
                      placeholder="john.doe@example.com"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="mb-2 block" for="phone">Phone</label>
                    <input
                      v-model="customer.phone"
                      class="h-9 w-full border border-gray-400 px-3"
                      placeholder="+1234567890"
                      id="phone"
                    />
                  </div>

                  <fieldset class="grid grid-cols-2 gap-8">
                    <div>
                      <label class="mb-2 block" for="age">Age</label>
                      <input
                        v-model="customer.age"
                        class="h-9 w-full border border-gray-400 px-3"
                        type="number"
                        id="age"
                      />
                    </div>

                    <div>
                      <legend class="mb-2">Gender</legend>
                      <div class="space-x-2">
                        <input
                          v-model="customer.gender"
                          class="border border-gray-400 px-3"
                          type="radio"
                          id="male"
                          value="male"
                        />
                        <label class="mb-2" for="male">Male</label>
                      </div>

                      <div class="space-x-2">
                        <input
                          v-model="customer.gender"
                          class="border border-gray-400 px-3"
                          type="radio"
                          id="female"
                          value="female"
                        />
                        <label class="mb-2" for="female">Female</label>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>

              <div class="mx-4 mb-8 mt-4 flex justify-end gap-4 xl:mx-8">
                <button
                  @click="
                    () => {
                      ;(formRef.firstStep.isActive = true),
                        (formRef.secondStep.isActive = false)
                    }
                  "
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  :disabled="isCustomerFormButtonDisabled"
                  @click="goToThirdStep"
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Next
                </button>
                <button @click="resetForm" class="w-[200px] border p-4">
                  Cancel
                </button>
              </div>
            </HeadlessDialogPanel>

            <HeadlessDialogPanel
              v-else="formRef.thirdStep.isActive"
              class="mx-2 h-2/3 w-fit transform overflow-auto border-2 border-b-8 border-black bg-white align-middle font-body shadow-xl transition-all xl:mx-0 xl:h-auto xl:w-2/4 xl:overflow-hidden"
            >
              <div
                class="sticky top-0 z-[1] flex justify-between border-b-2 border-black bg-[#ff4758] p-4 text-white"
              >
                <p><strong>Add a new booking</strong></p>
                <button @click="resetForm"><IconX /></button>
              </div>

              <div
                class="mx-auto grid w-full grid-cols-1 gap-12 p-4 lg:p-8 xl:grid-cols-2"
              >
                <div class="h-full space-y-5">
                  <legend>Select a payment type</legend>
                  <div
                    :class="
                      clsx(
                        paymentType === payment &&
                          'border-none bg-primary-color font-bold text-white',
                        'flex h-9 items-center gap-2 border border-gray-400 p-8',
                      )
                    "
                    v-for="payment in paymentTypes"
                  >
                    <input
                      v-model="paymentType"
                      type="radio"
                      :id="payment"
                      :value="payment"
                    />
                    <label :for="payment">{{ payment }}</label>
                  </div>
                </div>

                <div>
                  <label class="mb-5 block" for="notes">Additional notes</label>
                  <textarea
                    v-model="notes"
                    class="h-2/3 w-full resize-none border border-gray-400 px-3 py-2"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    id="notes"
                  ></textarea>
                </div>
              </div>

              <div class="mx-4 mb-8 mt-4 flex justify-end gap-4 xl:mx-8">
                <button
                  @click="
                    () => {
                      ;(formRef.secondStep.isActive = true),
                        (formRef.thirdStep.isActive = false)
                    }
                  "
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  v-if="props.bookingToEdit"
                  :disabled="isDisabled"
                  @click="updateBooking"
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Update
                </button>
                <button
                  v-else
                  :disabled="isPaymentTypeButtonDisabled"
                  @click="saveBooking"
                  class="w-[200px] border p-4 disabled:opacity-50"
                >
                  Save
                </button>
                <button @click="resetForm" class="w-[200px] border p-4">
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
