<template>
<div>
  <div class="el_choose">选择团长，参团吧</div>
  <div class="el_goods" v-for="(item, index) in goodss">
    <div class="el_img">
      <img src="/images/prompt.png" alt="">
    </div>
    <div class="el_bewrite">
      <ul>
        <li>{{ item.title }}</li>
        <li>
          团长:
          <span>{{ item.id }}</span>
        </li>
        <li>
          <span>{{ item.id }}人参团</span>
          <span class="el_btn" @click="goct">去参团</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="el_dailog" v-show="data1">
    <div class="el_window" ref="dailog">
      <div class="el_cloose" @click="cloose">x</div>
      <div class="el_explain">
        <p>恭喜您！参团成功！</p>
        <p>快“去看看”，拼团抢福利吧！</p>
      </div>
      <div class="el_definite">
        <div @click="gosee">去看看</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios'
export default {
  data () {
    return {
      goodss: [],
      data1: false
    }
  },
  async asyncData () {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return {
        goodss: res.data.slice(0, 10)
      }
    })
  },
  methods: {
    goct: function () {
      if(!this.data1){
        this.data1 = true
      }
    },
    cloose: function () {
      this.data1 = false
    },
    gosee: function () {
      location.href = 'boon'
    }
  },
  mounted () {
    let el_width = (window.innerWidth - 605) / 2;
    let el_height = (window.innerHeight - 358) / 2;
    this.$refs.dailog.style.left = el_width + 'px'
    this.$refs.dailog.style.top = el_height + 'px'
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
  .el_goods {
    margin-top: 18px;
    height: 180px;
    position: relative;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 18px;
    box-sizing: content-box;
  }
  .el_goods>div {
    float: left;
  }
  .el_img {
    width: 180px;
    height: 180px;
    background: rgb(255,255,255);
    margin-left: 32px;
  }
  .el_img > img {
    width: 180px;
    height: 180px;
  }
  .el_bewrite {
    margin-left: 28px;
    font-size: 28px;
  }
  .el_bewrite>ul {
    margin-top: -6px;
  }
  .el_bewrite>ul>li:first-child {
    width: 485px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    top: 20px;
  }
  .el_bewrite>ul>li:nth-child(2) {
    font-size: 26px;
    color: rgb(153,153,153);
    margin-top: 54px;
    margin-bottom: 14px;
  }
  .el_bewrite>ul>li:last-child {
    color: rgb(234,81,47);
  }
  .el_bewrite>ul>li:last-child>span:last-child{
    display: inline-block;
    width: 130px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    background: rgb(234,81,47);
    color: #fff;
    font-size: 26px;
    border-radius: 6px;
    position: absolute;
    right: 34px;
    bottom: 18px;
  }
  .el_choose{
    width: 750px;
    height: 48px;
    background: rgb(241,241,241);
    font-size: 24px;
    color: rgb(147,147,147);
    line-height: 48px;
    padding-left: 32px;
    box-sizing: border-box;
  }
  .el_dailog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
  }
  .el_window{
    width: 605px;
    height: 358px;
    background: #ffffff;
    position: absolute;
    border-radius: 8px;
    color: #666666;
  }
  .el_window>.el_cloose{
    position: absolute;
    right: 24px;
    top: 6px;
    font-size: 28px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .el_explain {
    width: 100%;
    height: 230px;
    padding: 60px 30px 0px 30px;
    box-sizing: border-box;
    font-size: 28px;
    text-align: center;
  }
  .el_explain>p:last-child{
    margin-top: 28px;
  }
  .el_definite {
    height: calc(100% - 230px);
    box-sizing: border-box;
    padding-top: 20px;
    border-top: 1px solid #e3e3e3;
  }
  .el_definite>div{
    display: inline-block;
    width: 562px;
    height: 84px;
    font-size: 32px;
    background-color: #ce1e2c;
    text-align: center;
    line-height: 84px;
    border-radius: 6px;
    color: #ffffff;
    margin-left: 20px;
  }

</style>
