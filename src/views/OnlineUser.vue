<template>
  <div class="  flex whitespace-nowrap    min-w-[1200px]">
    <div class="h-20 flex items-center w-72 mx-2 my-2  ">
      <div class="h-full bg-yellow-500 w-1/2 flex justify-center items-center ">
        <img src="@/assets/images/user-fill.svg" alt="" class=" h-14">
      </div>
      <div class="flex flex-col items-center bg-white text-black font-medium w-1/2 h-full justify-center">
        <p>OnlineUser</p>
        <p>{{onlineUserData?.totalItemsNum?.total || '0'}}</p>
      </div>
    </div>
    <div class="h-20 flex items-center w-72 mx-2 my-2  ">
      <div class="h-full bg-emerald-600 w-1/2 flex justify-center items-center ">
        <img src="@/assets/images/money.svg" alt="" class="h-14 ">
      </div>
      <div class="flex flex-col items-center bg-white text-black font-medium w-1/2 h-full justify-center">
        <p>Money</p>
        <p>{{onlineUserData?.totalItemsNum?.money || '0'}}</p>
      </div>
    </div>
    <div class="h-20 flex items-center w-72 mx-2 my-2  ">
      <div class="h-full bg-red-600 w-1/2 flex justify-center items-center ">
        <img src="@/assets/images/phone.svg" alt="" class="h-14 ">
      </div>
      <div class="flex flex-col items-center bg-white text-black font-medium w-1/2 h-full justify-center">
        <p>H5</p>
        <p>{{onlineUserData?.totalItemsNum?.h5 || '0'}}</p>
      </div>
    </div>
    <div class="h-20 flex items-center w-72 mx-2 my-2  ">
      <div class="h-full bg-blue-600 w-1/2 flex justify-center items-center ">
        <img src="@/assets/images/android-fill.svg" alt="" class="h-14 ">
      </div>
      <div class="flex flex-col items-center bg-white text-black font-medium w-1/2 h-full justify-center">
        <p>Android</p>
        <p>{{onlineUserData?.totalItemsNum?.android || '0'}}</p>
      </div>
    </div>
    <div class="h-20 flex items-center w-72 mx-2 my-2  ">
      <div class="h-full bg-cyan-600 w-1/2 flex justify-center items-center ">
        <img src="@/assets/images/ios.svg" alt="" class="h-14 ">
      </div>
      <div class="flex flex-col items-center bg-white text-black font-medium w-1/2 h-full justify-center">
        <p>Ios</p>
        <p>{{onlineUserData?.totalItemsNum?.ios || '0'}}</p>
      </div>
    </div>
    <div class="h-20 flex items-center w-72 mx-2 my-2  ">
      <div class="h-full bg-orange-600 w-1/2 flex justify-center items-center">
        <img src="@/assets/images/computer.svg" alt="" class="h-14 ">
      </div>
      <div class="flex flex-col items-center bg-white text-black font-medium w-1/2 h-full justify-center">
        <p>Pc</p>
        <p>{{onlineUserData?.totalItemsNum?.pc || '0'}}</p>
      </div>
    </div>
  </div>
  <div class="w-full min-w-[1200px] max-w-full   ">
    <div class="py-3 flex items-center bg-red-500 px-3 space-x-3">
      <span class="px-2">OnlineUser</span>
      <input v-model="searchUser" id="name" type="name" autocomplete="off" name="name" class="text-sm placeholder-gray-500 text-gray-500  px-2
        w-[100px] py-2 focus:outline-none outline-none" placeholder="请输入账" />
      <span class="px-2">Terminal</span>
      <div class="w-32">
        <Listbox v-model="terminalName">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left 
              shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span class="block truncate text-black">{{ terminalName.terminal }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.terminal" :value="person"
                  as="template">
                  <li :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]">
                    <span :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]">{{ person.terminal }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div >
       <button @click="doFind()" type="submit"  class="bg-blue-600 shadow-md py-[6px] px-9 rounded outline-none focus:outline-none ease-in hover:bg-blue-900 ">Search</button>
      </div>
    </div>
        <section class="w-full min-w-full __tableHeight ">
            <div class="flex flex-wrap h-full">
                <div class="w-full h-full ">
                    <div class="max-w-full min-w-full overflow-x-auto h-full">
                        <table class="table-auto w-full bg-slate-600 ">
                            <thead>
                                <tr class=" bg-slate-50 text-center">
                                    <th class=" w-[20%]  min-w-[160px] text-lg  font-semibold text-black py-2   px-3 lg:px-4 border-l border-transparent">
                                        LoginTime
                                    </th>
                                    <th class="w-[20%]  min-w-[160px] text-lg font-semibold text-black py-2  px-3 lg:px-4">
                                        Username
                                    </th>
                                    <th class=" w-[20%]  min-w-[160px] text-lg  font-semibold text-black py-2  px-3 lg:px-4">
                                        Reference Name
                                    </th>
                                    <th class=" w-[10%]   min-w-[160px]   text-lg font-semibold  text-black py-2   px-3 lg:px-4 ">
                                        Ye
                                    </th>
                                    <th class=" w-[10%]   min-w-[160px]   text-lg font-semibold  text-black py-2  px-3 lg:px-4 ">
                                        Terminal
                                    </th>
                                    <th class=" w-[20%]   min-w-[160px]   text-lg font-semibold  text-black py-2  px-3 lg:px-4 ">
                                        LoginIp
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-if="onlineUserData?.tableData">
                                <tr v-for="(data,index) in onlineUserData.tableData" :key="index" >
                                    <td class=" text-center text-dark  font-medium text-base py-2 px-2  border-b  border-[#E8E8E8]">
                                        {{data.loginTime}}
                                    </td>
                                    <td class=" text-center text-dark  font-medium text-base  py-2 px-2  border-b border-[#E8E8E8] ">
                                        {{data.username}}
                                    </td>
                                    <td class=" text-center text-dark font-medium text-base py-2 px-2  border-b border-[#E8E8E8] ">
                                       {{data.reference_name}}
                                    </td>
                                    <td class="   text-center text-dark font-medium text-base py-2   px-2   border-b border-[#E8E8E8] ">
                                        {{data.ye}}
                                    </td>
                                    <td class="      text-center text-dark font-medium  text-base  py-2 px-2      border-b border-[#E8E8E8] ">
                                        {{data.terminal}}
                                    </td>
                                    <td class="      text-center text-dark font-medium  text-base  py-2 px-2      border-b border-[#E8E8E8] ">
                                        {{data.loginip}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </section>
    <div v-if="onlineUserData?.tableData.length > 0" class="flex items-center justify-center">
    <Paginate v-model="pagination.currentPage" :page-count="Math.ceil(pagination.total / pagination.pageSize)"
        :page-range="1" :margin-pages="1" :click-handler="clickCallback" :prev-text="'Prev'" :next-text="'Next'"
        :container-class="'pagination'" :hide-prev-next="true" :page-class="'page-item'" :first-last-button	="true"
        class="flex items-center space-x-4" :no-li-surround="true" :page-link-class="'page-link'"
        :active-class="'active-class'">


    </Paginate>
</div>
  </div>
</template>

<script setup>
import { ref,reactive,onMounted,onBeforeUnmount } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import TestTable from '../components/testTable.vue'
import pomelo from "@/socket/pomelo.js";
import moment from 'moment'
import Paginate from "vuejs-paginate-next";
const people = reactive([
  { terminal: 'all' },
  { terminal: 'h5' },
  { terminal: 'android' },
  { terminal: 'pc' },
  { terminal: 'ios' },
])
const terminalName = ref(people[0])
const searchUser = ref('')
const pagination = reactive({
  pageSize: 1,
  currentPage: 1,
  total:0,
});
const interval = ref(null)
const onlineUserData = ref(null)

 onBeforeUnmount(() => {
    clearInterval(interval.value)
    interval.value = null
})

const clickCallback = (pageNum) =>{
    console.log(pageNum , "from click callback");
    getOnlineMemberInfo()
}

 onMounted(() => {
 getOnlineMemberInfo()
 requestDataEveryFiveSec()
 })
  
    //  function startFunc() {
    //   if (interval.value !== null) {
    //     clearInterval(interval.value)
    //     interval.value = null
    //   }
    //   getOnlineMemberInfo()
    //   interval.value = setInterval(getOnlineMemberInfo(), 10000)
    // }

    function requestDataEveryFiveSec() {
    interval.value = setInterval(() => {
        getOnlineMemberInfo()
        console.log("5 log second");
    }, 5000);
    // }
}

 function doFind() {
  getOnlineMemberInfo()
 }

   function getOnlineMemberInfo() {
      const sendStr = {
        router: 'getOnlineMemberInfo',
        JsonData: {
          Id: 1,
          arrName: searchUser.value.trim() === '' ? [] : searchUser.value.trim().split(','),
          pageSize: pagination.pageSize,
          currentPage: pagination.currentPage,
          
           terminal:terminalName.value.terminal
        }
      }
       console.log(sendStr , 'sendStr **************')
      pomelo.send(sendStr,res => {
        console.log(res,"res");
        var data = res.JsonData
        var onlineMemberForm = { tableData: [], totalItemsNum: 0 }
        var tableData = onlineMemberForm.tableData
        for (var i = 0; i < data.length; i++) {
          tableData[i] = {}
          tableData[i].id = data[i].Id
          tableData[i].ip = data[i].loginip
          tableData[i].username = data[i].username
          tableData[i].ye = data[i].ye
          tableData[i].terminal = data[i].terminal
          tableData[i].loginTime = moment(data[i].loginTime).format("YYYY-MM-DD HH:mm:ss")
          tableData[i].reference_name = data[i].reference_name
        }
        //mapIP(onlineMemberForm.tableData)
        onlineMemberForm.totalItemsNum = res.totalItem?.total
        pagination.total = onlineMemberForm.totalItemsNum
        onlineUserData.value = onlineMemberForm
        //store.commit('ht/setOnlineUserList', onlineMemberForm)
      })
    }
</script>

<style scoped>
.__tableHeight{
    height: calc(100vh - 300px);
}
</style>

<style>
.page-item  {
    @apply  px-4 py-2 bg-blue-500
  }
  .page-link{
    /* background: red !important; */
    @apply bg-blue-500 px-4 py-2
  }
  .active-class{
    display :inline-block;
    color:#fff;
    @apply bg-yellow-600 !important;
    
  }
</style>