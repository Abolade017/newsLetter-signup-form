<template>
  <div class="mx-auto max-w-4xl">
    <div
      class="h-full md:my-40 my-0 items-center bg-white md:rounded-3xl rounded-none shadow-lg flex-col-reverse flex md:flex-row justify-between space-x-0 md:space-x-10"
    >
      <div class="px-4 md:pl-14 flex flex-col space-y-4 pt-10 md:pt-0">
        <h1 class="font-bold text-dark-slate-grey text-5xl">Stay Updated!</h1>
        <p class="text-charcoal-grey font-normal">
          Join 60,000+ product managers receiving monthly updates on :
        </p>
        <div>
          <div v-for="i in lists" :key="i.update" class="pt-2">
            <div class="flex space-x-2">
              <img src="/images/icon-list.svg" alt="list icon" />
              <p class="text-dark-slated-grey">{{ i.update }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <label for="email" class="text-dark-slated-grey font-bold text-sm"
              >Email address</label
            >
            <p for="email" class="text-tomato font-bold text-sm" v-if="error">
              {{ error }}
            </p>
          </div>
          <input
            type="email"
            name=""
            id=""
            v-model="email"
            required
            class="h-14 w-full mt-2 mb-6 border border-grey outline-none rounded-md placeholder:text-grey placeholder:pl-7 pl-2 focus:bg-red-100 focus:border focus:border-orange-400"
            placeholder="email@company.com"
          />
          <div class="pb-10 md:pb-0">
            <button
              class="w-full bg-dark-slate-grey text-white rounded-md h-14 font-normal hover:opacity-70"
              @click="open = true"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
      <div class="">
        <div class="px-0 md:p-6">
          <img src="/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <Modal v-if="open" @close="open = false" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Modal from "./Modal.vue";

interface Lists {
  update: string;
}

const lists = ref<Lists[]>([
  {
    update: "Product discovery and building what matters",
  },
  {
    update: "Measuring to ensure updates are in success",
  },
  {
    update: "And much more!",
  },
]);
const open = ref<Boolean>(false);
const email = ref<String>("");
const error = computed(() => {
  return email.value === "" ? "Valid email required" : "";
});
</script>
