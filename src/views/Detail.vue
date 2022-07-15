<template>
    <div class="  bg-slate-700 w-full overflow-hidden  ">
        <div v-if="data" class="w-full flex  ">
            <singleBjl :data="data"></singleBjl>
            <div class=" scroll_main bg-slate-800 overflow-y-hidden relative">
                <div @click="moveData()"
                    class="dl-section r-section text-black whitespace-nowrap   h-full overflow-y-hidden  ">

                    <div class="col c2  h-52   text-center  " v-for="(col, iCol) in dl.lst" :key="iCol">
                        <div class="cell w-[45px] text-center overflow-hidden " v-for="(c, iRow) in col" :key="iRow">

                            <img v-if="c >= 100" :src="'/static/img/dl-' + c + '.png'" alt=""
                                class="h-[100%] ml-1  align-top">
                            <!-- <img v-if="c>=100" :src= "bindImage(c)" alt="" class="h-[100%]  align-top"> -->
                            <!-- <div v-else-if="c<0" class="ask">
                  <div class="t">
                    <img v-if="c===-100" :src="askBanker" alt="">
                    <img v-else-if="c===-200" :src="askPlayer" alt="">
                  </div>
                  <img class="ball" :src="'/static/img/dl-'+(-c)+'.png'" alt="">
                </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" mt-2   table_wrap w-full min-w-[1350px] touch-none">
            <table class="border-collapse table-fixed   border-none w-full  __table ">
                <thead class="text-center border-b bg-slate-500  sticky top-0 h-full py-2">
                    <tr class="text-center ">
                        <th class="border border-slate-600  font-bold">游戏</th>
                        <th class="border border-slate-600  font-bold">时间</th>
                        <th class="border border-slate-600    font-bold">台号</th>
                        <th class="border border-slate-600  font-bold">局口</th>
                        <th class="border border-slate-600  font-bold">账号</th>
                        <th class="border border-slate-600  font-bold">下注类型</th>
                        <th class="border border-slate-600  font-bold">总押</th>
                        <th class="border border-slate-600  font-bold">当前余额</th>
                        <th class="border border-slate-600  font-bold">投注IP</th>
                        <th class="border border-slate-600 text-red-400 font-bold">终端</th>
                        <!-- <th class="border border-slate-600 text-indigo-200  font-bold">闲</th>
                <th class="border border-slate-600 text-green-300 font-bold">和</th>
                <th class="border border-slate-600 text-red-400 font-bold">庄对</th>
                <th class="border border-slate-600 text-indigo-200 font-bold">闲对</th>
                <th class="border border-slate-600 text-indigo-200 font-bold">闲对</th> -->
                    </tr>
                </thead>
                <tbody class="text-center  overflow-scroll  py-2   ">
                    <tr v-for="(bet, index) in betsData" :key="index">
                        <td class="border border-slate-600 text-xl font-bold   text-white ">{{ transGameStr(bet.rType) }}</td>
                        <td class="border border-slate-600  text-red-400  ">{{ bet.time }}</td>
                        <td class="border border-slate-600  text-indigo-200">{{ bet.roomName }}</td>
                        <td class="border border-slate-600  text-green-300">{{ bet.cc }}</td>
                        <td class="border border-slate-600  text-red-400">{{ bet.name }}</td>
                        <td class="border border-slate-600  text-indigo-200">
                            <div v-if="bet.rType === 'dx' || bet.rType === 'ssc'
                            || bet.rType === 'jsk3'
                            || bet.rType === 'bjcs' || bet.rType === 'tts' ||
                            bet.rType === 'bjl' || bet.rType === 'lh'"
                                style="display: flex; justify-content: flex-start;"
                                :style="bet.showResult.length > 3 ? 'overflow-x: scroll' : ''">
                                <div v-for="(item, inde) in bet.showResult" :key="inde"
                                    style="white-space: nowrap; margin: 0 5px;">
                               <span :style="(item.indexOf('庄') !== -1 || item.indexOf('龙') !== -1 ||
                                item.indexOf('大') !== -1 || item.indexOf('双') !== -1)
                                ? 'color: red'
                                : (item.indexOf('闲') !== -1 || item.indexOf('虎') !== -1 ||
                                    item.indexOf('单') !== -1 || item.indexOf('小') !== -1)
                                    ? 'color: blue'
                                    : (item.indexOf('和') !== -1 || item.indexOf('同点') !== -1) ? 'color: green' : ''">
                                        <span v-if="bet.rType === 'bjl'">
                                            {{ item }}
                                        </span>
                                        <span v-if="bet.rType === 'lh'">
                                            {{ item }}
                                        </span>
                                        <span v-if="bet.rType === 'dx'">
                                            {{ item }}
                                        </span>
                                        <span v-if="bet.rType === 'tts'">
                                            {{ item }}
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div v-if="bet.rType === 'nn'" class="nn_info">
                                <!-- <span v-if="bet.niuniuResult" style="position: absolute; right: 5px; top: 5px;">
                <el-popover
                  placement="top-start"
                  :title="$t('table.result_detail')"
                  width="200"
                  trigger="hover"
                  :content="${$t('table.first_gate')} = ${bet.result.split('|')[0]}; 
                  ${$t('table.second_gate')} = ${bet.result.split('|')[1]}; 
                  ${$t('table.third_gate')} = ${bet.result.split('|')[2]}"
                >
                  <el-button slot="reference" icon="el-icon-question" circle size="mini" />
                </el-popover>
              </span> -->
                                <div>
                                    <span v-for="(n, index) in bet.niuniu" :key="index" class="nn_info_container">
                                        <p class="nn_info_title"
                                            :style="n.indexOf('闲') != -1 ? 'color: blue' : 'color: red'">
                                            {{ n }}
                                            <!-- <span style="color: #000">：</span> -->
                                        </p>
                                    </span>
                                </div>
                                <div>
                                    <span v-for="(n, i) in bet.niuniuBet" :key="i" class="nn_info_container">
                                        <p class="nn_info_bet_show">
                                            {{ n }}
                                        </p>
                                    </span>
                                </div>
                                <div v-if="bet.niuniuResult" style="margin-left: 5px;">
                                    <span v-for="(n, i) in bet.nnWinLose" :key="i" class="nn_info_container">
                                        <span v-if="n === '输'" class="nn_info_bet_show"
                                            style="color: #FF1744">lose</span>
                                        <span v-else class="nn_info_bet_show" style="color: #00C853">win</span>
                                    </span>
                                </div>
                            </div>
                        </td>
                        <!-- <td class="border border-slate-600  text-indigo-200">{{xzmx(bet.xzmx,bet.rType)}}</td> -->
                        <td class="border border-slate-600  text-indigo-200">{{ bet.xz }}</td>
                        <td class="border border-slate-600  text-indigo-200">{{ bet.ye }}</td>
                        <td class="border border-slate-600  text-indigo-200">{{ bet.ip }}</td>
                        <td class="border border-slate-600  text-indigo-200">{{ bet.terminal }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import pomelo from "@/socket/pomelo.js";
import { useRoute } from 'vue-router';
import singleBjl from "../components/singleBjl.vue";
import { useStore } from "vuex";
import global from '@/utils/global';
const route = useRoute();
const store = useStore()

// callMoreData()
const data = ref(null)
const betsData = ref([])
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
const bjl_data = computed(() => store.getters["app/BJL_Detail"]);
function transGameStr (strGame) {
  // 游戏类型转换
  var msg = {
    bjl: '百家乐',
    lh: '龙虎',
    nn: '牛牛',
    xjh: '炸金花',
    dx: '大小',
    tts: '推筒子',
    ssc: '时时彩',
    jsk3: '江苏快3',
    bjcs: '北京赛车'
  }
  return msg[strGame]
}
function __dataFormat(rData) {
    var data = rData
    var betOrderInquireForm = { tableData: [], totalItemsNum: 0 }
    var tableData = betOrderInquireForm.tableData
    for (var i = 0; i < data.length; i++) {
        tableData[i] = {}
        tableData[i].orderId = i + 1
        tableData[i].name = data[i].name
        tableData[i].rType = data[i].rType
        tableData[i].gameType = data[i].rType
        tableData[i].time = data[i].time
        tableData[i].roomName = data[i].roomName
        tableData[i].cc = data[i].cc
        tableData[i].memberName = data[i].name
        // tableData[i].betOrderInfo = trasBetResult(data[i].rType, data[i].xzmx)
        tableData[i].xz = data[i].xz
        tableData[i].ye = data[i].ye
        tableData[i].ip = data[i].ip // 权限表    
        tableData[i].terminal = data[i].terminal
        let resultData = global.betInfoData(data[i].xzmx, tableData[i].rType)
        tableData[i].niuniu = resultData[0]
        tableData[i].niuniuBet = resultData[1]
        tableData[i].showResult = tableData[i].niuniu.map((item, index) => {
            return item + ':' + tableData[i].niuniuBet[index]
        })
        betsData.value = tableData
        // tableData[i].tablePara = getTablePara(
        //     data[i].rType, tableData[i].betOrderInfo)
    }   // mapIP(betOrderInquireForm.tableData)  
     //betOrderInquireForm.totalItemsNum = rData.totalItem
}

function callMoreData() {
    const sendStr = {
        router: 'getDeskLists',
        JsonData: {
            type: 'bjl',
            findname: '',
            deskname: route.query.deskname
        }
    }
    pomelo.send(sendStr, res => {
        console.log('resp ', res)
        data.value = res.JsonData.data[0]
        __dataFormat(res.JsonData.bets)
        //betsData.value = res.JsonData.bets
    })
}
callMoreData()


onMounted(() => {
    //callMoreData()
    initData()
    console.log(bjl_data.value + 'from detail');
})

const initData = () => {
    zp.value.col = zp.value.row = 0
    zp.value.lst = []
    let colsNumUnit = 32
    for (let i = 0; i < colsNumUnit; i++) {
        zp.value.lst.push([0, 0, 0, 0, 0, 0])
    }
    dl.value.col = dl.row = 0
    dl.value.lst = []
    dl.value.pr = dl.pc = dl.nc = 0
    dl.value.cl = false
    dl.value.clNum = 0
    dl.value.stat = {}
    dl.value.pointCol = 0
    for (let i = 0; i < colsNumUnit * 2; i++) {
        dl.value.lst.push([200, 201, 202, 0, 0, 0])
    }
}

//draggble scroll
function moveData() {
    const slider = document.querySelector(".r-section");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
}
</script>

<style  scoped>
.scroll_main {
    @apply w-[calc(100%_-_500px)] min-w-[calc(100%_-_500px)] max-w-[(100%_-_500px)] overflow-x-hidden;
}

.r-section {
    overflow-y: hidden;
    position: relative;
    @apply w-full;
    will-change: transform;
    user-select: none;
    cursor: grabbing;
    overflow-x: hidden;
    /* -ms-overflow-style: none; 
    scrollbar-width: none;   */

    /* width: calc((100vw - 198px)); */
}

/* .r-section::-webkit-scrollbar { 
    display: none;  
} */
.col {
    display: inline-block;
    letter-spacing: 0;
    vertical-align: top;
    border-right: 1px solid;
    @apply border-slate-700;
    /* height: 100%; */
    position: relative;
    text-align: center;
}

/* .col.c2 .cell {
	 height: calc(-6.0833333333333vh);
	 width: calc(-5.0833333333333vw);
   background: red;
} */
.cell {
    border-bottom: 1px solid;
    @apply border-slate-700;
    height: calc(208px / 6);
}

.cell:last-child {
    border-bottom: 1px solid transparent;
}

.table_wrap {
    /* max-height: calc(100vh - 20rem );
  display:block;
  overflow-y: scroll; */
}

.__table {
    overflow: scroll !important;
}
</style>
