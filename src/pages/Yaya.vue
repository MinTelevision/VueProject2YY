<template>
  <div>
    <Gheader/>
    <Gbanner/>
    <Gpanel/>
  </div>
</template>
<script>
import Gheader from "../components/Gheader.vue";
import Gbanner from "../components/Gbanner.vue";
import Gpanel from "../components/Gpanel.vue";
export default {
  name: "Yaya",
  components: {
    Gheader,
    Gbanner,
    Gpanel
  }
};
</script>