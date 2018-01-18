<template>
  <div id="box">
    <div id="baner">
      <div :class="banner">
        <div :class="inform" @click="seeinform">活动详情>></div>
      </div>
    </div>
    <Times></Times>
    <div :class="navs" id="navs">
      <ul :class="clear" ref="mybox">
        <li :class="{active: active == index}" @click="check(index)" v-for='(item, index) in clas' :key="index">{{ item.choose }}</li>
      </ul>
    </div>
    <div id="goods">
      <div v-for="(item, index) in goodss" :class="goods">
        <div :class="imgs">
          <img src="/images/prompt.png" alt="">
        </div>
        <div :class="bewrite">
          <ul>
            <li>{{ item.title }}</li>
            <li>零售价:
              <span>￥</span>
              <span>{{ item.userId }}</span>
            </li>
            <li>
              拼团价：
              <span>￥</span>
              <span>{{ item.id }}</span>
              <span>市场价:<span>￥{{ item.body.slice(0, 1) }}</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="dailog" v-show="data1" ref="dailog">
      <div :class="window1" v-show="data2">
        <div class="el_cloose" @click="cloose">x</div>
        <div class="el_explain">
          <p>我想做团长点击“去开团”拼团获取团长专属福利</p>
          <p>我想参团点击“参团”享受拼团优惠</p>
        </div>
        <div class="el_definite">
          <div @click="gotuan">去开团</div>
          <div @click="cantuan">参团</div>
        </div>
      </div>
      <div :class="window2" v-show="data3">
        <div class="el_cloose" @click="cloose">x</div>
        <p class="el_top_font">活动规则</p>
        <p></p>
      </div>
    </div>
    <Btn></Btn>
    <div id="lead">
      <ul :class="choose">
        <li>
          <div @click="openwin1" ref="0">引导</div>
        </li>
        <li>
          <div @click="openwin1" ref="1">参团</div>
        </li>
        <li>
          <div @click="openwin1" ref="2">我的团</div>
        </li>
      </ul>
      <nuxt/>
    </div>
  </div>
</template>
<script>
  import Banner from '../components/banner'
  import Times from '../components/times'
  import Btn from '../components/button'
//  import request from '../static/api/request'
  import axios from 'axios'
  export default {
    name: 'box',
    data () {
      return {
        goods: 'el_goods',
        imgs: 'el_img',
        bewrite: 'el_bewrite',
        goodss: [],
        navs: 'el_navs',
        clear: 'clear',
        active: 0,
        clas: [],
        dailog: 'el_dailog',
        window1: 'el_window1',
        window2: 'el_window2',
        data1: false,
        data2: false,
        data3: false,
        banner: 'el_banner',
        inform: 'el_inform',
        choose: 'el_choose'
      }
    },
    async asyncData () {
      // 记得return 不然不会返回结果
      return axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('http://127.0.0.1:3666/getall')
      ])
        .then(axios.spread(function (userResp, reposResp) {
          // 上面两个请求都完成后，才执行这个回调方法
           return {
             goodss: userResp.data.slice(0, 20),
             clas: reposResp.data
           }
        }));
    },
    created () {
//      console.log('goodss:', this.goodss, 'clas:', this.clas)
    },
    components: { Banner, Times, Btn },
    mounted () {
      let self = this
      let elWidth = 0
      let lis = self.$refs.mybox.children
      let win1lt = ( window.innerWidth - 608 ) / 2
      let win1tp = ( window.innerHeight - 828 ) / 2
      let win2tp = ( window.innerHeight - 358 ) / 2
      for (var i = 0; i < lis.length; i++) {
        elWidth += lis[i].clientWidth
      }
      self.$refs.mybox.style.width = elWidth + 60 + 'px'
      // 设置窗口2为居中
      self.$refs.dailog.children[0].style.left = win1lt + 'px'
      self.$refs.dailog.children[0].style.top = win2tp + 'px'
      // 设置窗口1为居中
      self.$refs.dailog.children[1].style.left = win1lt + 'px'
      self.$refs.dailog.children[1].style.top = win1tp + 'px'
    },
    methods: {
      check: function (e) {
        this.active = e
      },
      seeinform: function () {
          this.data1 = true
          this.data3 = true
      },
      cloose: function () {
        this.data1 = false
        this.data2 = false
        this.data3 = false
      },
      openwin1: function (e) {
        console.log('123:',e.target.innerText)
        if(e.target.innerText == '引导'){
          this.data1 = true
          this.data2 = true
        }else if (e.target.innerText == '参团') {
          location.href = '/'
        }else {
          location.href = '/'
        }
      },
      gotuan: function () {
        location.href = "success"
      },
      cantuan: function () {

      }
    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height:100%;
  }
  #__nuxt, #__nuxt>div, #box{
    height: 100%;
  }
  .el_navs {
    width: 750px;
    overflow-x: scroll;
    border-bottom: 1px solid #e3e3e3;
  }
  .el_navs>ul {
    width: 999px;
    overflow-x: scroll;
    margin-left: 32px;
  }
  .el_navs>ul>li {
    font-size: 28px;
    padding: 18px 30px;
    float: left;
  }
  .active {
    border-bottom: 6px solid rgb(234,81,47);
  }
  .clear:after {
    content: "";
    display: block;
    clear: both;
  }
  #goods{
    height:calc(100% - 500px);
    overflow-y: auto;
  }
  .el_goods {
    margin-top: 18px;
    height: 180px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e3e3e3;
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
  .el_img>img{
    width: 180px;
    height: 180px;
  }
  .el_bewrite {
    margin-left: 28px;
    font-size: 28px;
  }
  .el_bewrite>ul {
    margin-top: -10px;
  }
  .el_bewrite>ul>li:first-child {
    width: 485px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    top: 16px;
  }
  li {
    list-style: none;
  }
  .el_bewrite>ul>li:nth-child(2) {
    font-size: 26px;
    color: rgb(153,153,153);
    margin-top: 54px;
    margin-bottom: 14px;
  }
  .el_bewrite>ul>li:nth-child(2)>span:first-child {
    font-size: 24px;
  }
  .el_bewrite>ul>li:last-child {
    color: rgb(234,81,47);
  }
  .el_bewrite>ul>li:last-child>span:first-child {
    font-size: 26px;
  }
  .el_bewrite>ul>li:last-child>span:last-child {
    font-size: 26px;
    color: rgb(153,153,153);
    text-decoration: line-through;
    margin-left: 24px;
  }
  .el_banner{
    width: 750px;
    height: 230px;
    background: rgb(235,97,0);
    position: relative;
  }
  .el_inform{
    width: 170px;
    height: 50px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background: rgba(0,0,0,0.61);
    text-align: center;
    line-height: 50px;
    position: absolute;
    right: 0;
    bottom: 32px;
    color: #ffffff;
    font-size: 26px;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .el_dailog {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .el_window1 {
    width: 605px;
    height: 358px;
    background: #ffffff;
    position: absolute;
    border-radius: 8px;
    color: #666666;
    z-index: 2;
  }
  .el_window2 {
    width: 605px;
    height: 828px;
    background: #ffffff;
    position: absolute;
    border-radius: 8px;
    color: #666666;
    z-index: 2;
  }
  .el_window1>.el_cloose, .el_window2>.el_cloose {
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
  }
  .el_definite {
    height: calc(100% - 230px);
    box-sizing: border-box;
    padding-top: 20px;
    border-top: 1px solid #e3e3e3;
  }
  .el_definite>div:first-child {
    display: inline-block;
    width: 268px;
    height: 84px;
    font-size: 32px;
    color: #ce1e2c;
    text-align: center;
    line-height: 84px;
    border: 1px solid #ce1e2c;
    border-radius: 6px;
    margin-left: 22px;
  }
  .el_definite>div:last-child {
    display: inline-block;
    width: 268px;
    height: 84px;
    font-size: 32px;
    background-color: #ce1e2c;
    text-align: center;
    line-height: 84px;
    border-radius: 6px;
    color: #ffffff;
    margin-left: 20px;
  }
  .el_window>.el_cloose, .el_window2>.el_cloose {
    position: absolute;
    right: 24px;
    top: 6px;
    font-size: 28px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .el_top_font {
    font-size: 34px;
    color: rgb(102,102,102);
    margin-top: 38px;
    text-align: center;
  }
  .el_choose {
    font-size: 26px;
    position: fixed;
    bottom: 138px;
    right: 16px;
  }
  .el_choose>li {
    width: 84px;
    height: 84px;
    border-radius: 42px;
    border: 1px solid rgb(205,205,205);
    text-align: center;
    line-height: 84px;
    margin-top: 22px;
    list-style: none;
    background: #fff;
  }
  .el_choose>li>div {
    text-decoration: none;
    color: rgb(0,191,142);
  }
</style>
