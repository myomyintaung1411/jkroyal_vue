

<template>
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
          ease-in duration-300 hover:rounded-tl-3xl hover:rounded-bl-3xl cursor-pointer" :class="activeTab === 0 ? '__activeColor' : ''">
            <p class="text-2xl tracking-wide font-medium">All</p>
          </div>
        </div>
        </div>
        <div class="py-2 w-full" @click="clickData(1)" >
        <div class=" cursor-pointer">
          <div class="w-full py-3 px-3 rounded bg-slate-50 text-black 
          hover:text-white hover:bg-slate-500 text-center shadow-xl ease-in duration-300 
          hover:rounded-tl-3xl hover:rounded-bl-3xl cursor-pointer" :class="activeTab === 1 ? '__activeColor' : ''">
            <p class="text-2xl tracking-wide font-medium">Bjl</p>
          </div>
        </div>
        </div>
        <div class="py-2 w-full" @click="clickData(2)" >
        <div class=" cursor-pointer">
          <div class="w-full py-3 px-3 rounded bg-slate-50 text-black 
          hover:text-white hover:bg-slate-500 text-center shadow-xl ease-in duration-300 
          hover:rounded-tl-3xl hover:rounded-bl-3xl cursor-pointer" :class="activeTab === 2 ? '__activeColor' : ''">
            <p class="text-2xl tracking-wide font-medium">DragonTiger</p>
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
        <router-view/>
     </div>
    </div>
    
   <!-- <BjlModal :modal = "modal"></BjlModal> -->
 </div>
</template>
<script setup>
import singleBjl from "../components/singleBjl.vue";
import { LogoutIcon   } from "@heroicons/vue/outline";
import ModalDialog from "@/components/ModalDialog.vue";
import pomelo from "@/socket/pomelo.js";
import { onMounted, ref } from "vue";
import BjlModal from "@/components/BjlModal.vue";
import { useRouter,useRoute } from "vue-router";

const modal = ref(false);

const activeTab = ref(0)
const router = useRouter()
const route = useRoute()
// const bjlData = ref(null)


function showModal () {
  console.log("llllllllllllllllllemittttttttttttt");
  modal.value = true;
}
const clickData = (n) =>{
  console.log(n);
  activeTab.value = n
  switch (activeTab.value) {
    case 0:
      router.push('/all')
     // getDeskLists('all')
      break;
    case 1:
      router.push('/bjl')
     // getBjlLists('bjl')
      break;
    case 2:
      router.push('/dgtiger')
     // getBjlLists('bjl')
      break;
  
    default:
      break;
  }
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
.__activeColor{
      background-color: rgb(100 116 139 / 1);
      color:white;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem
}
</style>
