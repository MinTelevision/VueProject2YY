<template>
  <div data-v-71e558b0>
    <div class="home-header home-header-bg" style="height: 94px; width:100%;">
      <div class="header wrapper">
        <div class="search-box flex flex-align-center">
          <a href="/" class="city-sel flex flex-center flex-child-noshrink white">
            <span class="lines-1" style="max-width: 70px;">天河区</span>
            <i class="fa fa-angle-down font-16 ml-5"></i>
          </a>
          <div class="line"></div>
          <router-link
            to="/search"
            href="javascript:;"
            class="search-btn flex flex-align-center flex-child-grow"
          >
            <i class="fa fa-search mr-5 white"></i>
            <span class="lines-1">iPhone XS Max</span>
          </router-link>
        </div>
      </div>
      <div class="tabs relative flex flex-justify-between wrapper">
        <div class="relative tabs-box">
          <div active="0" class="slide-tabs-scroller">
            <div
              class="inline-block overflow-hide"
              style="white-space: nowrap; padding: 0px 5px; height: 40px;"
            >
              <router-link
                :to="`/app/yaya/${index+1}`"
                @click.native="navTab(index)"
                v-for="(n,index) in nav"
                :key="index"
                href="javascript:;"
                class="tabs-item"
                :class="{'cur':page==index}"
              >
                <span class="relative" v-text="n"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 94px; transition: height 0.2s ease 0s;"></div>
  </div>
</template>
  
<script>
export default {
  name: "Gheader",
  data() {
    return {
      nav: ["手机推荐", "电脑办公", "智能穿戴", "数码影音"],
      page: 0
    };
  },
  methods: {
    navTab(index) {
      this.page = index;
    }
  },
  created() {
    this.page = this.$route.params.id - 1;
  }
};
</script>

<style scoped>
.home-header {
  position: fixed;
  top: 0;
  width: 10rem;
  height: 144px;
  transition: all 0.2s ease;
  z-index: 1;
}
.home-header-bg {
  background: #e10f02
    url(//img2.yaya.cn/m/static/assets/bg_M1.8cd016926540b05a490ed176c5d2977a.png)
    no-repeat bottom;
  background-size: cover;
}
.yaya .home-header-bg {
  background: #52c5a9
    url(//img2.yaya.cn/m/static/assets/bg_yaya_M1.5ee5a18d5501316b817eb4d27e0f7a36.png)
    no-repeat bottom;
  background-size: cover;
}
.header {
  height: 44px;
}
.search-box {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  height: 34px;
  padding: 0 15px;
  margin: 14px;
}
.city-sel {
  padding-right: 10px;
}
.line {
  height: 14px;
  width: 2px;
  background: #fff;
  opacity: 0.6;
}
.search-btn {
  height: 100%;
  padding: 0 10px;
}
.search-btn span {
  color: #fff;
  opacity: 0.6;
}
.msg-btn {
  width: 44px;
  height: 44px;
  position: relative;
}
.msg-btn img {
  width: 24px;
  height: 24px;
}
.msg-btn i {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #f21c1c;
  position: absolute;
  right: 5px;
  top: 5px;
  border: 2px solid #fff;
}
.tabs-item.cur {
  font-size: 16px;
  opacity: 1;
}
.tabs {
  height: 40px;
  margin-top: -5px;
}
.tabs-box {
  width: 10rem;
}
.tabs-item {
  font-size: 15px;
  margin: 0 10px;
  display: inline-block;
  transition: all 0.2s ease;
  height: 40px;
  line-height: 40px;
  word-break: break-all;
  color: #fff;
  opacity: 0.8;
}
.tabs-more {
  width: 1rem;
  height: 40px;
  background: #fff;
}
.tabs-item span {
  display: inline-block;
  height: 100%;
}
.tabs-more i {
  transition: all 0.2s ease;
}
.all-tabs {
  background: #fff;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  overflow: hidden;
  -webkit-transform-origin: top;
  transform-origin: top;
}
.all-tabs-item {
  padding: 5px 10px;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
  margin: 5px;
}
.all-tabs-item.cur {
  border-color: #f21c1c;
  color: #f21c1c;
}
.yaya .all-tabs-item.cur {
  border-color: #4fb99f;
  color: #4fb99f;
}
</style>
