<template>
  <div id="wrap">
    <div>
      <div class="cus-name">
        <a class="link_name l" src="#">四川办事处</a>
        <a class="link_btn r" src="#">进入商城</a>
      </div>
      <!--mint ui 组件-->
      <mt-swipe :auto="3000" :prevent="true" v-show="isShow2">
        <mt-swipe-item v-for="(item, index) in imgurl" :key="index" :class="active">
          <img :src=" item ">
        </mt-swipe-item>
      </mt-swipe>

      <!--商品的名字 价格 prize-->
      <div class="goodInfo">
        <div class="goodInfoName borderBox">
          {{ goodss.goodsName }}
        </div>
        <div class="infoPrize">
          <span class="">团长价:￥<i class="size44">{{ goodss.headPrice}}</i></span>
          <span class="retailPrice">拼团价：<i>￥{{ goodss.spellPrice }}</i></span>
        </div>
        <div class="infoRemove">
          <span class="retailPrice remove">市场价：<i>￥{{ goodss.marketPrice }}</i></span>
        </div>
      </div>
      <!--属性-->
      <div class="spxq_property" @click="showdial">
        <div id="table_a" v-show="table_a">
          <p v-for="(item, index) in Attrdata" :key="index">
            <span>{{ item.attributeName }}</span>
            <b v-for="(item2, index2) in item.attributeOptionList" :key="index2">{{ item2 }}</b>
          </p>
        </div>
        <div id="table_b" v-show="!table_a">
          <p>
            <span>已选：{{ Isselect }}</span>
            <b></b>
          </p>
          <p>
            <span>数量：{{ Isselectlth }}</span>
            <b></b>
          </p>
        </div>
      </div>
      <!--物流模板-->
      <div id="delivery" @click="Torule">
        <p>
          <img src="../../assets/images/icon2x.png" alt="勾勾">
          <span>商家运费规则<input type="hidden" id="deliveryFreightShow" value="02"></span>
        </p>
        <div class="ico">

        </div>
      </div>
      <div class="d_switch">
        <a href="javascript:void(0)" tog="spxq_intro" style="border-right:none;" class="box-size">图文详情</a>
        <a href="javascript:void(0)" tog="tcsp_intro" class="f-left box-size hide">优惠套餐</a>
        <a href="javascript:void(0)" class="f-left box-size hide">买家评论</a>
      </div>
      <!--商品详情 intro-->
      <div class="spxq_intro base_introf_b">
        <div class="abstract absattr">商品详情</div>
        <div class="edit" id="goodscontent">
          <p style="font-size: 0" v-for="(item, index) in imgurl" :key="index">
            <img v-lazy="item" alt="22222">
          </p>
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
    <!--子组件  对showdia的值进行v-bind动态绑定  v-on监听子组件传给父组件的值 childtoparent这个一定要与子组件定义的名字一样-->
    <Dial :showdia="showdia" :Picurl="Picurl" :goodsName="goodsName" :headPrice="headPrice" :Attrdata="Attrdata" v-on:childtoparent="showchildmsg" v-on:childtoparent2="gettexts"></Dial>
    <Load v-show="isShow"></Load>
  </div>
</template>
<script>
  import axios from 'axios'
  import filter from '../../assets/js/filter'
  import Load from '../../components/load'
  import Dial from '../../components/dialog'

  export default {
    data () {
      return {
        imgurl: [],
        isShow: true,
        active: 'is-active',
        isShow2: false,
        goodss: [],
        Attrdata: [],
        Attrlist: [],
        table_a: true,
        table_b: false,
        showdia: '',
        Picurl: '',
        goodsName: '',
        headPrice: '',
        Isselect: '',
        Isselectlth: ''
      }
    },
    head () {
      return {
        title: '拼团购详情页'
      }
    },
    async asyncData () {
      return axios.all([
        axios.get('http://127.0.0.1:3222/api/getDetail')
      ])
      .then(axios.spread(function (content) {
        console.log(content.data.date)
        return {
          imgurl: JSON.parse(content.data.date[0].contentsPic),
          goodss: content.data.date[0].goodsDetail,
          Attrdata: content.data.date[0].showAttributeList,
          Attrlist: content.data.date[0].showAttributeList[0].attributeOptionList
        }
      }))
    },
    components: { Load, Dial },
    mounted () {
      this.Picurl = this.imgurl[0]
      this.goodsName = this.goodss.goodsName
      this.headPrice = this.goodss.headPrice
//      console.log('Attrdata:', this.Attrdata)
    },
    beforeMount () {
      let self = this
      //加载动画
      filter.flter('wrap', true)
      self.isShow2 = true
      setTimeout(function () {
        self.isShow = false
        filter.flter('wrap', false)
      }, Math.random() * 1000)
    },
    methods: {
      loadTop: function () {// 加载更多数据  可自行写事件(拉到顶部时)
        this.$refs.loadmore.onTopLoaded();
        let self = this
//        this.goodss[0].title.push(this.goodss[0].title)
        axios.get('http://127.0.0.1:3222/api/getmsg')
          .then(function(response){
            self.goodss = response.data.cf
          })
          .catch(function(err){
            console.log(err);
          });
      },
      loadBottom: function () {// 加载更多数据 加载完成时的事件
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
      showdial: function () {// 当点击属性按钮时 赋值showdia为true
        this.showdia = true
      },
      showchildmsg: function (data) {// 接收来自子组件的值，并赋值给showdia
        this.showdia = data
//        console.log('dialog目前的状态:', data)
      },
      gettexts: function (data) { // 获得已选择属性的数量和属性值
        this.Isselectlth = data.nums
        this.Isselect = data.texts.join('/')
        this.table_a = false
//        console.log('转换后的数据：', this.Isselect, this.Isselectlth)
      },
      Torule: function () {
        location.href = 'rule'
      }
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
  #wrap>div:first-child{
    filter: blur(15px);
    -webkit-filter: blur(15px);
    height: 750px;
  }
  img[lazy=loading] {
    background-image: url("../../assets/images/lay_load.png");
    width: 750px;
    height: 400px;
    margin: auto;
  }
</style>
