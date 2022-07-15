<template>
    <div class="w-full  flex flex-wrap ">
        <singleBjl v-for="data in bjlData" :key="data.roomId" :data="data" ></singleBjl>
    </div>
</template>

<script setup>
import singleBjl from "@/components/singleBjl.vue";
import pomelo from "@/socket/pomelo.js";
import { ref, onMounted } from 'vue'
const bjlData = ref(null)
function getBjlLists(type) {
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
        console.log(res.JsonData + 'res ************') ;
        if (res.JsonData?.result == 'ok' && res.JsonData?.data.length > 0) {
            console.log('resp ', res.JsonData.data)
            bjlData.value = res.JsonData.data
            // console.log('bjlData data ', bjlData.value)
            console.log("rrrrrrrr");
        }
    })
}
onMounted(() => {
    getBjlLists('bjl')
})
</script>

<style>
</style>