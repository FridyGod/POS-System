<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-qitashouru"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-zhufang"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-lingshi"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuantequan"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-gouwu"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-shezhi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "leftNav",
    data() {
      return {}
    }
  }

</script>

<style>
  .left-nav {
    color: #fff;
    font-size: 10px;
    height: 100%;
    width: 5%;
    background-color: #1d8ce0;
    float: left;
  }

  .iconfont {
    font-size: 24px;
  }

  .left-nav ul {
    padding: 0px;
    margin: 0px;
  }

  .left-nav li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }

</style>

