<template>
<div>
  <div class="el_choose">选择团长，参团吧</div>
  <div class="el_content">
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
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return {
            goodss: res.data.slice(0, 10)
          }
        })
    },
    methods: {
      goct: function () {
        if (!this.data1) {
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
      let elWidth = (window.innerWidth - 605) / 2
      let elHeight = (window.innerHeight - 358) / 2
      this.$refs.dailog.style.left = elWidth + 'px'
      this.$refs.dailog.style.top = elHeight + 'px'
    },
    head () {
      return {
        title: '拼团抢福利'
      }
    }
}
</script>
<style>
    @import "~assets/css/participate.css"
</style>
