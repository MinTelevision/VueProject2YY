<template>
  <div class="floor">
      <div id="top-banner-1039463340404863158">
        <div class="mint-swipe banner banner-dot">
          <transition-group tag="div" :name="transitionName" class="mint-swipe-items-wrap" id="bigBox">
            <div
              @touchstart.stop.prevent="touchstart"
              @touchmove.stop.prevent="touchmove"
              @touchend.stop.prevent="touchend"
              v-for="(i,index) in img"
              :key="index+1"
              class="mint-swipe-item box"
              v-show="index==page"
            >
              <a href="javascript:;">
                <img :src="i.imgurl" width height class="lazy-img" loaded="true">
              </a>
            </div>
          </transition-group>
          <div class="mint-swipe-indicators">
            <div
              v-for="(i,index) in img"
              :key="index"
              class="mint-swipe-indicator"
              :class="{'is-active':page==index}"
            ></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";

export default {
  name: "Gbanner",
  data() {
    return {
      img: [
        {
          imgurl: banner1
        },
        {
          imgurl: banner2
        },
        {
          imgurl: banner3
        },
        {
          imgurl: banner4
        },
        {
          imgurl: banner5
        },
        {
          imgurl: banner6
        }
      ],
      transitionName:'list',
      page: 0,
      timer: "",
      startPointX: 0,
      changePointX: 0,
      leftSlide: 0,
      boxWidth: 0,
      box: null
    };
  },
  methods: {
    autoplay() {
      if (this.page == this.img.length) {
        this.page = 0;
      }else if(this.page<0){
        this.page = this.img.length-1;
      }
    },
    go() {
      this.timer = setInterval(() => {
        this.page++;
        this.autoplay();
      }, 2000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    touchstart(e) {
      this.stop();
      this.startPointX = e.changedTouches[0].pageX;
      this.box = document.querySelectorAll(".box");
      this.boxWidth = this.box[0].offsetWidth;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      this.leftSlide = this.startPointX - currPointX;
    },
    touchend() {
      this.go();
      if (this.leftSlide > this.boxWidth / 3) {
        this.transitionName ='list';
        this.page++;
        this.autoplay();
      }else if(-this.leftSlide > this.boxWidth / 3){
        this.transitionName ='list2';
        this.page--;
        this.autoplay();
      }
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.page++;
      this.autoplay()
    }, 2000);
  }
};
</script>

<style type="text/css" >
.yaya .banner {
  background: linear-gradient(#52c5a9, #52c5a9 70%, #fff 0, #fff);
}
.banner a,
.banner a img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.floor-news-banner {
  width: 10rem;
  height: 5rem;
  position: relative;
}
.news-banner-indicator {
  position: absolute;
  right: 10px;
  bottom: 0;
  height: 40px;
}
.news-banner-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  display: block;
  background: hsla(0, 0%, 100%, 0.8);
  margin: 0 2px;
}
.news-banner-indicator span.cur {
  background: #ff6700;
}
.floor-news-banner a {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
}
.news-banner-item p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
}
.big-pic {
  position: relative;
  width: 10rem;
  height: 5rem;
  background-size: cover;
}
.news-big-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
}
.news-picture {
  width: 80px;
  height: 60px;
  background-size: cover;
  background-position: 50%;
}
.media-mask {
  width: 100%;
  height: 100%;
}
.mint-swipe,
.mint-swipe-items-wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
 
}
.mint-swipe-items-wrap > div {
  position: absolute;
  /* transform: translateX(100%); */
  width: 100%;
  height: 100%;
  /* display: none; */
}
.banner {
  width: 100%;
  height: 5.4rem;
  padding: 14px;
  box-sizing: border-box;
  background: linear-gradient(#e10f02, #e10f02 70%, #fff 0, #fff);
}
/* .mint-swipe-items-wrap > div.is-active {
  display: block;
  
} */
.mint-swipe-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.mint-swipe-indicator {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
  margin: 0 3px;
}
.mint-swipe-indicator.is-active {
  background: #fff;
}
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-110%);
}

.list-enter {
  transform: translateX(110%);
}

.list-leave {
  transform: translateX(0);
}
.list2-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list2-leave-active {
  transition: all 1s ease;
  transform: translateX(110%);
}

.list2-enter {
  transform: translateX(-110%);
}

.list2-leave {
  transform: translateX(0);
}
</style>

