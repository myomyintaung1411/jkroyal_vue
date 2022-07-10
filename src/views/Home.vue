

<template>
  <!-- <div class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Ready to dive in?
        <br />
        <span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/about"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
            >Next Page</router-link
          >
        </div>
        <ButtonRepo />
      </div>
    </div>
  </div> -->
  <div class="w-full h-screen">
    <div class="flex  h-screen w-full ">
      <div class="max-w-sm w-60  bg-slate-800 h-screen drawer_bg relative overflow-y-hidden ">
        <div class="text-center flex flex-col justify-center items-center p-5">
          <img src="@/assets/images/logo.png" class="max-w-[220px] max-h-32"  alt="logo">
          <h1 class="text-4xl font-bold tracking-wider text-center pt-3">皇家娱乐</h1>
        </div>
        <div class="py-2 w-full" v-for="n in 6" :key="n">
        <div class=" cursor-pointer">
          <div class="w-full py-3 px-3 rounded bg-slate-50 text-black hover:text-white hover:bg-slate-500 text-center shadow-xl ease-in duration-300 hover:rounded-tl-3xl hover:rounded-bl-3xl cursor-pointer">
            <p class="text-2xl tracking-wide font-medium">Hello</p>
          </div>
        </div>
        </div>
        <div class="absolute bottom-0   m-auto left-0 right-0 cursor-pointer">
          <div class="p-3 rounded bg-slate-50 flex justify-center items-center">
            <LogoutIcon class="w-10 h-10 text-[#350b2d]"></LogoutIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import { LogoutIcon   } from "@heroicons/vue/outline";

</script>
<style scoped>
.drawer_bg{
 background: url("https://template.viserlab.com/casinous/demo/assets/images/banner/bg.png");
 background-size: cover;
 background-repeat: no-repeat;
}
</style>
