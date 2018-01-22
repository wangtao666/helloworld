<template>
  <div class="el_box">
    <div class="el_banner">
    </div>
    <div class="el_personnel">
      <span class="el_avatar"></span>
      <span class="el_jion">XX和XX正在组团抢优惠，快来加入吧！</span>
    </div>
    <div class="btg_time_line clean width750" id="fbb">
      <section class="_right timeall">
        <div class="timeTxt">距结束</div>
        <ul class="btg-time">
          <li class="timeDay">15天</li>
          <li class="timeH">12</li>
          <li class="timeM">44</li>
          <li class="timeS">45</li>
        </ul>
      </section>
    </div>
    <div class="el_nav">
      <div class="el_navs">
        <ul class="clear" ref="mybox">
          <li :class="{active: active == index}" @click="check(index)" v-for="(item, index) in clas" :key="index">{{ item.choose }}</li>
        </ul>
      </div>
    </div>
    <div class="el_content">
      <div class="el_goods" v-for="(item, index) in goodss" :key="index" @click="goDetail">
        <div class="el_img">
          <img src="../../assets/images/prompt.png" alt=""/>
        </div>
        <div class="el_bewrite">
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
              <span>
                  市场价:
                  <span>￥{{ item.body.slice(0, 1) }}</span>
              </span>
            </li>
          </ul>
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
        active: 0,
        clas: [],
        goodss: []
      }
    },
    head () {
      return {
        title: '拼团抢福利'
      }
    },
    methods: {
      check: function (e) {
        this.active = e
      },
      goDetail: function () {
        location.href = '/groupDetails'
      }
    },
    mounted () {
      let self = this
      let elWidth = 0
      let lis = self.$refs.mybox.children
      for (var i = 0; i < lis.length; i++) {
        elWidth += lis[i].clientWidth
      }
      self.$refs.mybox.style.width = elWidth + 30 + 'px'
    },
    async asyncData () {
      return axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('http://127.0.0.1:3666/getall')
      ])
        .then(axios.spread(function (goods, cla) {
          return {
            goodss: goods.data.slice(0, 10),
            clas: cla.data
          }
        }))
    }
  }
</script>
<style>
    @import "~assets/css/boon.css"
</style>
