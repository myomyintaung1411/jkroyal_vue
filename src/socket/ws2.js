/*eslint-disable*/
import global from "@/utils/global";
import AES from "@/utils/aes";
import store from "@/store";

// import AES from '../api/aes'
// import message from '../components/Message/index'
// import { Notification } from "element-ui"
function doData(rData) {
  const en = global.gameEn
  rData = JSON.parse(AES.decrypt(rData, en))
  switch (rData.router) {
    case 'Login':
      SetMyCenterForm(rData)
      break
  
    default:
      break;
  }
}


function SetMyCenterForm (rData) {
 console.log(rData);
}


export default {
  doData,
};
