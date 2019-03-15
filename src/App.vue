<template>
  <div id="app" class="app-wrap">
    <Gloading/>
    <router-view></router-view>
    <Gfooter/>
  </div>
</template>

<script>
import Gloading from "./components/Gloading.vue"
import Gfooter from "./components/Gfooter.vue"
import "./assets/css/total.css"

export default {
  name: "app",
  components: {
    Gloading,
    Gfooter
  }
};

</script>

<style>

</style>
