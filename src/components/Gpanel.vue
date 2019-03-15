<template>
  <div>
    <div class="floor">
      <div class="floor-picture flex flex-justify-between">
        <a v-for="(i,index) in img" :key="index" href="javascript:;" class="block style7">
          <img :src="i.imgurl" width height class="lazy-img" loaded="true">
        </a>
      </div>
    </div>
    <div class="floor-tops flex flex-align-center flex-justify-between">
      <img
        src="//img2.yaya.cn/m/static/assets/news-yaya.99199d98b7d678f8666ff3794f55e550.png"
        class="tops-icon flex-child-noshrink"
      >
      <div class="overflow-hide tops-marquee flex-child-grow">
        <transition-group name="list" tag="div" class="roll">
          <a
            href="javascript:;"
            class="tops-item flex flex-justify-between flex-align-center"
            v-for="(b,index) in banner"
            :key="index+1"
            v-show="index==page"
          >
            <span class="flex-child-grow lines-1" v-text="b.text"></span>
            <div class="relative">
              <img :src="b.imgurl" width height class="lazy-img flex-child-noshrink" loaded="true">
              <div class="tops-mask"></div>
            </div>
          </a>
        </transition-group>
      </div>
    </div>
    <div class="floor">
      <div class="floor-product flex flex-justify-between flex-wrap padding-top" style>
        <router-link
          :to="`/detail?guid=${i.guid}`"
          v-for="(i,index) in list"
          :key="index"
          href="javascript:;"
          class="product-item flex flex-col flex-justify-between"
        >
          <img :src="i.imgurl" mode="widthFix" class="product-img">
          <img src="../assets/hot.png" mode="widthFix" class="promotion-tag">
          <div class="promotion font-13">
            <span class="lines-1" v-text="i.function"></span>
          </div>
          <div>
            <div class="title lines-1" v-text="i.name"></div>
            <div class="price flex flex-justify-between flex-align-center">
              <span class="red font-15" v-text="i.price"></span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { ServerUrl } from "../configs/ServerUrl.js";
import youpin from "../assets/youpin.jpg";
import julebu from "../assets/julebu.jpg";
import zixun from "../assets/zixun.jpg";
import mendian from "../assets/mendian.jpg";
import faxian from "../assets/faxian.jpg";
export default {
  name: "Gpanel",
  methods: {
    autoplay() {
      if (this.page == this.banner.length) {
        this.page = 0;
      } else if (this.page < 0) {
        this.page = this.banner.length - 1;
      }
    },
    chashouji() {
      let n = this;
      return new Promise(function(resolve) {
        $.ajax({
          type: "get", //请求方式
          url: ServerUrl + "/goodlist/type", //接口路径
          async: true, //异步
          data: {
            type: n.type
          },
          success: function(str) {
            //成功回调
            resolve(str.data);
          }
        });
      });
    },
    async getData() {
      this.$store.commit("editLoad", true);
      var abc = await this.chashouji();
      abc ? this.$store.commit("editLoad", false) : null;
      this.list = abc;
    }
  },
  data() {
    return {
      list: [],
      banner: [
        {
          text: "华为EMUI9.0上线了SOS紧急求助功能",
          imgurl: ServerUrl + "/images/minBanner/1.png"
        },
        {
          text: "1499元起 新品华为畅享正式发布！",
          imgurl: ServerUrl + "/images/minBanner/2.png"
        },
        {
          text: "现货2000台/iPhoneXS ￥8690比官网低？",
          imgurl: ServerUrl + "/images/minBanner/3.png"
        },
        {
          text: "【福利】新iPhone正式亮相，来丫丫网 不用卖肾",
          imgurl: ServerUrl + "/images/minBanner/4.png"
        },
        {
          text: "荣耀Note10续航对比测试 15%电量开了挂吃鸡啦！",
          imgurl: ServerUrl + "/images/minBanner/5.png"
        }
      ],
      img: [
        {
          imgurl: youpin
        },
        {
          imgurl: julebu
        },
        {
          imgurl: zixun
        },
        {
          imgurl: mendian
        },
        {
          imgurl: faxian
        }
      ],
      type: "phone",
      page: 0
    };
  },
  computed: {
    tab() {
      return this.$route.params.id;
    }
  },
  watch: {
    tab() {
      switch (this.tab) {
        case "1":
          this.type = "phone";
          this.getData();
          break;
        case "2":
          this.type = "computer";
          this.getData();
          break;
        case "3":
          this.type = "watch";
          this.getData();
          break;
        case "4":
          this.type = "earphone";
          this.getData();
          break;
      }
    }
  },
  created() {
    this.getData();
    this.timer = setInterval(() => {
      this.page++;
      this.autoplay();
    }, 2000);
  }
};
</script>

<style scoped>
.floor-picture {
  background: #fff;
}
.floor-picture a img {
  width: 100%;
  height: 100%;
}
.floor-picture a.style1 {
  width: 5rem;
  height: 1.667rem;
}
.floor-picture a.style2 {
  width: 2.5rem;
  height: 3.333rem;
}
.floor-picture a.style3 {
  width: 10rem;
  height: 2.7rem;
}
.floor-picture a.style4 {
  width: 5rem;
  height: 3.333rem;
}
.floor-picture a.style5 {
  width: 2.5rem;
  height: 3.333rem;
}
.floor-picture a.style5:last-child {
  width: 5rem;
  height: 3.333rem;
}
.floor-picture a.style6 {
  width: 2.5rem;
  height: 3.333rem;
}
.floor-picture a.style6:first-child {
  width: 5rem;
  height: 3.333rem;
}
.floor-picture a.style7 {
  width: 2rem;
  height: 2rem;
}
.floor-picture a.style8 {
  width: 10rem;
  height: 1.17333rem;
}
.floor-picture a.style9 {
  width: 10rem;
  height: 5rem;
}
.floor-picture a.style10 {
  width: 2.67rem;
  height: 2.67rem;
}
.floor-picture .style12.big {
  width: 49%;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.floor-picture .style12.small {
  width: 23.5%;
  box-sizing: border-box;
}
.floor-picture .style12 img {
  width: 100%;
}
.floor-picture .style13 .item {
  width: 50%;
}
.floor-picture .style13 .item:nth-child(odd) {
  padding-right: 4px;
}
.floor-picture .style13 .item:nth-child(2n) {
  padding-left: 4px;
}
.floor-picture .style13 .super {
  display: block;
}
.floor-picture .style13 .big {
  margin-bottom: 8px;
}
.floor-picture .style13 .small:nth-child(odd) {
  padding-right: 4px;
}
.floor-picture .style13 .small:nth-child(2n) {
  padding-left: 4px;
}
.floor-picture .style13 img {
  width: 100%;
}
.floor-picture .style14 {
  width: 50%;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.floor-picture .style14 img {
  width: 100%;
}
.floor-picture .style14:nth-child(odd) {
  padding-right: 4px;
}
.floor-picture .style14:nth-child(2n) {
  padding-left: 4px;
}
.margin-ad {
  margin: 10px;
}
.radius {
  border-radius: 5px;
}
.floor-tops {
  height: 34px;
  margin: 10px;
  background: #fde9e9;
  border-radius: 50px;
  overflow: hidden;
}
.tops-icon {
  width: 68px;
  margin: 0 12px;
}
.tops-marquee {
  height: 34px;
}
.roll {
  position: relative;
  overflow: hidden;
  height: 34px;
}
.tops-item {
  position: absolute;
  height: 34px;
  overflow: hidden;
}
.tops-tag {
  border: 1px solid #f21c1c;
  color: #f21c1c;
  font-size: 10px;
  border-radius: 3px;
  padding: 2px;
}
.tops-item img {
  height: 34px;
  display: block;
}
.tops-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: linear-gradient(90deg, #fde9e9, hsla(0, 0%, 100%, 0));
}
.floor-product {
  padding: 0 10px;
}
.product-item {
  width: 4.6rem;
  background: #fff;
  margin-top: 0.3rem;
  padding-bottom: 10px;
  position: relative;
  box-shadow: 0 1px 10px #e1e1e1;
  border-radius: 3px;
}
.product-item .product-img {
  width: 4rem;
  height: 4rem;
  display: block;
  margin: 10px auto;
}
.product-item .promotion-tag {
  position: absolute;
  left: 0;
  top: 3.7rem;
  width: 1.2rem;
}
.product-item .promotion {
  background: #ebf6fe;
  color: #87acd8;
  padding: 5px 15px;
}
.product-item .title {
  margin: 5px 15px;
}
.product-item .price {
  margin: 5px 15px 0;
}
.list-enter-to {
  transition: all 1s ease;
  transform: translateY(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateY(-100%);
}

.list-enter {
  transform: translateY(100%);
}

.list-leave {
  transform: translateY(0);
}
.title {
    position: static;

  }
</style>
