<template>
  <div id="wrap">
    <div class="cus-name">
      <a class="link_name l" src="#">四川办事处</a>
      <a class="link_btn r" src="#">进入商城</a>
    </div>

    <mt-swipe :auto="3000" :prevent="true" v-show="isShow2">
      <mt-swipe-item v-for="(item, index) in imgurl" :key="index" :class="active">
        <img :src=" item.url ">
      </mt-swipe-item>
    </mt-swipe>

    <!--商品的名字 价格 prize-->
    <div class="goodInfo">
      <div class="goodInfoName borderBox">
        {{ istext }}
      </div>
      <div class="infoPrize">
        <span class="">拼团价:￥<i class="size44">520</i></span>
        <span class="retailPrice">零售价：<i>￥1234</i></span>
      </div>
      <div class="infoRemove">
        <span class="retailPrice remove">市场价：<i>￥1234</i></span>
      </div>
    </div>
    <!--属性-->
    <div class="spxq_property">
      <div id="table_b" style="display:none;">
        <p><span>已选:</span><b id="choosemodel"></b></p>
        <p><span>数量:</span><b id="choosenum"></b></p>
      </div>
      <div id="table_a"><p><span>属性：</span><b>属性1</b></p></div>
    </div>
    <!--物流模板-->
    <div id="delivery">
      <p>
        <img src="../../assets/images/icon2x.png" alt="勾勾">
        <span>商家运费规则<input type="hidden" id="deliveryFreightShow" value="02"></span>
      </p>
      <div class="ico">

      </div>
    </div>
    <div class="d_switch">
      <a href="javascript:void(0)" tog="spxq_intro" style="border-right:none;" class="cur box-size">图文详情</a>
      <a href="javascript:void(0)" tog="tcsp_intro" class="f-left box-size hide">优惠套餐</a>
      <a href="javascript:void(0)" class="f-left box-size hide">买家评论</a>
    </div>
    <!--商品详情 intro-->
    <div class="spxq_intro base_intro_b">
      <div class="abstract absattr">商品详情</div>
      <div class="edit" id="goodscontent">
      </div>
    </div>
    <div class="fix-bottom-group clean">
      <div class="bottom-1 _left clean">
        <a class="home_icon2 borderBox" href="#">
          商城
        </a>
        <a class="collect borderBox" href="#">
          收藏
        </a>
      </div>
      <div class="bottom-2 _left clean">
        <a class="addCar borderBox _left" href="#">加入购物车</a>
        <a class="oneBuy borderBox _left" href="#">单独购买</a>
        <a class="fightGroup" href="#">去拼团</a>
      </div>
    </div>
    <Load v-show="isShow"></Load>
  </div>
</template>
<script>
  import axios from 'axios'
  import filter from '../../assets/js/filter'
  import Load from '../../components/load'

  export default {
    data () {
      return {
        imgurl: [],
        istext: '',
        isShow: true,
        active: 'is-active',
        isShow2: false
      }
    },
    head () {
      return {
        title: '拼团购详情页'
      }
    },
    async asyncData () {
      return axios.all([
        axios.get('http://127.0.0.1:3666/geturl'),
        axios.get('http://127.0.0.1:3666/gettext')
      ])
      .then(axios.spread(function (url, texts) {
        return {
          imgurl: url.data,
          istext: texts.data
        }
      }))
    },
    components: { Load },
    mounted () {
      let self = this
      //加载动画
      filter.flter('wrap', true)
      self.isShow2 = true
      setTimeout(function () {
        self.isShow = false
        filter.flter('wrap', false)
      }, Math.random() * 3000)
    }
  }
</script>
<style>
  @import "~assets/css/myGroups.css";
  .page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
</style>
