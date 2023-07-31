<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-4xl my-40">
    <div
      class="h-full items-center bg-white rounded-3xl shadow-lg flex justify-between space-x-10"
    >
      <div class="pl-14 flex flex-col space-y-6">
        <h1 class="font-bold text-dark-slate-grey text-5xl">Stay Updated!</h1>
        <p class="text-charcoal-grey font-normal">
          Join 60,000+ product managers receiving monthly updates on :
        </p>
        <div>
          <ul class="" v-for="i in updates" :key="i.update">
            <li class="text-dark-slated-grey">{{ i.update }}</li>
          </ul>
        </div>
      </div>
      <div class="">
        <div class="p-6">
          <img src="/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const updates = ref<Updates[]>([
  {
    update: "Product discovery and building what matters",
  },
  {
    update: "Measuring to ensure upadtes are in success",
  },
  {
    update: "And much more!",
  },
]);
interface Updates {
  update: string;
}
</script>
