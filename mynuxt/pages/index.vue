<template>
  <div id="box">
    <Banner></Banner>
    <Times></Times>
    <div :class="navs" id="navs">
      <ul :class="clear" ref="mybox">
        <li :class="{active: active == index}" @click="check(index)" v-for='(item, index) in clas' :key="index">{{ item.choose }}</li>
      </ul>
    </div>
    <div id="goods">
      <div v-for="(item, index) in goodss" :class="goods">
        <div :class="imgs">
          <img src="" alt="">
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
    <Btn></Btn>
    <Leads></Leads>
  </div>
</template>
<script>
  import Banner from '../components/banner'
  import Times from '../components/times'
  import Btn from '../components/button'
  import Leads from '../components/lead'
//  import request from '../static/api/request'
  import axios from 'axios'
  export default {
    data () {
      return {
        goods: 'el_goods',
        imgs: 'el_img',
        bewrite: 'el_bewrite',
        goodss: [],
        navs: 'el_navs',
        clear: 'clear',
        active: 0,
        clas: [{
          choose: '厨房'
        }, {
          choose: '餐厅'
        }, {
          choose: '书房'
        }, {
          choose: '客厅'
        }, {
          choose: '儿童'
        }, {
          choose: '户外/阳台'
        }]
      }
    },
    async asyncData () {
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
    components: { Banner, Times, Btn, Leads },
    mounted () {
      let self = this
      let elWidth = 0
      let lis = self.$refs.mybox.children
      for (var i = 0; i < lis.length; i++) {
        elWidth += lis[i].clientWidth
      }
      self.$refs.mybox.style.width = elWidth + 60 + 'px'
    },
    methods: {
      check: function (e) {
        this.active = e
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
    background: rgb(220,220,220);
    margin-left: 32px;
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
</style>
