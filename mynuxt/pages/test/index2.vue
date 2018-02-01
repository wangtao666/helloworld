<template>
  <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
    <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <ul>
        <li>
          <div class="list" v-for="(val, key) in pageList">{{ val }}</div>
        </li>
      </ul>
    </v-loadmore>
  </div>
</template>
<script>
  import {Loadmore} from 'mint-ui';
  export default {
    data:function() {
      return {
        searchCondition: {  //分页属性
          pageNo:"1",  //当前页
          pageSize:"3" //总页数
        },
        pageList: [],  //分页的内容
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      }
    },
    components: {
      'v-loadmore':Loadmore  // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
      // 推荐应用组件时用a-b形式起名
    },
    mounted(){
      this.loadPageList();  //初次访问查询列表
    },
    methods: {
      loadTop:function() { //组件提供的下拉触发方法
        //下拉加载
        this.loadPageList();
        this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
      loadBottom:function() {
        // 上拉加载
        this.more();// 上拉触发的分页查询
        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
      loadPageList: function () {
        // 查询数据
          // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
        this.isHaveMore(true)
        this.pageList = ['呵呵', '哈哈', '嘿嘿'] //第一次请求回来的数据
        this.$nextTick(function () {
          // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
          // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
          // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
          this.scrollMode = "touch";
        });
      },
      more:function () {
        // 分页查询
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
        let data = ['擦擦', '拉拉', '咳咳'] //每次请求回来的数据
        for (var i = 0; i < data.length; i++) {
          this.pageList.push(data[i])
        }
        // 如果总页数 小于等于 当前页
        if (this.searchCondition.pageSize <= this.searchCondition.pageNo) {
          // 可以继续下拉
          this.isHaveMore(false);
        } else {
          // 禁止继续下拉
          this.isHaveMore(true);
        }
      },
      isHaveMore:function(isHaveMore){
        // 是否还有下一页，如果没有就禁止上拉刷新
        if (isHaveMore) {
          this.allLoaded = false;
        } else {
          this.allLoaded = true;//true是禁止上拉加载
          setTimeout(function () {
            document.getElementsByClassName('mint-loadmore-bottom')[0].style.marginBottom = '0px'
            document.getElementsByClassName('mint-loadmore-spinner')[0].style.display = 'none'
            // 这里会报错 而且不会执行 不知道是为什么！
            document.getElementsByClassName('mint-loadmore-text')[1].textContent = '加载完成'
          },400)
        }
      }
    }
  }
</script>
