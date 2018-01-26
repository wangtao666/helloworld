<template>
  <div :class="timeall">
    <div :class="timeTxt">距结束</div>
    <ul :class="btg_time">
      <li :class="timeDay">15天</li>
      <li :class="timeH">12</li>
      <li :class="timeM">44</li>
      <li :class="timeS">45</li>
    </ul>
    <nuxt/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rights: 'el_right',
      timeall: 'el_timeall',
      timeTxt: 'el_timeTxt',
      btg_time: 'el_btg_time',
      timeDay: 'el_timeDay',
      timeH: 'el_timeH',
      timeM: 'el_timeM',
      timeS: 'el_timeS'
    }
  }
}
</script>
<style>
  .el_timeall {
    padding: 18px 28px 18px 0;
    float: right;
    /*filter: blur(15px);*/
    /*-webkit-filter: blur(15px);*/
  }
  .el_timeTxt {
    display: inline-block;
    font-size: 24px;
    vertical-align: middle;
    color: #d95c34;
  }
  .el_btg_time {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }
  .el_btg_time>li:first-child {
    width: 60px;
    margin-left: 6px;
  }
  .el_btg_time>li {
    text-align: center;
    color: #fff;
    margin-left: 18px;
    float: left;
    display: block;
    position: relative;
    height: 40px;
    line-height: 40px;
    background-color: #ea512f;
    border-radius: 6px;
    width: 40px;
    box-sizing: border-box;
    font-size: 18px;
  }
  li {
    list-style: none;
  }
  .el_btg_time>li:after {
    color: #000;
    content: ":";
    display: block;
    position: absolute;
    top: -2px;
    right: -10px;
  }
</style>
