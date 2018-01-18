<template>
  <div id="lead">
    <ul :class="choose">
      <li>
        <nuxt-link to="javascript:">参团</nuxt-link>
      </li>
      <li>
        <nuxt-link to="javascript:">我的团</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/home">去开团</nuxt-link>
      </li>
    </ul>
    <nuxt/>
  </div>
</template>
<script>
  export default {
    name: 'lead',
    data () {
      return {
        choose: 'el_choose'
      }
    }
  }
</script>
<style>
  .el_choose {
    font-size: 26px;
    position: fixed;
    bottom: 138px;
    right: 16px;
  }
  .el_choose>li {
    width: 84px;
    height: 84px;
    border-radius: 42px;
    border: 1px solid rgb(205,205,205);
    text-align: center;
    line-height: 84px;
    margin-top: 22px;
    list-style: none;
    background: #fff;
  }
  .el_choose>li>a {
    text-decoration: none;
    color: rgb(0,191,142);
  }
</style>
