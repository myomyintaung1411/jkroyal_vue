

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
  <div class="w-full h-screen relative">
    <div class="flex  h-screen w-full overflow-y-hidden ">
      <div class="max-w-sm w-60  bg-slate-800 h-screen drawer_bg relative overflow-y-hidden ">
        <div class="text-center flex flex-col justify-center items-center p-5">
          <img src="@/assets/images/logo.png" class="max-w-[220px] h-32 max-h-32"  alt="logo">
          <h1 class="text-4xl font-bold tracking-wider text-center pt-3 text-white">皇家娱乐</h1>
        </div>
        <div class="py-2 w-full" @click="clickData(0)">
        <div class=" cursor-pointer">
          <div class="w-full py-3 px-3 rounded bg-slate-50 
          text-black hover:text-white hover:bg-slate-500 text-center shadow-xl 
          ease-in duration-300 hover:rounded-tl-3xl hover:rounded-bl-3xl cursor-pointer" :class="activeTab === 0 ? 'bg-slate-500 text-white rounded-tl-3xl rounded-bl-3xl' : ''">
            <p class="text-2xl tracking-wide font-medium">All</p>
          </div>
        </div>
        </div>
        <div class="py-2 w-full" @click="clickData(1)" >
        <div class=" cursor-pointer">
          <div class="w-full py-3 px-3 rounded bg-slate-50 text-black 
          hover:text-white hover:bg-slate-500 text-center shadow-xl ease-in duration-300 
          hover:rounded-tl-3xl hover:rounded-bl-3xl cursor-pointer" :class="activeTab === 1 ? 'bg-slate-500 text-white rounded-tl-3xl rounded-bl-3xl' : ''">
            <p class="text-2xl tracking-wide font-medium">Bjl</p>
          </div>
        </div>
        </div>
        <div class="absolute bottom-0   m-auto left-0 right-0 cursor-pointer">
          <div class="p-3 rounded bg-slate-50 flex justify-center items-center">
            <LogoutIcon class="w-10 h-10 text-[#350b2d]"></LogoutIcon>
          </div>
        </div>
      </div>
      <div class="main-content w-[calc(100%_-_15rem)]  h-screen relative  p-5 overflow-y-scroll ">
        <div class="w-full  flex flex-wrap ">
          <Bjl v-for="data in bjlData" :key="data.roomId"  :data="data" @showModal="showModal"></Bjl>
          <!-- <div  v-for="data in bjlData" :key="data.roomId" @click="showModal()" class=" overflow-hidden w-[500px] max-w-[500px] min-w-[500px]   flex      bg-slate-800 h-52  shadow-lg mx-5 my-3 shadow__  cursor-pointer ">
            <div class="py-3 px-1 text-center relative   w-[150px] overflow-hidden   bg-[#350b2d] ">
              <p class="text-white font-medium text-3xl ">{{data.roomName}}</p>
              <div class="mt-24">
               <h1 class="text-lg font-bold tracking-wide text-white text-center ">局口:{{data.cc}}</h1>
              <h1 class="text-lg font-bold tracking-wide text-white text-center ">限红:{{data.xh}}</h1>
              </div>

            </div>

            <div class=" w-[350px] overflow-hidden ">
            <table class="border-collapse  border-none table-fixed w-[350px] overflow-hidden h-[85%] ">
            <thead class="text-center ">
              <tr class="text-center">
                <th class="w-8"></th>
                <th class="border border-slate-600 text-red-400 font-bold">庄</th>
                <th class="border border-slate-600 text-indigo-200  font-bold">闲</th>
                <th class="border border-slate-600 text-green-300 font-bold">和</th>
                <th class="border border-slate-600 text-red-400 font-bold">庄对</th>
                <th class="border border-slate-600 text-indigo-200 font-bold">闲对</th>
              </tr>
            </thead>
            <tbody class="text-center  overflow-hidden break-all  ">
              <tr>
                <td class="border border-slate-700 text-xl font-bold  " style="writing-mode: vertical-rl;text-orientation: upright;">投注</td>
                <td class="border border-slate-700  text-red-400  ">{{data.detail.banker}}</td>
                <td class="border border-slate-700  text-indigo-200">{{data.detail.player}}</td>
                <td class="border border-slate-700  text-green-300">{{data.detail.tie}}</td>
                <td class="border border-slate-700  text-red-400">{{data.detail.b_pair}}</td>
                <td class="border border-slate-700  text-indigo-200">{{data.detail.p_pair}}</td>
              </tr>
              <tr>
                <td class="border border-slate-700 text-xl font-bold " style="writing-mode: vertical-rl;text-orientation: upright; ">赔彩</td>
                <td class="border border-slate-700  text-red-400">{{seperatedComma(data,'banker')}}</td>
                <td class="border border-slate-700  text-indigo-200">{{seperatedComma(data,'player')}}</td>
                <td class="border border-slate-700  text-green-300">{{seperatedComma(data,'tie')}}</td>
                <td class="border border-slate-700  text-red-400">{{seperatedComma(data,'bpair')}}</td>
                <td class="border border-slate-700  text-indigo-200">{{seperatedComma(data,'ppair')}}</td>
              </tr>
            </tbody>
          </table>
           <div class="w-full h-[15%] text-center text-2xl">庄闲差 : {{ greaterThan(data.detail) }}</div>
        </div>
       </div> -->
          <!-- <div  v-for="n in 1" :key="n" class=" w-[500px] max-w-[500px] min-w-[500px]   flex overflow-hidden     bg-slate-800 h-52  shadow-lg m-5 shadow__  cursor-pointer ">
            <div class="py-3 px-3 text-center space-y-5 whitespace-nowrap max-w-[120px] overflow-hidden   bg__info_img ">
              <p class="text-white font-medium text-3xl ">10</p>
              <h1 class="text-4xl font-bold tracking-wide text-white ">皇家</h1>
              <h1 class="text-xl font-bold tracking-wide text-white ">皇17家9娱</h1>
            </div>

            <div class="   w-[380px] overflow-hidden ">
            <table class="border-collapse  border-none table-fixed w-[380px] overflow-hidden h-[85%] ">
            <thead class="text-center ">
              <tr class="text-center">
                <th class="w-10"></th>
                <th class="border border-slate-600 w-12 text-red-400 font-bold">庄</th>
                <th class="border border-slate-600 w-12 text-indigo-200  font-bold">闲</th>
                <th class="border border-slate-600 w-12 text-green-300 font-bold">和</th>
              </tr>
            </thead>
            <tbody class="text-center  overflow-hidden break-all  ">
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10 " style="writing-mode: vertical-rl;text-orientation: upright;">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400  ">1000</td>
                <td class="border border-slate-700 w-12 text-indigo-200">1000</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
              </tr>
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10" style="writing-mode: vertical-rl;text-orientation: upright; ">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
              </tr>
            </tbody>
          </table>
           <div class="w-full h-[15%] text-center text-2xl">总用户 : 0</div>
        </div>
         </div> -->
       <!-- cow cow -->
          <!-- <div  v-for="n in 1" :key="n" class=" w-[500px] max-w-[500px] min-w-[500px]   flex overflow-hidden     bg-slate-800 h-68  shadow-lg m-5 shadow__  cursor-pointer ">
            <div class="py-3 px-3 text-center space-y-5 whitespace-nowrap max-w-[120px] overflow-hidden   bg__info_img ">
              <p class="text-white font-medium text-3xl ">10</p>
              <h1 class="text-4xl font-bold tracking-wide text-white ">皇家</h1>
              <h1 class="text-xl font-bold tracking-wide text-white ">皇17家9娱</h1>
            </div>

            <div class="   w-[380px] overflow-hidden ">
            <table class="border-collapse  border-none table-fixed w-[380px] overflow-hidden h-[85%] ">
            <thead class="text-center ">
              <tr class="text-center">
                <th class="w-10"></th>
                <th class="border border-slate-600 w-12 text-red-400 font-bold">庄1庄庄</th>
                <th class="border border-slate-600 w-12 text-indigo-200  font-bold">闲1闲闲</th>
                <th class="border border-slate-600 w-12 text-green-300 font-bold">庄1庄庄</th>
                <th class="border border-slate-600 w-12 text-indigo-200  font-bold">闲1闲闲</th>
                <th class="border border-slate-600 w-12 text-green-300 font-bold">庄1庄庄</th>
                <th class="border border-slate-600 w-12 text-indigo-200  font-bold">闲1闲闲</th>
              </tr>
            </thead>
            <tbody class="text-center  overflow-hidden break-all  ">
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10 " style="writing-mode: vertical-rl;text-orientation: upright;">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400  ">1000</td>
                <td class="border border-slate-700 w-12 text-indigo-200">1000</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
              </tr>
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10" style="writing-mode: vertical-rl;text-orientation: upright; ">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
              </tr>
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10" style="writing-mode: vertical-rl;text-orientation: upright; ">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
              </tr>
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10" style="writing-mode: vertical-rl;text-orientation: upright; ">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
              </tr>
            </tbody>
          </table>
           <div class="w-full h-[15%] text-center text-2xl">总用户 : 0</div>
        </div>
         </div> -->
      </div>
      </div>
    </div>
    <!-- <ModalDialog :show="modal" @close="modal = false">
    <div class="  bg-slate-700 min-w-[1350px] w-[90vw] h-[95vh] pt-12   ">
      <div class="w-full flex   ">
         <div  class=" w-[500px] max-w-[500px]   flex overflow-hidden   bg-slate-800 h-52  shadow-lg  shadow__  cursor-pointer ">
            <div class="py-3 px-3 text-center space-y-5 whitespace-nowrap max-w-[120px] overflow-hidden   bg__info_img ">
              <p class="text-white font-medium text-3xl ">18</p>
              <h1 class="text-4xl font-bold tracking-wide text-white ">皇家</h1>
              <h1 class="text-xl font-bold tracking-wide text-white ">皇17家9娱</h1>
            </div>

            <div class="   w-[380px] overflow-hidden  ">
            <table class="border-collapse  border-none table-fixed w-[380px] overflow-hidden h-[85%] ">
            <thead class="text-center ">
              <tr class="text-center">
                <th class="w-10"></th>
                <th class="border border-slate-600 w-12 text-red-400 font-bold">庄</th>
                <th class="border border-slate-600 w-12 text-indigo-200  font-bold">闲</th>
                <th class="border border-slate-600 w-12 text-green-300 font-bold">和</th>
                <th class="border border-slate-600 w-12 text-red-400 font-bold">庄对</th>
                <th class="border border-slate-600 w-12 text-indigo-200 font-bold">闲对</th>
              </tr>
            </thead>
            <tbody class="text-center  overflow-hidden break-all  ">
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10 text-white " style="writing-mode: vertical-rl;text-orientation: upright;">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400  ">1000</td>
                <td class="border border-slate-700 w-12 text-indigo-200">1000</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
              </tr>
              <tr>
                <td class="border border-slate-700 text-xl font-bold w-10 text-white" style="writing-mode: vertical-rl;text-orientation: upright; ">闲对</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
                <td class="border border-slate-700 w-12 text-green-300">100</td>
                <td class="border border-slate-700 w-12 text-red-400">100</td>
                <td class="border border-slate-700 w-12 text-indigo-200">100</td>
              </tr>
            </tbody>
          </table>
           <div class="w-full h-[15%] text-center text-2xl text-white">总用户 : 0</div>
        </div>
       </div>
       <div class=" scroll_main bg-slate-800 overflow-y-hidden relative">
          <div @click="moveData()" class="dl-section r-section text-black whitespace-nowrap   h-full overflow-y-hidden  ">
            
            <div class="col c2  h-52   text-center  " v-for="(col, iCol) in dl.lst" :key="iCol">
              <div class="cell w-[45px] text-center overflow-hidden " v-for="(c, iRow) in col" :key="iRow">
                
               <img v-if="c>=100" :src="'/static/img/dl-'+c+'.png'" alt="" class="h-[100%] ml-1  align-top">
              </div>
            </div>
          </div>
       </div>
      </div>
      <div class=" mt-2   table_wrap w-full touch-none">
          <table class="border-collapse table-fixed   border-none w-full  __table    ">
            <thead class="text-center border-b bg-slate-500  sticky top-0 h-full py-2">
              <tr class="text-center ">
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600    font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600  font-bold">皇家娱乐</th>
                <th class="border border-slate-600 text-red-400 font-bold">庄</th>
                <th class="border border-slate-600 text-indigo-200  font-bold">闲</th>
                <th class="border border-slate-600 text-green-300 font-bold">和</th>
                <th class="border border-slate-600 text-red-400 font-bold">庄对</th>
                <th class="border border-slate-600 text-indigo-200 font-bold">闲对</th>
                <th class="border border-slate-600 text-indigo-200 font-bold">闲对</th>
              </tr>
            </thead>
            <tbody class="text-center  overflow-scroll  py-2   ">
              <tr v-for="n in 30" :key="n">
                <td class="border border-slate-600 text-xl font-bold   text-white " >{{n}}</td>
                <td class="border border-slate-600  text-red-400  ">1000</td>
                <td class="border border-slate-600  text-indigo-200">1000</td>
                <td class="border border-slate-600  text-green-300">100</td>
                <td class="border border-slate-600  text-red-400">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">100</td>
                <td class="border border-slate-600  text-indigo-200">10000</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </ModalDialog> -->
   <BjlModal :modal = "modal"></BjlModal>
 </div>
</template>
<script setup>
import Bjl from "../components/Bjl.vue";
import { LogoutIcon   } from "@heroicons/vue/outline";
import ModalDialog from "@/components/ModalDialog.vue";
import pomelo from "@/socket/pomelo.js";
import { onMounted, ref } from "vue";
import BjlModal from "@/components/BjlModal.vue";
const modal = ref(false);

const activeTab = ref(0)

const bjlData = ref(null)

onMounted(()=>{
  getBjlLists('bjl')
})
function showModal () {
  console.log("llllllllllllllllllemittttttttttttt");
  modal.value = true;
}
const clickData = (n) =>{
  activeTab.value = n
  switch (activeTab.value) {
    case 0:
      getDeskLists('all')
      break;
    case 1:
      getBjlLists('bjl')
      break;
  
    default:
      break;
  }
}

const getDeskLists = (type) => {
      const sendStr = {
        router: 'getDeskLists',
        JsonData: {
          type: type,
          findname: '',
          deskname: ''
        }
      }
      pomelo.send(sendStr, res => {
        console.log('resp ', res)
      })
    }
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
        if(res.JsonData.result == 'ok' && res.JsonData.data.length > 0) {
          console.log('resp ', res.JsonData.data)
          bjlData.value = res.JsonData.data
        // console.log('bjlData data ', bjlData.value)
         console.log("rrrrrrrr");
        }
      })
    }
</script>
<style scoped>
.drawer_bg{
 background: url("https://template.viserlab.com/casinous/demo/assets/images/banner/bg.png");
 background-size: cover;
 background-repeat: no-repeat;
}

.bg__info_img{
  background-image: url("https://template.viserlab.com/casinous/demo/assets/images/game/shape.png");
  background-size: cover;
  background-repeat: no-repeat;

}
.shadow__{
  box-shadow: -3.828px -3.828px 6px 0px rgba(5, 4, 0, 0.801), 3px 5px 8px 0px rgba(24, 13, 8, 0.2);
}
.scroll_main{
 @apply w-[calc(100%_-_500px)] min-w-[calc(100%_-_500px)] max-w-[(100%_-_500px)]
 overflow-x-hidden;
}
.r-section{
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
.col{
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
.cell{
  border-bottom: 1px solid;
 @apply border-slate-700;
  height: calc(208px / 6);
}
.cell:last-child{
  border-bottom: 1px solid transparent;
}
.table_wrap{
  max-height: 50vh;
  overflow-y: scroll;
  display:block;
}
.__table{
  overflow: scroll !important;
}
</style>
