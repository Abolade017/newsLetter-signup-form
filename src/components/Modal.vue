<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-dark-slate-grey transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex h-screen md:min-h-full justify-center p-0 md:p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-none md:rounded-3xl bg-white px-0 md:px-4 pb-0 md:pb-4 pt-48 md:pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6"
            >
              <!-- <div class="px-4 pb-6"> -->
              <div class="px-5 pb-6">
                <div
                  class="flex h-12 w-12 items-center rounded-full bg-gradient-to-r from-red-400 to-tomato"
                >
                  <CheckIcon
                    class="h-6 w-6 text-white mx-auto"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-10 sm:mt-5">
                  <DialogTitle as="h3" class="text-5xl font-bold text-gray-900"
                    >Thanks for subscribing!</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      A confirmation email has been sent to
                      <span class="font-bold text-gray-900"
                        >ash@loremcompany.com</span
                      >. please open it and click the button inside to confirm
                      your subscription.
                    </p>
                  </div>
                </div>
                <!-- </div> -->
                <div class="mt-80 sm:mt-6">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-dark-slate-grey md:bg-gradient-to-r from-red-400 to-tomato px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-tomato"
                    @click="open = false"
                  >
                    Dismiss message
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/solid";
const open = ref(true);
</script>
