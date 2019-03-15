<template>
  <div class="wrapper grey-f-bg" style="margin-bottom:50px;">
    <div class="flex-child-noshrink">
      <header class="header">
        <div class="wrapper">
          <div
            class="main flex flex-justify-between relative bb"
            style="background-color: rgba(250, 250, 250, 0.98);"
          >
            <div class="left-side">
              <a
                href="/"
                class="back-button flex flex-center"
                style="color: rgb(51, 51, 51); padding-left: 0px;"
              >
                <i class="fa fa-angle-left font-30"></i>
                <span class="back-text font-16"></span>
              </a>
            </div>
            <div class="title flex flex-center" style="left: 44px; right: 44px;">
              <router-link to="/search" href="javascript:;" class="search flex flex-align-center">
                <i class="fa fa-search grey-9"></i>
                <span class="grey-9 lines-1">iPhone XS Max</span>
              </router-link>
            </div>
            <div class="right-side flex flex-center">
              <a
                @click="show"
                href="javascript:;"
                class="menu-btn flex flex-center grey-6"
                style="color: rgb(51, 51, 51);"
              >
                <i class="fa fa-ellipsis-h font-24"></i>
              </a>
            </div>
          </div>
          <transition name="list" tag="div">
            <div class="menu-box flex" v-show="xianshi">
              <a href="/" class="flex flex-col flex-center router-link-active">
                <i class="fa fa-home"></i>
                <span>首页</span>
              </a>
              <router-link
                to="/app/fenlei"
                href="javascript:;"
                class="flex flex-col flex-center router-link-exact-active router-link-active"
              >
                <i class="fa fa-reorder"></i>
                <span>分类</span>
              </router-link>
              <router-link to="/app/cart" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-shopping-cart"></i>
                <span>购物车</span>
              </router-link>
              <router-link to="/app/mine" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-user"></i>
                <span>我的</span>
              </router-link>
            </div>
          </transition>
        </div>
      </header>
    </div>

    <div class="full-width">
      <div class="sticky" id="sticky" style="top: 0px; left: 0px; float: left; height: 100%;">
        <div class="cate-parent border-right" style="height: 667px;">
          <a
            @click="tab(index)"
            v-for="(n,index) in nav"
            :key="index"
            href="javascript:;"
            class="cate-parent-item flex flex-center border-bottom"
            :class="{'main-color':page==index,'grey-f-bg':page==index}"
          >
            <span v-text="n"></span>
          </a>
        </div>
      </div>
      <div class="cate-child">
        <a href="javascript:" class="cate-ad">
          <img
            src="https://img2.yaya.cn/pic/category/201811230519390.jpg.webp"
            width
            height
            class="lazy-img"
            loaded="true"
          >
        </a>
        <div class="cate-item-wrap">
          <div class="flex flex-align-center flex-justify-between">
            <p class="cate-title bold font-12">所有商品</p>
          </div>
          <div class="flex flex-wrap white-bg">
            <router-link
              :to="`/detail?guid=${s.guid}`"
              v-for="(s,index) in shuju"
              :key="index"
              href="javascript:"
              class="cate-item flex flex-col flex-center"
            >
              <img :src="s.imgurl" width height class="lazy-img" loaded="true">
              <span class="font-12 lines-1" v-text="s.name"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ServerUrl } from "../configs/ServerUrl.js";
export default {
  name: "fenlei",
  data() {
    return {
      nav: ["手机推荐", "电脑办公", "智能穿戴", "数码影音"],
      allshuju: [],
      shuju: [],
      page: 0,
      xianshi: false
    };
  },
  methods: {
    show() {
      this.xianshi = !this.xianshi;
    },
    tab(index) {
      this.page = index;
      switch (this.page) {
        case 0:
          this.shuju = this.allshuju.filter(item => {
            return item.type == "phone";
          });
          break;
        case 1:
          this.shuju = this.allshuju.filter(item => {
            return item.type == "computer";
          });
          break;
        case 2:
          this.shuju = this.allshuju.filter(item => {
            return item.type == "watch";
          });
          break;
        case 3:
          this.shuju = this.allshuju.filter(item => {
            return item.type == "earphone";
          });
          break;
        default:
          break;
      }
    },
    chashouji() {
      let n = this;
      return new Promise(function(resolve) {
        n.$.ajax({
          type: "get", //请求方式
          url: ServerUrl + "/goodlist/findAll",
          async: true, //异步
          data: {
          },
          success(str) {
            resolve(str.data);
          }
        });
      });
    }
  },
  async created() {
    this.$store.commit("editLoading",true);
    this.allshuju = await this.chashouji();
    this.allshuju?this.$store.commit("editLoading",false):null;
    this.shuju = this.allshuju.filter(item => {
      return item.type == "phone";
    });
  }
};
</script>

<style scoped>
.search {
  background: #e3e3e3;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  padding: 0 10px;
}
.search .fa {
  margin-right: 5px;
}
.cate-parent {
  width: 2.5rem;
  overflow: auto;
  background: #fff;
  padding-bottom: 50px;
  box-sizing: border-box;
}
.cate-parent-item {
  height: 50px;
  padding: 0 8px;
}
.cate-parent-item.grey-f-bg {
  position: relative;
  z-index: 1;
}
.cate-parent-item:after {
  z-index: 2;
}
.cate-child {
  overflow: auto;
  width: 7.5rem;
  margin-left: 2.5rem;
}
.cate-child:after {
  clear: both;
}
.cate-ad {
  display: block;
  width: 7rem;
  margin: 10px auto 0;
}
.cate-ad img {
  display: block;
  width: 100%;
}
.cate-item-wrap {
  width: 7rem;
  margin: 0 auto;
}
.cate-item {
  width: 33%;
  padding: 10px 0;
}
.cate-item img {
  width: 80%;
  max-width: 70px;
  display: block;
  margin-bottom: 5px;
}
.cate-title {
  height: 30px;
  line-height: 30px;
}
.header {
  position: relative;
}
.header.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 8;
}
.main {
  height: 44px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.main.bb:after {
  content: "";
  position: absolute;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ccc;
}
.left-side {
  height: 44px;
}
.back-button {
  height: 44px;
  min-width: 44px;
  box-sizing: border-box;
}
.back-text {
  margin-left: 5px;
}
.title {
  position: absolute;
  top: 0;
  bottom: 0;
}
.right-side {
  height: 44px;
}
.menu-btn {
  width: 44px;
  height: 44px;
}
.menu-box {
  height: 60px;
  background: #000;
  overflow: hidden;
}
.menu-box a i {
  font-size: 24px;
  color: #9c9c9c;
}
.menu-box a {
  width: 25%;
  font-size: 12px;
  color: #9c9c9c;
}
.list-enter-to {
  transition: all 1s ease;
  height: 60px;
}

.list-leave-active {
  transition: all 1s ease;
  height: 0px;
}

.list-enter {
  height: 0px;
}

.list-leave {
  height: 60px;
}
</style>

