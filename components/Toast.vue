<script setup lang="ts">
defineProps<{
  closeDialog: () => void
  isOpen: boolean
  msg: string
}>()
</script>

<template>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog
      class="fixed inset-y-10 grid w-full items-end justify-center"
      :open="isOpen"
      :onClose="closeDialog"
    >
      <HeadlessTransitionChild
        as="template"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-[-1] bg-black/25" />
      </HeadlessTransitionChild>

      <div
        class="mx-4 border-l-2 border-green-500 bg-white p-4 font-body text-sm"
      >
        <HeadlessTransitionChild
          as="template"
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <HeadlessDialogPanel>
            <p>
              {{ msg }}
            </p>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
