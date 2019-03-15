<template>
  <div class="app-wrap" style="margin-bottom:50px;">
    <div class="wrapper grey-f-bg full-height">
      <div class="flex-child-noshrink">
        <div style="height: 44px; transition: height 0.2s ease 0s;"></div>
        <header class="header fixed">
          <div class="wrapper">
            <div
              class="main flex flex-justify-between relative"
              style="background-color: rgba(0, 0, 0, 0); background-image: url(&quot;//img2.ch999img.com/pic/topic/2018091809055194.png&quot;);"
            >
              <div class="left-side">
                <a
                  href="javascript:history.back();"
                  class="back-button flex flex-center"
                  style="color: rgb(255, 255, 255); padding-left: 0px;"
                >
                  <i class="fa fa-angle-left font-30"></i>
                  <span class="back-text font-16"></span>
                </a>
              </div>
              <div class="title flex flex-center" style="left: 44px; right: 44px;">
                <h3 class="white font-18 normal" style="opacity: 1;">购物车</h3>
              </div>
              <div class="right-side flex flex-center">
                <a href="javascript:" class="full-height padding-right flex flex-center white">
                  <span>编辑</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div
        class="bg"
        style="background-image: url(&quot;//img2.ch999img.com/pic/topic/2018091809055194.png&quot;);"
      ></div>
      <div class="bg-card">
        <p class="font-13" style="line-height: 18px;">
          共
          <span v-text="totalNum"></span>件商品
        </p>
      </div>

      <div class="cart">
        <!-- ====================订单========================= -->
        <div
          class="cart-item border-top border-bottom white-bg"
          v-for="(i,index) in cartList"
          :key="index"
        >
          <div class="product">
            <div class="product-item">
              <div class="flex flex-between relative">
                <span
                  @click="check($event)"
                  class="checkbox product-checkbox"
                  :class="{'checked':ischecked}"
                  :style="{'border-color':ischecked, 'background':ischecked}"
                ></span>
                <router-link
                  :to="`/detail?guid=${i.guid}`"
                  href="javascript:;"
                  class="product-img flex-child-noshrink"
                >
                  <img :src="i.imgurl" class="full-width full-height">
                </router-link>
                <div
                  class="product-info margin-left flex flex-col flex-justify-between flex-child-grow"
                >
                  <p class="lines-2" v-text="`${i.name} ${i.function}`"></p>
                  <p v-text="i.color"></p>
                  <div class="flex flex-justify-between flex-align-center">
                    <div>
                      <p class="red" v-text="i.price"></p>
                    </div>
                    <div class="edit-count flex border-left border-bottom">
                      <a
                        @click="reduceNum(i.guid,index)"
                        href="javascript:"
                        class="border-top border-right"
                        :class="{'disable':i.num==1}"
                      >-</a>
                      <span class="border-top border-right" v-text="i.num"></span>
                      <a
                        @click="addNum(i.guid,index)"
                        href="javascript:"
                        class="border-top border-right"
                      >+</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <img src="https://img2.yaya.cn/newstatic/767/3174479e1a14d5.png" class="full-width">
        <ul class="flex flex-justify-between flex-wrap mt-5">
          <!-- ================================推荐============================== -->
          <li class="recommend-item" v-for="(j,index) in tuijian" :key="index">
            <router-link :to="`/detail?guid=${j.guid}`" href="javascript:;">
              <img :src="j.imgurl">
            </router-link>
            <p class="lines-1 mt-5 recommend-name" v-text="j.name"></p>
            <div class="flex flex-justify-between flex-align-center mt-5">
              <span class="red font-16" v-text="j.price"></span>
              <a href="javascript:">
                <i class="fa fa-shopping-cart font-20"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div style="height: 50px;"></div>
      <div class="cart-total">
        <div class="wrapper flex flex-justify-between flex-align-center border-top">
          <div class="flex flex-center margin-left flex-child-noshrink">
            <span
              class="checkbox"
              style="border-color: rgb(79, 185, 159);"
            ></span>
            <span style="margin-left: 5px;">全选</span>
          </div>
          <div class="total-price flex flex-col flex-justify-center flex-align-end">
            <p>
              合计
              ：
              <span class="red" v-text="`￥${totalMoney}.00`"></span>
            </p>
            <p class="grey-9" v-text="`${totalNum}件商品`"></p>
          </div>

          <a href="javascript:" class="settlement white flex-child-noshrink main-bgcolor">去结算</a>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { ServerUrl } from "../configs/ServerUrl";
import $ from "jquery";
export default {
  name: "Cart",
  data() {
    return {
      guidList: [], //购物车数据渲染
      tuijian: [], //用户推荐页渲染
      cartList: [],
      totalNum: 0,
      totalMoney: 0,
      ischecked: false
    };
  },
  methods: {
    addNum(guid, index) {
      this.cartList[index].num++;
      this.editCartNum(guid, 1);
      location.reload();
    },
    reduceNum(guid, index) {
      this.cartList[index].num--;
      if (this.cartList[index].num <= 0) {
        this.cartList[index].num = 1;
      } else {
        this.editCartNum(guid, -1);
      }
      location.reload();
    },
    check(index) {
      this.ischecked = index;
    },
    //通过token查找用户购买数量和用户名和商品id(guid)
    findCart() {
      return new Promise(function(resolve) {
        $.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/findCart",
          async: true,
          data: {
            token: window.localStorage.token
          },
          success: function(str) {
            //成功回调
            resolve(str.data);
          }
        });
      });
    },

    //通过商品id(guid)渲染
    getuserCart(guid) {
      return new Promise(function(resolve) {
        $.ajax({
          type: "get", //请求方式
          url: ServerUrl + "/goodlist/guid", //接口路径
          async: true, //异步
          data: {
            guid
          },
          success: function(str) {
            resolve(str.data);
          }
        });
      });
    },
    editCartNum(guid, num) {
      return new Promise(resolve => {
        this.$.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/insertorder",
          data: {
            guid,
            num,
            token: localStorage.getItem("token")
          },
          success(data) {
            resolve(data.data);
          }
        });
      });
    },
    //推荐页渲染  !!次要!!
    getData() {
      return new Promise(resolve => {
        this.$.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/type",
          data: {
            type: "phone"
          },
          success(data) {
            resolve(data.data);
          }
        });
      });
    },
    autoLogin() {
      return new Promise(resolve => {
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
  async created() {
    this.$store.commit("editLoad", true);
    let isdenglu = await this.autoLogin();
    if (isdenglu.status) {
      this.guidList = await this.findCart(); //购物车数据第一次获取guid,用户名,num.
      // console.log()
      //遍历Cartlist[]拿到用户购买的所有商品guid赋值给cartid[].
      for (let k = 0; k < this.guidList.length; k++) {
        let good = await this.getuserCart(this.guidList[k].guid);
        this.totalNum += parseInt(this.guidList[k].num);
        this.totalMoney +=
          this.guidList[k].num * parseInt(good[0].price.slice(1));
        this.guidList[k].imgurl = good[0].imgurl;
        this.guidList[k].name = good[0].name;
        this.guidList[k].function = good[0].function;
        this.guidList[k].price = good[0].price;
        this.guidList[k].color = good[0].color;
      }
      this.cartList = this.guidList;
      this.tuijian = await this.getData(); //推荐页数据获取 !!次要!!
      this.Cartlist ? this.$store.commit("editLoad", false) : null;
    }else{
      isdenglu ? this.$store.commit("editLoad", false) : null;
    }
  }
};
</script> 
<style >
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
  transition: all 0.3s ease-in-out;
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
.login-tips {
  background: #e9ecf4;
  color: #78b;
  height: 36px;
}
.login-tips a {
  color: #78b;
  border: 1px solid #78b;
  padding: 4px 6px;
  border-radius: 3px;
  margin-left: 10px;
}
.nothing {
  padding: 20px 0;
  background: #fff;
}
.nothing i {
  font-size: 48px;
  color: #ccc;
}
.nothing p {
  margin: 20px 0;
}
.nothing a {
  display: block;
  width: 70px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border: 1px solid #333;
  border-radius: 3px;
}
.cart-item {
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  margin: 0 14px 15px;
}
.group-title {
  min-height: 40px;
  padding: 0 10px;
}
.group-tag {
  border: 1px solid #f21c1c;
  color: #f21c1c;
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 3px;
}
.group-link {
  margin-left: 5px;
  color: #78b;
}
.product {
  margin-left: 40px;
  margin-right: 10px;
}
.product-item {
  padding: 10px 0;
}
.product-checkbox {
  position: absolute !important;
  top: 24px;
  left: -30px;
}
.product-img {
  width: 70px;
  height: 70px;
  border: 1px solid #dfdfdf;
  position: relative;
}
.old-machine-tag {
  padding: 1px 2px;
  border-radius: 3px;
  font-size: 12px;
}
.invalid {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}
.edit-count a {
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
}
.edit-count a.disable {
  color: #ccc;
}
.edit-count span {
  height: 24px;
  line-height: 24px;
  text-align: center;
  width: 30px;
}
.seven-day {
  color: #78b;
}
.seven-day .seven-icon {
  font-size: 10px;
  width: 12px;
  height: 12px;
  line-height: 12px;
  margin-right: 5px;
  border: 1px solid #7597dc;
  color: #7597dc;
  display: block;
  border-radius: 3px;
  text-align: center;
}
.service-btn {
  margin-top: 10px;
}
.service-btn a {
  border: 1px solid #dfdfdf;
  padding: 0 5px;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 10px;
  height: 24px;
}
.service-btn a img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.bind-item {
  line-height: 1.2;
}
.bind-item dl {
  margin-top: 5px;
}
.bind-item dl:first-child {
  margin-top: 10px;
}
.bind-item dt {
  width: 36px;
}
.bind-item dl:first-child dt span {
  display: block;
}
.gift-item {
  margin-top: 5px;
}
.gift-item:first-child {
  margin-top: 0;
}
.cart-total {
  position: fixed;
  left: 0;
  width: 100%;
  height: 50px;
  bottom: 50px;
  background: #fff;
}
.settlement {
  height: 50px;
  width: 100px;
  text-align: center;
  line-height: 50px;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.buy-service {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 11;
}
.buy-service .wrapper {
  position: absolute;
  top: 80px;
  width: 100%;
  bottom: 0;
}
.buy-service h4,
.close-service {
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.close-service {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  display: block;
}
.service-list {
  margin: 10px;
}
.service-list dd {
  margin-top: 10px;
}
.service-list dd a {
  font-size: 12px;
  height: 25px;
  padding: 0 10px;
  line-height: 25px;
  border: 1px solid #dfdfdf;
  display: inline-block;
  border-radius: 5px;
  margin: 0 10px 5px 0;
}
.service-list dd a.cur {
  border-color: #f21c1c;
  color: #f21c1c;
}
.service-confirm {
  margin-top: 20px;
  display: block;
  width: 100%;
  height: 45px;
  background: #f21c1c;
  color: #fff;
  line-height: 45px;
  text-align: center;
}
.greeting-card-from,
.greeting-card-title,
.greeting-card-to,
.packing-item {
  height: 40px;
  padding: 0 10px;
}
.greeting-card-to input {
  height: 100%;
  border: 0;
  background: none;
}
.greeting-content {
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  border: 0;
  height: 160px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoAQMAAAAFeAI0AAAABlBMVEUAAADu7u6BVFV4AAAAAXRSTlMAQObYZgAAAAxJREFUCNdjoC5oAAAA0ACB9zOkNgAAAABJRU5ErkJggg==)
    repeat;
}
.greeting-card-from input {
  width: 70px;
  height: 100%;
  border: 0;
  background: none;
}
.anonymous-tips {
  font-size: 12px;
  background: #fcf4f5;
  color: #fbc6cc;
  padding: 6px;
  border-radius: 3px;
  position: relative;
  margin-right: 10px;
}
.anonymous-tips:after {
  content: "";
  width: 6px;
  height: 6px;
  background: #fcf4f5;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: -3px;
  top: 50%;
  margin-top: -3px;
}
.recommend-product {
  position: absolute;
  top: -30px;
  left: 10px;
  right: 10px;
}
.recommend-product img {
  width: 90px;
  height: 90px;
  border: 1px solid #dfdfdf;
}
.recommend-box {
  position: absolute;
  top: 80px;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 20px;
  overflow: auto;
}
.recommend-sku a {
  padding: 6px 10px;
  border: 1px solid #dfdfdf;
  display: inline-block;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.recommend-sku a.cur {
  color: #f21c1c;
  border-color: #f21c1c;
}
.recommend-add-cart {
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: 0;
  border-radius: 3px;
}
.yaya .group-tag,
.yaya .service-list dd a.cur {
  color: #4fb99f;
  border-color: #4fb99f;
}
.yaya .service-confirm {
  background: #4fb99f;
}
.yaya .recommend-sku a.cur {
  color: #4fb99f;
  border-color: #4fb99f;
}
.bg {
  background-size: cover;
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: top;
}
.bg-card {
  height: 1.6rem;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.bg-card h2 {
  font-size: 18px;
  line-height: 20px;
}
.checkbox {
  display: inline-block;
  border: 1px solid #ccc;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: relative;
}
.checkbox.disabled {
  opacity: 0.5;
}
.checkbox.checked:after {
  content: "";
  display: block;
  width: 10px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: 5px auto;
}
.recommend {
  padding: 0 14px;
}
.recommend-item {
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
}
.recommend ul li {
  width: 4.5rem;
  background: #fff;
  margin-bottom: 0.2rem;
  box-sizing: border-box;
  padding: 0 10px 10px;
}
.recommend ul li img {
  width: 100%;
}
</style>
