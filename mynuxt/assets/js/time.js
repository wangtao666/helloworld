// export function countDown(starttime) {
//   // 设置截止时间
//   let str=starttime.replace(/-/g,  "/");//转化成2017/5/17 00:00:00格式
//   let     endDate=new Date(str).getTime();
//   var timeSet= setInterval(function () {
//             // 获取当前时间
//             let currentDate=new Date().getTime();
//             // 时间差
//             let time=endDate - currentDate
//                   var d,h,m,s;
//                   if(time>=0){
//                     d=Math.floor(time/1000/60/60/24);
//                     h = Math.floor(time/1000/60/60%24);
//                     m = Math.floor(time/1000/60%60);
//                     s = Math.floor(time/1000%60);
//             }
//             //将倒计时赋值到div中
//           var  endTime=d+'天:'+h+':'+m+':'+ s;
//         console.log('endTime',endTime)
//                return endTime;
//
//           },1000)
//
//
// }
// export function countDown(starttime) {
// // 设置截止时间
//   let str=starttime.replace(/-/g,  "/");//转化成2017/5/17 00:00:00格式
//   let     endDate=new Date(str).getTime();
//   // 获取当前时间
//   let currentDate=new Date().getTime();
//             // 时间差
//    let time=endDate - currentDate
//   return time;
// }
//  function anpther  (starttime) {
//   let time1=countDown(starttime)
//   var d,h,m,s;
//                   if(time>=0){
//                     d=Math.floor(time/1000/60/60/24);
//                     h = Math.floor(time/1000/60/60%24);
//                     m = Math.floor(time/1000/60%60);
//                     s = Math.floor(time/1000%60);
//             }
//           var  endTime=d+'天:'+h+':'+m+':'+ s;
//           console.log('endTime',endTime)
// }
