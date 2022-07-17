<template>
    <div class="px-3 w-full  flex flex-wrap">
        <div class="h-20 flex items-center w-80 mx-4 " v-for="n in 6" :key="n">
          <div class="h-full bg-emerald-600 w-1/2 flex justify-center ">
            <img src="@/assets/images/logo.png" alt="" class="h-full ">
          </div>
          <div class="flex flex-col items-center bg-indigo-600 w-1/2 h-full justify-center">
            <p>one</p>
            <p>1</p>
          </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>