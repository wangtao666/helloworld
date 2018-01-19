<template>
  <div id="success">
    <div class="el_logo">
      <img src="/images/logo.png" alt=""/>
    </div>
    <div class="el_img2">
      <img src="/images/prompt.png" alt=""/>
    </div>
    <div class="el_prompt">
      <p>组团成功啦！</p>
      <p>赶紧点击分享组队领取优惠咯！</p>
    </div>
    <div class="el_end">
      <p>温馨提示:</p>
      <p>{{ ts.tishi }}</p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        ts: {}
      }
    },
    async asyncData () {
      return axios.get('http://127.0.0.1:3666/getts')
        .then((res) => {
           console.log(res.data[0])
          return {
             ts: res.data[0]
          }
        })
    },
    head () {
      return {
        title: '拼团抢福利'
      }
    }
  }
</script>
<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  .el_logo{
    width: 750px;
    height: 300px;
    padding: 64px 0px 0px 40px;
  }
  .el_img2{
    height: 368px;
  }
  .el_img2>img{
    width: 300px;
    height: 300px;
    display: inherit;
    margin: 0 auto;
  }
  .el_prompt{
    text-align: center;
    padding-bottom: 170px;
  }
  .el_prompt>p{
    font-size: 30px;
    color: rgb(153,153,153);
  }
  .el_prompt>p:last-child{
    margin-top: 24px;
  }
  .el_end{
    font-size: 26px;
    color: rgb(153,153,153);
    margin-left: 40px;
  }
  .el_end>p{
    margin-top: 24px;
    padding: 0 20px 0 0;
  }
</style>
