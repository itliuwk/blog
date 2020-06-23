<template>
  <div>
    <!-- <SLOTS>
      <template #testSlot="data">
        <div>
          <div v-for="(item,idx) in data.parentName" :key="idx">{{item}}</div>
        </div>
      </template>
    </SLOTS>-->
    <div class="box">
      <span @click="selCity($event)">选择城市</span>
      <City v-if="isCity"></City>
    </div>
  </div>
</template>

<script>
import SLOTS from "./slot";
import City from "../city/index";

export default {
  name: "index",
  data() {
    return {
      val: "",
      isCity: false
    };
  },
  components: {
    SLOTS,
    City
  },
  methods: {
    selCity(val) {
      console.log(e);
    }
  },
  filters: {
    filterLsit(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped  rel="stylesheet/scss" lang="scss">
.box {
  background: #000;
  margin: 50px 0;
  color: #fff;
}
</style>
