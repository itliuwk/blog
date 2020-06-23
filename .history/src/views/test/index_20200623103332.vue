<template>
  <div>
    <!-- <SLOTS>
      <template #testSlot="data">
        <div>
          <div v-for="(item,idx) in data.parentName" :key="idx">{{item}}</div>
        </div>
      </template>
    </SLOTS>-->
    <div>
      <el-input v-model="val"></el-input>
      <City v-if='isCity'></City>
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
  filters: {
    filterLsit(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
</style>
