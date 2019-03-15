<template>
  <div class="tab-bar-box">
    <div class="tab-bar wrapper flex flex-align-center border-top">
      <router-link
        :to="f.rout"
        @click.native="tab(index)"
        v-for="(f,index) in footerText"
        :key="index"
        class="tab-bar-item flex flex-col flex-center relative"
        :class="{'font-color':page == index}"
      >
        <img :src="page == index?f.imgurl2:f.imgurl" class="img-text">
        <span class="text font-10 block" v-text="f.text"></span>
      </router-link>
    </div>
  </div>
</template>
<script>
import home from "../assets/home.png";
import fenlei from "../assets/fenlei.png";
import news from "../assets/news.png";
import cart from "../assets/cart.png";
import mine from "../assets/mine.png";
import home2 from "../assets/home2.png";
import fenlei2 from "../assets/fenlei2.png";
import cart2 from "../assets/cart2.png";
import mine2 from "../assets/mine2.png";
export default {
  name: "Gfooter",
  data() {
    return {
      footerText: [
        {
          text: "首页",
          imgurl: home,
          imgurl2: home2,
          rout: "/app/yaya/1"
        },
        {
          text: "分类",
          imgurl: fenlei,
          imgurl2: fenlei2,
          rout: "/app/fenlei"
        },
        {
          text: "消息",
          imgurl: news,
          rout: "/app/news"
        },
        {
          text: "购物车",
          imgurl: cart,
          imgurl2: cart2,
          rout: "/app/cart"
        },
        {
          text: "我的",
          imgurl: mine,
          imgurl2: mine2,
          rout: "/app/mine"
        }
      ],
      page: 0
    };
  },
  methods: {
    tab(index) {
      this.page = index;
    }
  },
  created() {
    if (this.$route.fullPath.indexOf("yaya") != -1) {
      this.page = 0;
    }
    if (this.$route.fullPath.indexOf("fenlei") != -1) {
      this.page = 1;
    }
    if (this.$route.fullPath.indexOf("news") != -1) {
      this.page = 2;
    }
    if (this.$route.fullPath.indexOf("cart") != -1) {
      this.page = 3;
    }
    if (this.$route.fullPath.indexOf("mine") != -1) {
      this.page = 4;
    }
  }
};
</script>
<style scoped>
.tab-bar-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.tab-bar {
  height: 50px;
  background: hsla(0, 0%, 98%, 0.98);
  box-shadow: 0 -1px 2px #ccc;
}
.tab-bar-item {
  width: 20%;
  height: 100%;
}
.img-text {
  height: 24px;
}
.only-img {
  height: 50px;
}
.text {
  margin-top: 5px;
}
.badge {
  position: absolute;
  right: 15px;
  top: 2px;
  padding: 0 4px;
  border-radius: 14px;
  background: #f21c1c;
  color: #fff;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  min-width: 14px;
  box-sizing: border-box;
}
.yaya .badge {
  background: #e73828;
}
.yaya .font-color {
  color: #4fb99f;
}
.font-color {
  color: #c80f1e;
}
</style>
