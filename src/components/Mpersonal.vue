<template>
  <div class="wrapper">
    <div class="ios_menu">
      <router-link to="/editinfo/touxiang" href="javascript:;" style="height: 65px; line-height: 65px; padding: 10px 0">
        <b>会员头像</b>
        <span class="vip-touxiang">
          <img src="//img2.yaya.cn/img/face/user.png">
        </span>
      </router-link>
      <a href="editinfo.aspx?m=nickname">
        <b>昵称</b>
        <i class="arrow_r"></i>
        <span>183****2698</span>
      </a>
      <a href="editinfo.aspx?m=user">
        <b>用户名</b>
        <i class="arrow_r"></i>
        <span>18306632698</span>
      </a>
      <a href="editinfo.aspx?m=email">
        <b>电子邮件</b>
        <i class="arrow_r"></i>
        <span></span>
      </a>
      <a href="editinfo.aspx?m=mobile">
        <b>手机号码</b>
        <i class="arrow_r"></i>
        <span>18306632698</span>
      </a>
    </div>

    <div class="ios_menu">
      <a href="editinfo.aspx?m=name">
        <b>真实姓名</b>
        <i class="arrow_r"></i>
        <span></span>
      </a>
      
      <a href="editinfo.aspx?m=sex">
        <b>性别</b>
        <i class="arrow_r"></i>
        <span>女</span>
      </a>
      
      <a href="editinfo.aspx?m=birthday">
        <b>生日</b>
        <i class="arrow_r"></i>
        <span>未设置</span>
      </a>
    </div>
    <div class="ios_menu">
      <a href="editinfo.aspx?m=password">
        <b>密码</b>
        <i class="arrow_r"></i>
        <span>修改密码</span>
      </a>
      <a href="/member/address">
        <b>收货地址</b>
        <i class="arrow_r"></i>
        <span>修改收货地址</span>
      </a>
      <a href="userPrivilege.aspx">
        <b>我的特权</b>
        <i class="arrow_r"></i>
        <span>查看我的特权</span>
      </a>
    </div>
    <div class="ios_menu" style="margin-bottom:0;">
      <a href="/member/face">
        <b>人脸识别</b>
        <i class="arrow_r"></i>
      </a>
    </div>
    <label id="shop-validate" class="check-box border-bottom" style="background: #fff;">
      <input type="checkbox">
      <i></i>
      <b style="font-size: 15px;">加单验证</b>
    </label>
    <input id="isValidate" name="isValidate" type="hidden" value="0">
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.arrow_r {
  display: inline-block;
  width: 25px;
  height: 25px;
  background: url(../assets/arrow.png) center no-repeat;
  background-size: 100%;
}
.ios_menu {
  margin: 20px 0;
  border: solid 1px #dadada;
  -webkit-border-image: url(../assets/border.gif) 2 0 round;
  border-image: url(../assets/border.gif) 2 0 round;
  border-width: 1px 0;
  background: #fff;
}
.ios_menu a,
.ios_menu .item {
  margin-left: 10px;
  padding-right: 10px;
  height: 50px;
  line-height: 50px;
  display: block;
  border: solid 1px #dadada;
  -webkit-border-image: url(../assets/border.gif) 2 0 round;
  border-image: url(../assets/border.gif) 2 0 round;
  border-width: 1px 0 0 0;
}
.ios_menu a:first-child {
  border-width: 0;
}
.ios_menu b {
  color: #2c3e50;
  font-size: 15px;
}
.ios_menu i {
  float: right;
  margin: 15px 0;
  width: 20px;
  height: 20px;
}
.ios_menu span {
  float: right;
  color: #93a0ae;
}
.vip-touxiang {
  float: right;
  width: 65px;
  height: 65px;
  display: block;
  margin-right: 20px;
  border-radius: 100%;
  overflow: hidden;
}
.vip-touxiang img {
  width: 100%;
  height: 100%;
}
</style>

