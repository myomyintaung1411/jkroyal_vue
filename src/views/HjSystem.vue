<script setup>
import { ref, onMounted, computed,onBeforeUnmount,reactive } from 'vue'

const statistic = ref({
    banker: 0,
    player: 0,
    tie: 0,
    bPair: 0,
    pPair: 0,
})

const zp = ref({
    lst: [],
    col: 0,
    row: 0,
})
const dl = ref(
    {
        lst: [],
        row: 0,
        col: 0,
        pr: 0,
        pc: 0,
        nc: 0,
        cl: false,
        clNum: 0,
        good: 0,
        ab: {
            row: -1,
            col: -1,
        },
        ap: {
            row: -1,
            col: -1
        },
        pointCol: 0,
        stat: {}
    },
)

const initData = () => {
    zp.value.col = zp.value.row = 0
    zp.value.lst = []
    let colsNumUnit = 32
    for (let i = 0; i < colsNumUnit; i++) {
        zp.value.lst.push([0, 0, 0, 0, 0, 0])
    }
    dl.value.col = dl.value.row = 0
    dl.value.lst = []
    dl.value.pr = dl.value.pc = dl.value.nc = 0
    dl.value.cl = false
    dl.value.clNum = 0
    dl.value.stat = {}
    dl.value.pointCol = 0
    for (let i = 0; i < colsNumUnit * 2; i++) {
        dl.value.lst.push([101, 200, 101, 101, 101, 101])
    }
    statistic.value.banker = 0
    statistic.value.player = 0
    statistic.value.tie = 0
    statistic.value.bPair = 0
    statistic.value.pPair = 0
}

onMounted(() => {
    initData()
})
</script>
<template>
    <section class="w-full min-w-[1280px] ">
      <div class="w-full">
        <div class="py-1 px-2 bg-slate-600 text-sm text-white w-full  flex items-center">
           
            <div class="px-3 py-1 cursor-pointer bg-yellow-700 ">全台监控</div>
            <div class="px-3 py-1 cursor-pointer bg-green-700 ">单台监控</div>
            <div class="px-3 py-1 cursor-pointer bg-red-700 ">输赢查询</div>
            <div class="px-3 py-1 cursor-pointer bg-indigo-700 ">投注对比</div>
        </div>
      </div>
      <section class="w-full flex pt-2">
        <div class="h-[280px] bg-neutral-800 text-2xl w-[180px] flex justify-center items-center">
            <p>开局</p>
        </div>
        <div class="scroll_main overflow-y-hidden  area__ relative ">
            <div class="dl-section border-t border-slate-500  r-section text-white whitespace-nowrap scrollbar__   h-full overflow-y-hidden">
                <div class="col c2  h-[240px]    text-center  " v-for="(col, iCol) in dl.lst" :key="iCol">
                        <div class="cell border-b border-slate-500 w-[40px] h-10   text-center overflow-hidden " v-for="(c, iRow) in col" :key="iRow">

                            <img v-if="c >= 100" :src="'/static/img/dl-' + c + '.png'" alt=""
                                class="h-[100%] w-full p-2  align-center ">
                               
                        </div>
                    </div>
            </div>
        </div>
        <div class="flex">
            <div class="w-[100px] bg-zinc-500 flex flex-col text-[18px]">
                <div class="border-b flex items-center justify-center border-gray-900 h-[100px]">
                    台桌 选择
                </div>
                <div style="writing-mode: vertical-rl;text-orientation: upright;"
                    class=" flex justify-center items-center tracking-widest   text-center bg-blue-600    h-[180px]">
                    屏蔽占成比例
                </div>
            </div>
            <div class="w-[50px] bg-red-800 flex flex-col text-[18px]"></div>
        </div>
        <section class="flex">
            <div style="writing-mode: vertical-rl;text-orientation: upright;" 
        class="w-[50px] bg-stone-800 tracking-widest flex flex-col justify-center items-center text-[18px]">
            代理关注区
        </div>
        <div class="w-[100px] bg-zinc-500 flex flex-col text-[18px]">
        </div>
        </section>
        <section class="flex">
            <div style="writing-mode: vertical-rl;text-orientation: upright;" 
        class="w-[50px] bg-stone-800 tracking-widest flex flex-col justify-center items-center text-[18px]">
        会  员  关注区
        </div>
        <div class="w-[100px] bg-zinc-500 flex flex-col text-[18px]">
        </div>
        </section>
        <section class="flex">
            <div style="writing-mode: vertical-rl;text-orientation: upright;" 
        class="w-[50px] bg-stone-800 tracking-widest flex flex-col justify-center items-center text-[18px]">
        关注上线提醒
        </div>
        <div class="w-[100px] bg-zinc-500 flex flex-col text-[18px]">
        </div>
        </section>
      </section>

              <!-- table -->
            <section class="flex flex-col w-full flex-shrink-0">
                <div class="overflow-x-auto w-full">
                    <div class="py-2 inline-block min-w-full ">
                        <div class="overflow-hidden">
                            <table class="min-w-full border border-gray-500 text-center">
                                <thead class="border-b bg-slate-800 border-gray-500 ">
                                    <tr>
                                        <th rowspan="2" scope="col" class=" font-medium  border-r border-gray-500">
                                            顶级代理 
                                        </th>
                                        <th rowspan="2" scope="col" class=" font-medium  border-r border-gray-500">
                                            顶级占成
                                        </th>
                                        <th rowspan="2" scope="col" class="font-medium  border-r border-gray-500">
                                            会员号
                                        </th>
                                        <th scope="col" colspan="7" class="  font-medium py-2 border-r border-gray-500 border-b">
                                            会 员 下 注
                                        </th>
                                        <th scope="col" colspan="2" class=" font-medium  border-r border-b border-gray-500">
                                            公司利润
                                        </th>
                                        <th scope="col" rowspan="2" class=" font-medium  border-r border-gray-500">
                                            IP
                                        </th>
                                        <th scope="col" rowspan="2" class=" font-medium  border-r border-gray-500">
                                            地区
                                        </th>
                                        <th scope="col" rowspan="2" class="font-medium  border-r border-gray-500">
                                            类型
                                        </th>
                                        <th scope="col" rowspan="2" class="font-medium  border-r border-gray-500">
                                            当前余额
                                        </th>
                                    </tr>
                                    <tr class="text-sm border-gray-500  ">
                                        <th class="border-r border-gray-500"> 庄/龙</th>
                                        <th class="border-r border-gray-500" >闲</th>
                                        <th class="border-r border-gray-500"> 庄对</th>
                                        <th class="border-r border-gray-500">和</th>
                                        <th class="border-r border-gray-500">闲对</th>
                                        <th class="border-r border-gray-500">大</th>
                                        <th class="border-r border-gray-500">小</th>
                                        <th class="border-r border-gray-500">庄</th>
                                        <th class="border-r border-gray-500">闲</th>

                                    </tr>
                                </thead>
                                <tbody class="">
                                    <tr v-for="n in 5" :key="n" class="border-b border-gray-500 ">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium  border-r border-gray-500">1</td>
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap border-r border-gray-500">
                                            Mark
                                        </td>
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap border-r border-gray-500">
                                            Otto
                                        </td>
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap border-r border-gray-500">
                                            one
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            two
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            three
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            four
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            five
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            six
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            seven
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            eight
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            nine
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            ip
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            地区 dd 	
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            类型 ee 	
                                        </td>
                                        <td class="text-sm  font-light px-2 py-4 whitespace-nowrap border-r border-gray-500">
                                            当前余额 ee 	
                                        </td>
                                    </tr>
                                    <!-- <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            Jacob
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            Thornton
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">3</td>
                                        <td colspan="2"
                                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                                            Larry the Bird
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

    </section>
</template>

<style scoped>
.scroll_main{
    @apply w-[calc(100%_-_780px)] min-w-[calc(100%_-_780px)] max-w-[(100%_-_780px)] overflow-x-hidden;

}
.r-section {
    overflow-y: hidden;
    position: relative;
    @apply w-full;
    min-width: 100%;

    will-change: transform;
    user-select: none;
    cursor: grabbing;
    overflow-x: auto;
    /* -ms-overflow-style: none; 
    scrollbar-width: none;   */

    /* width: calc((100vw - 198px)); */
}
.col {
    display: inline-block;
    letter-spacing: 0;
    vertical-align: top;
    border-right: 1px solid;
    @apply border-slate-500;
    /* height: 100%; */
    position: relative;
    text-align: center;
}
</style>