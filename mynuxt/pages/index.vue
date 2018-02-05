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
        <li :class="{active: active == index}" @click="check(index, item.id)" v-for='(item, index) in clas' :key="index">{{ item.categoryName }}</li>
      </ul>
    </div>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div id="goods">
        <div v-for="(item, index) in goodss" :class="goods" @click="goDetail">
          <div :class="imgs">
            <img :src="item.goodsPic" alt="">
          </div>
          <div :class="bewrite">
            <ul>
              <li>{{ item.goodsName }}</li>
              <li>团长价:
                <span>￥</span>
                <span>{{ item.salesPrice }}</span>
              </li>
              <li>
                拼团价：
                <span>￥</span>
                <span>{{ item.spellPrice }}</span>
                <span>市场价:<span>￥{{ item.marketPrice}}</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </mt-loadmore>
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
        <p>
          {{ alldata.content }}
        </p>
      </div>
    </div>
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
    <Btn :show2="show2"></Btn>
    <Load v-show="isShow"></Load>
  </div>
</template>
<script>
  import Banner from '../components/banner'
  import Times from '../components/times'
  import Btn from '../components/button'
  import Load from '../components/load'
  import filter from '../assets/js/filter'
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
        choose: 'el_choose',
        isShow: true,
        show2: true,
        goodss: [],
        alldata: [],
        allLoaded: false
      }
    },
    async asyncData () {
      // 记得return 不然不会返回结果
      return axios.all([
        axios.get('http://127.0.0.1:3222/api/gettitle'),
        axios.get('http://127.0.0.1:3222/api/getclass')
      ])
        .then(axios.spread(function (reposResp, getclass) {
          console.log(reposResp.data.choose)
          let names = [];
          // 获得所有对象的名称
          for(let name in getclass.data) {
            names.push(name)
          }
          // 上面请求都完成后，才执行这个回调方法
          return {
            // 头部导航内容
            clas: reposResp.data.choose,
            // 取索引为1的对象默认展示
            goodss: getclass.data[names[0]],
            // 分类数据记录一下
            alldata: getclass.data
          }
        }))
    },
    created () {
//      console.log('clas:', this.alldata)
    },
    head () {
      return {
        title: '拼团购'
      }
    },
    components: { Banner, Times, Btn, Load },
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
      //加载动画
      filter.flter('box', true)
      self.isShow = true
      setTimeout(function () {
        self.isShow = false
        filter.flter('box', false)
      }, Math.random() * 1000)
      document.getElementsByClassName('mint-loadmore-bottom')[0].innerHTML = '没有更多啦！下拉刷新试试！'
    },
    methods: {
      check: function (e, att) {
        this.active = e
        // 动态的属性名不能用点的，要data[att]这样调用！！！！！！坑！ 因为所有数据都已经请求过来了，所以直接用，不用再发请求!!!
        this.goodss = this.alldata[att]
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
          location.href = '/participate'
        } else {
          location.href = '/myGroups'
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
      },
      loadTop: function () {
        // 加载更多数据  可自行写事件(拉到顶部时)
        this.$refs.loadmore.onTopLoaded();
        let self = this
        axios.get('/api/getclass')
          .then(function(response){
            // 让当前被选中的导航 在下拉刷新后一样的呈现出当前导航对应的内容
            let stext = document.getElementsByClassName('active')[0].innerText
            let curtext = ''
            for (let i = 0; i<self.clas.length; i++) {
              if (self.clas[i].categoryName == stext) {
                curtext = self.clas[i].id
              }
            }
            // JSON.parse() 字符串转json格式
            self.goodss = response.data[curtext]
            console.log('22222222222:', response.data[curtext])
          })
          .catch(function(err){
            console.log(err);
          });
      },
      loadBottom: function () {
        // 加载更多数据 加载完成时的事件
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
    }
}
</script>

<style>
    @import "~assets/css/index.css"
</style>
