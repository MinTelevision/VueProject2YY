<template>
<body class="yaya">
  <div class="app-wrap">
    <div>
      <div class="flex-child-noshrink">
        <header class="header">
          <div class="wrapper">
            <div
              class="main flex flex-justify-between relative bb"
              style="background-color: rgba(250, 250, 250, 0.980392);"
            >
              <div class="left-side">
                <router-link
                  to="/app/mine"
                  href="javascript:;"
                  class="back-button flex flex-center"
                  style="color: rgb(51, 51, 51); padding-left: 0px;"
                >
                  <i class="fa fa-angle-left font-30"></i>
                  <span class="back-text font-16"></span>
                </router-link>
              </div>
              <div class="title flex flex-center" style="left: 44px; right: 44px;">
                <h1 class="lines-1 font-17 normal" style="color: rgb(51, 51, 51);">用户注册</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="wrapper">
        <div class="login">
          <div class="login-item border-bottom flex flex-align-center">
            <div class="item-icon">
              <i class="fa fa-mobile font-24 grey-6"></i>
            </div>
            <input
              @click="focus"
              type="text"
              placeholder="手机号码"
              class="login-input flex-child-grow"
              v-model="user"
            >
          </div>
          <div class="login-item border-bottom flex flex-align-center">
            <div class="item-icon">
              <i class="fa fa-adjust font-16 grey-6"></i>
            </div>
            <input
              type="password"
              placeholder="密码"
              class="login-input flex-child-grow"
              v-model="password"
            >
          </div>
          <div v-show="show" class="red" v-text="details"></div>
          <a
            @click="register"
            href="javascript:;"
            class="login-button flex flex-center grey-d-bg"
            :class="{'light-green-bg':(user.length>0&&password.length>0)}"
          >
            <span class="font-32 white">注册</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="progress"
    style="width: 0%; height: 2px; background-color: rgb(26, 173, 25); opacity: 0;"
  ></div>
</body>
</template>

<script>
import { ServerUrl } from "../configs/ServerUrl.js";
import qs from "qs";
export default {
  name: "Register",
  data() {
    return {
      user: "",
      password: "",
      show: false,
      details: ""
    };
  },
  methods: {
    register() {
      if (this.user.trim().length > 0 && this.password.trim().length > 0) {
        if (/^1[3578]\d{9}$/.test(this.user)) {
          this.$axios
            .post(
              ServerUrl + "/users/register",
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
            .then(() => {
              location.href = "/#/login";
            });
        } else {
          this.show = true;
          this.details = "手机号有误";
          this.user = "";
          this.password = "";
        }
      } else {
        this.show = true;
        this.details = "手机号或密码不能为空";
        this.user = "";
        this.password = "";
      }
    },
    focus() {
      this.show = false;
    }
  }
};
</script>

<style src="../assets/css/loginReg.css" scoped>
</style>