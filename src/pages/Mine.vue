<template>
  <div class="wrapper grey-f-bg full-height" style="margin-bottom:50px;">
    <div class="flex-child-noshrink">
      <div style="height: 44px; transition: height 0.2s ease 0s;"></div>
      <header class="header fixed">
        <div class="wrapper">
          <div
            class="main flex flex-justify-between relative"
            style="background-color: rgba(0, 0, 0, 0); background-image: url(&quot;https://img2.yaya.cn/newstatic//917/71061e936d4dd8.png&quot;);"
          >
            <div class="left-side"></div>
            <div class="title flex flex-center" style="left: 44px; right: 44px;">
              <h3 class="white font-18 normal" :style="{'opacity':`${show}`}" v-text="username"></h3>
            </div>
            <div class="right-side flex flex-center">
              <a href="/member/setting" class="full-height padding-right flex flex-center white">
                <span>设置</span>
                <i class="fa fa-cog font-18" style="margin-left: 5px;"></i>
              </a>
            </div>
          </div>
          <!-- <div class="menu-box flex" style="height: 0px;">
            <a href="/" class="flex flex-col flex-center router-link-active">
              <i class="fa fa-home"></i>
              <span>首页</span>
            </a>
            <a href="/category" class="flex flex-col flex-center">
              <i class="fa fa-reorder"></i>
              <span>分类</span>
            </a>
            <a href="/trade/cart" class="flex flex-col flex-center">
              <i class="fa fa-shopping-cart"></i>
              <span>购物车</span>
            </a>
            <a
              href="/member"
              class="flex flex-col flex-center router-link-exact-active router-link-active"
            >
              <i class="fa fa-user"></i>
              <span>我的</span>
            </a>
          </div>-->
        </div>
      </header>
    </div>
    <div
      class="bg"
      style="background-image: url(&quot;https://img2.yaya.cn/newstatic//917/71061e936d4dd8.png&quot;);"
    ></div>

    <div class="member-box">
      <div class="member-info flex flex-align-center">
        <router-link to="/info" href="javascript:;">
          <img
            src="https://img2.yaya.cn//images/usericon.png.webp"
            width
            height
            class="lazy-img avatar"
            loaded="true"
          >
        </router-link>
        <div class="no-login" v-show="!isLogin">
          <router-link to="/login" href="javascript:;" class>登录</router-link>
          <span>|</span>
          <router-link to="/register" href="javascript:;" class>注册</router-link>
        </div>
        <div class="flex flex-col flex-justify" v-show="isLogin">
          <h4 class="font-18" v-text="username"></h4>
          <div class="flex margin-top">
            <div class="flex flex-center">
              <a href="https://m.yaya.cn/vip/#/">
                <img
                  src="https://img2.yaya.cn/newstatic//916/76b7bebb5d76d8.png.webp"
                  width
                  height
                  class="lazy-img level-icon"
                  loaded="true"
                >
              </a>
            </div>
            <a href="https://m.yaya.cn/member" class="flex flex-center margin-left">
              <img
                src="https://img2.yaya.cn/newstatic//912/4448465aaa206c.png.webp"
                width
                height
                class="lazy-img other-icon"
                loaded="true"
              >
              <span class="font-13 black">未绑定</span>
            </a>
          </div>
        </div>
      </div>
      <div class="property flex">
        <a
          v-for="(c,index) in ccountmsg"
          :key="index"
          href="https://m.yaya.cn/user/myyue.aspx#balance"
          class="property-item flex-child-average flex flex-col flex-center"
        >
          <p v-text="c.num"></p>
          <p class="font-13" v-text="c.description"></p>
        </a>
      </div>
    </div>
    <div class="member-box" style="margin-top: 20px;">
      <a
        href="javascript:;"
        class="flex flex-align-center flex-justify-between"
        style="height: 44px;"
      >
        <b class="font-16">我的加单验证码</b>
        <i class="fa fa-angle-down font-24 grey-9 barcode-angle"></i>
      </a>
      <div class="barcode padding-bottom flex flex-col flex-center cursor" style="display: none;">
        <img id="barcode">
        <p class="font-16"></p>
      </div>
    </div>
    <div>
      <div class="menu-box" v-for="(m,index) in minedText" :key="index">
        <div class="menu-title flex flex-justify-between flex-align-center border-bottom">
          <h4 class="font-16" v-text="m.title"></h4>
          <a
            href="/member/order/more"
            class="full-height flex flex-center grey-9"
            style="color: rgb(156, 156, 156);"
          >
            <span style="margin-right: 8px;" v-text="m.more"></span>
            <i class="fa fa-angle-right font-24"></i>
          </a>
        </div>
        <div class="menu flex flex-wrap">
          <a
            v-for="(f,idx) in m.fenlei"
            :key="idx"
            href="https://m.yaya.cn/member/order/list/mine?tab=1"
            class="menu-item flex flex-col flex-center"
          >
            <img
              src="https://img2.yaya.cn/newstatic//1383/b35d3926831d6c.png.webp"
              width
              height
              class="lazy-img"
              loaded="true"
            >
            <span class="font-13" v-text="f.text"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ServerUrl } from "../configs/ServerUrl.js";
export default {
  name: "Mine",
  data() {
    return {
      ccountmsg: [
        {
          num: 0,
          description: "账户余额"
        },
        {
          num: 0,
          description: "优惠券"
        },
        {
          num: 0,
          description: "积分"
        },
        {
          num: 0,
          description: "Y币"
        }
      ],
      minedText: [
        {
          title: "我的订单",
          more: "全部订单",
          fenlei: [
            {
              text: "待付款",
              imgurl: ""
            },
            {
              text: "待收货",
              imgurl: ""
            },
            {
              text: "待评价",
              imgurl: ""
            },
            {
              text: "返修/退换",
              imgurl: ""
            }
          ]
        },
        {
          title: "售后收藏",
          more: "",
          fenlei: [
            {
              text: "维修进度",
              imgurl: ""
            },
            {
              text: "维修查询",
              imgurl: ""
            },
            {
              text: "收藏商品",
              imgurl: ""
            },
            {
              text: "浏览记录",
              imgurl: ""
            }
          ]
        },
        {
          title: "常用功能",
          more: "更多功能",
          fenlei: [
            {
              text: "我的预约",
              imgurl: ""
            },
            {
              text: "会员俱乐部",
              imgurl: ""
            },
            {
              text: "领劵中心",
              imgurl: ""
            }
          ]
        },
        {
          title: "我的信息",
          more: "",
          fenlei: [
            {
              text: "电子保修卡",
              imgurl: ""
            }
          ]
        },
        {
          title: "联系我们",
          more: "",
          fenlei: [
            {
              text: "我的投诉",
              imgurl: ""
            },
            {
              text: "我的咨询",
              imgurl: ""
            },
            {
              text: "联系客服",
              imgurl: ""
            },
            {
              text: "商户合作",
              imgurl: ""
            }
          ]
        }
      ],
      username: "",
      show: 0,
      isLogin: false
    };
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 60) {
        this.show = 1;
      } else {
        this.show = 0;
      }
    },
    upDate(status) {
      this.isLogin = status;
    },
    autoLogin() {
      return new Promise((resolve) => {
        this.$.ajax({
          type: "POST",
          data: {
            token: localStorage.getItem("token")
          },
          url: ServerUrl + "/users/autoLogin",
          success(data) {
            resolve(data);
          }
        });
      });
    } 
  },
  async mounted() {
    let data = await this.autoLogin();
    this.upDate(data.status);
    this.username = data.username;
    window.addEventListener("scroll", this.watchScroll);
  }
};
</script>
<style scoped>
.menu {
  padding: 0 10px;
  border-radius: 0 0 10px 10px;
}
.menu-title {
  height: 44px;
  padding: 0 10px;
  border-radius: 10px 10px 0 0;
  background-size: cover;
}
.menu-item {
  position: relative;
  width: 25%;
  height: 80px;
}
.menu-item img {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}
.menu-box {
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
  background: #fff;
  margin: 18px 15px;
  box-sizing: border-box;
  position: relative;
}
.badge {
  position: absolute;
  right: 0.64rem;
  top: 0.34667rem;
  color: #fff;
  padding: 0 4px;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  border-radius: 14px;
}
.bg {
  background-size: cover;
  width: 10rem;
  height: 2.58667rem;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: top;
}
.no-login a {
  padding: 5px;
}
.member-box {
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
  background: #fff;
  margin: 10px 15px;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
}
.member-info {
  padding: 20px 0;
}
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  border: 3px solid #fff;
  box-shadow: 0 2px 5px #ccc;
  margin-right: 10px;
}
.level-icon {
  width: 78px;
  height: 18px;
  margin-right: 3px;
}
.other-icon {
  width: 20px;
  height: 20px;
  margin-right: 3px;
}
.property {
  padding-bottom: 20px;
}
.property-item {
  width: 20%;
}
.property-item p {
  margin-top: 8px;
}
.barcode-angle {
  transition: all 0.3s ease;
}
.barcode-angle.rotate {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}
.barcode img {
  margin: 0 auto;
  display: block;
  max-width: 100%;
}
.header.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 8;
}
.left-side {
  height: 44px;
}
.right-side {
  height: 44px;
}
.title {
  position: absolute;
  top: 0;
  bottom: 0;
}
.main {
  height: 44px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
/* .tel-enter-to {
  transition: opacity 1s ease;
  opacity: 0;
}
.tel-leave-active {
  transition: opacity 1s ease;
  opacity: 1;
}

.tel-enter {
  opacity: 1;
}

.tel-leave {
  opacity: 0;
} */
</style>

