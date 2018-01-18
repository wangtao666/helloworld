<template>
  <div id="baner">
    <div :class="banner">
      <div :class="inform">活动详情>></div>
    </div>
    <nuxt/>
  </div>
</template>
<script>
  export default {
    name: 'baner',
    data () {
      return {
        banner: 'el_banner',
        inform: 'el_inform'
      }
    }
  }
</script>
<style>
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
</style>
