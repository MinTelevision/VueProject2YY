<template>
  <div>
    <div class="page-starter" v-show="loadingStatus">
      <img
        class="logo"
        src="../assets/loading.png"
      >
      <div class="loader">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style="enable-background:new 0 0 50 50"
          xml:space="preserve"
        >
          <rect x="0" y="13" width="4" height="5" fill="#f21c1c">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0s"
              dur=".8s"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0s"
              dur=".8s"
              repeatCount="indefinite"
            ></animate>
          </rect>
          <rect x="10" y="13" width="4" height="5" fill="#f21c1c">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0.15s"
              dur=".8s"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0.15s"
              dur=".8s"
              repeatCount="indefinite"
            ></animate>
          </rect>
          <rect x="20" y="13" width="4" height="5" fill="#f21c1c">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0.3s"
              dur=".8s"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0.3s"
              dur=".8s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </svg>
      </div>
    </div>
    <div class="mint-indicator" v-show="loadStatus">
      <div class="mint-indicator-wrapper" style="padding: 15px;">
        <span class="mint-indicator-spin">
          <div
            class="mint-spinner-snake"
            style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;"
          ></div>
        </span>
        <span class="mint-indicator-text" style="display: none;"></span>
      </div>
      <div class="mint-indicator-mask"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Gloading",
  computed: {
    ...mapState({
      loadingStatus: state => state.loadingStatus,
      loadStatus: state => state.loadStatus
    })
  }
};
</script>
<style scoped>
.page-starter {
  background: #f0f0f0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20000;
}
.page-starter .logo {
  margin: 120px auto 20px;
  display: block;
  border-radius: 10px;
}
svg {
  x: 0px;
  y: 0px;
  width: 24px;
  height: 30px;
}
img {
  width: 90px;
  height: 40px;
}
.loader {
  margin: 40px auto;
  width: 24px;
}
.mint-indicator {
  transition: opacity 0.2s linear;
}
.mint-indicator-wrapper {
  top: 50%;
  left: 50%;
  position: fixed;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
}
.mint-indicator-text {
  display: block;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
}
.mint-indicator-spin {
  display: inline-block;
  text-align: center;
}
.mint-indicator-mask {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: transparent;
}
.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
.mint-spinner-snake {
  animation: mint-spinner-rotate 0.8s infinite linear;
  border: 4px solid transparent;
  border-radius: 50%;
}
.mint-spinner-snake {
  -webkit-animation: mint-spinner-rotate 0.8s infinite linear;
  animation: mint-spinner-rotate 0.8s infinite linear;
  border: 4px solid transparent;
  border-radius: 50%;
}
@keyframes mint-spinner-rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>
