<template>
  <div id="btn">
    <div :class="btn" @click="gokt">去开团</div>
    <nuxt/>
  </div>
</template>
<script>

  export default {
    name: 'btn',
    data () {
      return {
        btn: 'el_btn'
      }
    },
    methods: {
      gokt: function () {
        location.href = 'success'
      }
    }
  }
</script>
<style>
  #btn {
    width: 750px;
    height: 114px;
    box-sizing: border-box;
    padding: 15px 24px;
    position: fixed;
    bottom: 0px;
    border-top: 1px solid rgb(217,217,217);
    background: #fff;
  }
  .el_btn {
    display: block;
    width: 706px;
    height: 84px;
    background: rgb(234,81,47);
    border-radius: 8px;
    text-align: center;
    line-height: 84px;
    font-size: 32px;
    color: #ffffff;
    text-decoration: none;
  }
</style>
