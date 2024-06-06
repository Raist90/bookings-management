<script setup lang="ts">
defineProps<{
  closeDialog: () => void
  isTravelDialogOpen: boolean
}>()
</script>

<template>
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
                  class="order-last aspect-square h-[300px] w-full space-y-5 px-2 text-start xl:order-first xl:h-full"
                >
                  <NuxtImg
                    alt=""
                    src="https://picsum.photos/2000?random=1"
                    class="h-full w-full border border-black object-cover"
                  />
                </div>

                <div
                  class="grid h-full p-2 xl:border xl:border-dashed xl:border-gray-400 xl:p-4"
                >
                  <form class="space-y-5 text-start">
                    <div>
                      <label class="mb-2 block" for="name">Name</label>
                      <input
                        class="h-9 w-full border border-gray-400 px-3"
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
                        class="h-24 w-full resize-none border border-gray-400 px-3 py-2"
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
                          class="h-9 w-full border border-gray-400 px-3"
                          type="date"
                          id="departureDate"
                        />
                      </div>
                      <div>
                        <label class="mb-2 block" for="returnDate"
                          >Return date</label
                        >
                        <input
                          class="h-9 w-full border border-gray-400 px-3"
                          type="date"
                          id="returnDate"
                        />
                      </div>
                    </fieldset>

                    <fieldset class="grid grid-cols-2 gap-8">
                      <div>
                        <label class="mb-2 block" for="price">Price</label>
                        <input
                          class="h-9 w-full border border-gray-400 px-3"
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
                          class="h-9 w-full border border-gray-400 px-3"
                          type="number"
                          min="1"
                          max="5"
                          id="averageRating"
                          placeholder="4.7"
                        />
                      </div>
                    </fieldset>
                  </form>

                  <button class="mt-7 h-9 w-full border border-gray-400 px-4">
                    Generate image
                  </button>
                </div>
              </div>

              <div class="mx-4 mb-8 mt-4 flex justify-end gap-4 xl:mx-8">
                <button class="w-[200px] border p-4">Save</button>
                <button @click="closeDialog" class="w-[200px] border p-4">
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
