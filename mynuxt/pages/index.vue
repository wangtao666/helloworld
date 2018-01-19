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
      <div v-for="(item, index) in goodss" :class="goods" @click="goDetail">
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
          <div @click="openwin1">引导</div>
        </li>
        <li>
          <div @click="openwin1">参团</div>
        </li>
        <li>
          <div @click="openwin1">我的团</div>
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
        }))
    },
    created () {
//      console.log('goodss:', this.goodss, 'clas:', this.clas)
    },
    head () {
      return {
        title: '拼团购'
      }
    },
    components: { Banner, Times, Btn },
    mounted () {
      let self = this
      let elWidth = 0
      let lis = self.$refs.mybox.children
      let win1lt = (window.innerWidth - 608) / 2
      let win1tp = (window.innerHeight - 828) / 2
      let win2tp = (window.innerHeight - 358) / 2
      for (var i = 0; i < lis.length; i++) {
        elWidth += lis[i].clientWidth
      }
      self.$refs.mybox.style.width = elWidth + 30 + 'px'
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
        console.log('123:', e.target.innerText)
        if (e.target.innerText === '引导') {
          this.data1 = true
          this.data2 = true
        } else if (e.target.innerText === '参团') {
          location.href = 'participate'
        } else {
          location.href = '/'
        }
      },
      gotuan: function () {
        location.href = 'success'
      },
      cantuan: function () {
        location.href = 'participate'
      },
      goDetail: function () {
        location.href = 'groupDetails'
      }
    }
}
</script>

<style>
    @import "~assets/css/index.css"
</style>
