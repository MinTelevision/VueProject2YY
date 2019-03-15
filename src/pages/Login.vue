<template>
<body class="yaya">
  <div class="page-starter" style="display: none;">
    <img
      width="90"
      height="40"
      class="logo"
      src="data:image/png;base64,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"
    >
  </div>
  <div class="app-wrap">
    <div class="wrapper">
      <div class="flex-child-noshrink light-bg">
        <header class="header">
          <div class="wrapper">
            <div
              class="main flex flex-justify-between relative bb"
              style="background-color: rgba(250, 250, 250, 0.98);"
            >
              <div class="left-side">
                <a
                  href="javascript:history.back();"
                  class="back-button flex flex-center"
                  style="color: rgb(51, 51, 51); padding-left: 0px;"
                >
                  <i class="fa fa-angle-left font-30"></i>
                  <span class="back-text font-16"></span>
                </a>
              </div>
              <div class="title flex flex-center" style="left: 44px; right: 44px;">
                <h1 class="lines-1 font-17 normal" style="color: rgb(51, 51, 51);">登录</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="login">
        <div class="login-item border-bottom flex flex-align-center">
          <div class="item-icon">
            <i class="fa fa-user-o font-18 grey-6"></i>
          </div>
          <input
            @click="hidden"
            v-model="user"
            type="text"
            placeholder="用户名/手机号"
            class="login-input flex-child-grow"
          >
        </div>
        <div class="login-item border-bottom flex flex-align-center">
          <div class="item-icon">
            <i class="fa fa-unlock-alt font-20 grey-6"></i>
          </div>
          <input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            class="login-input flex-child-grow"
          >
        </div>
        <div v-show="xianshi" class="red" v-text="details"></div>
      </div>
      <a
        @click="login"
        href="javascript:;"
        class="login-button flex flex-center grey-d-bg"
        :class="{'light-green-bg':(user.length>0&&password.length>0)}"
        style="margin-top: 40px;"
      >
        <span class="font-16 white">登 录</span>
      </a>
      <div class="flex flex-justify-between" style="margin: 20px;">
        <router-link to="/register" href="javascript:;" class>新用户注册</router-link>
      </div>
    </div>
  </div>

  <div
    data-v-c213bd7c
    class="progress"
    style="width: 0%; height: 2px; background-color: rgb(26, 173, 25); opacity: 0;"
  ></div>
</body>
</template>

<script>
import { ServerUrl } from "../configs/ServerUrl.js";
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      details: "",
      xianshi: false
    };
  },
  methods: {
    login() {
      if (this.user.trim().length > 0 && this.password.trim().length > 0) {
        this.$axios
          .post(
            ServerUrl + "/users/login",
            qs.stringify({
              user: this.user,
              password: this.password
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(data => {
            if (data.data.status == "success") {
              localStorage.setItem("token", data.data.token);
              location.href = "/";
            } else {
              this.xianshi = true;
              this.details = "请输入正确密码";
              this.user = "";
              this.password = "";
            }
          });
      } else {
        this.xianshi = true;
        this.details = "账号或密码不能为空";
        this.user = "";
        this.password = "";
      }
    },
    hidden() {
      this.xianshi = false;
    }
  }
};
</script>

<style src="../assets/css/loginReg.css" scoped>
</style>
