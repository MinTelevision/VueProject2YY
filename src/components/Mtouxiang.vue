<template>
  <div class="wrapper">
    <div class="tx-touxiang">
      <img :src="touxiang">
    </div>
    <div @click="selecttx" id="update-touxiang">更换头像</div>
    <input @change="upload($event)" ref="img" id="vip-file" style="display:none;" type="file">
  </div>
</template>
<script>
import { ServerUrl } from "../configs/ServerUrl.js";
export default {
  name: "Mtouxiang",
  data() {
    return {
      touxiang: ""
    };
  },
  methods: {
    selecttx() {
      this.$refs.img.click();
    },
    upload(e) {
      let m = this;
      let imgData = new FormData("touxiang", e.target.files[0]);
      imgData.append("touxiang", e.target.files[0]);
      this.$.ajax({
        type: "post",
        url: ServerUrl + "/users/upload",
        cache: false,
        data: imgData,
        processData: false,
        contentType: false,
        success(data) {
          e.target.value = null;
          m.touxiang = ServerUrl + "/" + data.file.filename;
        }
      });
    }
  }
};
</script>
<style scoped>
.tx-touxiang {
  width: 130px;
  height: 130px;
  margin: 25px auto;
  overflow: hidden;
  border-radius: 100%;
  border: 7px solid #c2e6ff;
}
.tx-touxiang img {
  width: 100%;
  height: 100%;
}
#update-touxiang {
  width: 120px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  border-radius: 3px;
  text-align: center;
  background: #3caaff;
  color: #fff;
  cursor: pointer;
}
</style>


