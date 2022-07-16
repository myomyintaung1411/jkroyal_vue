<template>
    <div class="w-full  flex flex-wrap ">
        <singleCowCow v-for="data in cowcowData" :key="data.roomId" :data="data" ></singleCowCow>
        <!-- <singleBjl v-for="data in bjlData" :key="data.roomId" :data="data" ></singleBjl> -->
    </div>
</template>

<script setup>
import singleCowCow from "@/components/singleCowCow.vue";
import pomelo from "@/socket/pomelo.js";
import { ref, onMounted } from 'vue'
const cowcowData = ref(null)

function getDragonTiger(type) {
    console.log(type);
    const sendStr = {
        router: 'getDeskLists',
        JsonData: {
            type: type,
            findname: '',
            deskname: ''
        }
    }
    console.log(sendStr + "sendStr");
    pomelo.send(sendStr, res => {
        console.log(res.JsonData?.result + 'res of cowcow ************') ;
        if (res.JsonData.result == 'ok' && res.JsonData?.data.length > 0) {
            console.log('resp ', res.JsonData.data)
            cowcowData.value = res.JsonData.data
            // console.log('bjlData data ', bjlData.value)
            console.log("rrrrrrrr");
        }
    })
}
onMounted(() => {
    getDragonTiger('nn')
})
</script>

<style>
</style>