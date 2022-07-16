<template>
    <div class="w-full  flex flex-wrap ">
        <!-- <singleBjl v-for="data in bjlData" :key="data.roomId" :data="data"></singleBjl> -->
    </div>
</template>

<script setup>
import singleBjl from "@/components/singleBjl.vue";
import pomelo from "@/socket/pomelo.js";
import { ref, onMounted } from 'vue'
const bjlData = ref(null)
function getDeskLists(type) {
    console.log(type);
    const sendStr = {
        router: 'getDeskLists',
        JsonData: {
            type: type,
            findname: '',
            deskname: ''
        }
    }
    pomelo.send(sendStr, res => {
        // console.log('resp ', res)
        if (res.JsonData.result == 'ok' && res.JsonData.data.length > 0) {
            console.log('resp ', res.JsonData.data)
            bjlData.value = res.JsonData.data
            // console.log('bjlData data ', bjlData.value)
            console.log("rrrrrrrr");
        }
    })
}

   function  mergedData() {
      const merged = bjlData.value.reduce(
        (r, { rType, ...rest }) => {
          const key = `${rType}`;
          r[key] = r[key] || { rType, fixs: [] };
          let newObj = { rType, ...rest };
          r[key]["fixs"].push(newObj);
          return r;
        },
        {}
      );

      const fixtureData = Object.values(merged);
      console.log(fixtureData, "merged fixtures ************");
      return fixtureData;
    }

onMounted(() => {
    getDeskLists('all')
})
</script>

<style>
</style>