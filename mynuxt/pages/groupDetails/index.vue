<template>
  <div id="wrap">
    <div class="cus-name">
      <a class="link_name l" src="#">四川办事处</a>
      <a class="link_btn r" src="#">进入商城</a>
    </div>

    <!--滚动 banner-->
    <div class="swiper-container" style="height:750px;">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="/images/lay_load.png" url="">
        </div>
      </div>
    </div>

    <!--商品的名字 价格 prize-->
    <div class="goodInfo">
      <div class="goodInfoName borderBox">
        全友家居卧室套房罗满妮玫瑰系列法式乡村四门衣柜65907
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
        <img src="/images/icon2x.png" alt="勾勾">
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
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    head () {
      return {
        title: '拼团购详情页'
      }
    }
  }
</script>
<style>
  @import "~assets/css/myGroups.css";
</style>
