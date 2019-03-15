<template>
  <header id="header" class="wrapper">
    <div class="header border-bottom">
      <a href="javascript:history.back(-1);" class="icon back-btn"></a>
      <a @click="menu" href="javascript:;" class="icon header-menu-btn"></a>
      <h1 class="page_title">个人信息</h1>
    </div>
    <div class="header-menu border-bottom" v-show="show">
      <a href="/">
        <i class="home"></i>
        <span>首页</span>
      </a>
      <router-link to="/app/fenlei" href="javascript:;">
        <i class="cate"></i>
        <span>商品分类</span>
      </router-link>
      <router-link to="/app/cart" href="javascript:;">
        <i class="cart"></i>
        <span>购物车</span>
      </router-link>
      <a href="javascript:;">
        <i class="user"></i>
        <span>会员中心</span>
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: "Mheader",
  data(){
    return{
      show:false
    }
  },
  methods:{
    menu(){
      this.show=!this.show;
    }
  }
};
</script>
<style scoped>
.wrapper {
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}
.icon {
    background: url(../assets/icon.png) no-repeat;
    background-size: 62px 130px;
}
.header {
  background: #f5f5f5;
  height: 45px;
}
.back-btn {
  display: block;
  width: 45px;
  height: 45px;
  float: left;
  background-position: 0 -37px;
}
.header-menu-btn {
  display: block;
  width: 45px;
  height: 45px;
  float: right;
  background-position: 0 -82px;
}
.page_title {
  text-align: center;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
}
.header-menu {
  height: 50px;
  background: #333;
}
.header-menu a {
  width: 25%;
  height: 40px;
  display: block;
  text-align: center;
  padding: 5px 0;
  float: left;
  text-shadow: 0 1px 0 #000;
  color: #eee;
}
.header-menu a i {
  display: block;
  margin: 0 auto;
  width: 20px;
  height: 20px;
  background: url(../assets/bottom_nav@2x.png) no-repeat;
  background-size: 80px 20px;
}
.header-menu a i.home {
  background-position: 0 0;
}
.header-menu a i.cate {
  background-position: -20px 0;
}
.header-menu a i.cart {
  background-position: -40px 0;
}
.header-menu a i.user {
  background-position: -60px 0;
}
.header-menu a span {
  font-size: 12px;
}
</style>


