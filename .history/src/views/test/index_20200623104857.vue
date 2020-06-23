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
      <p @click="selCity($event)">{{selData?selData:'选择城市'}}</p>
      <City v-if="isCity" class="city" ref="citySel" @change="cityChange"></City>
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
      isCity: false,
      selData: ""
    };
  },
  components: {
    SLOTS,
    City
  },
  methods: {
    selCity(e) {
      this.isCity = true;
      console.log(e);
      console.log( this.$refs.citySel)
      this.$refs['citySel'].style=`top:${e.x}px,left:${e.y}px`
    },
    cityChange(val) {
      console.log(val);
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
  p {
    text-align: center;
  }

  .city {
    position: relative;
  }
}
</style>
