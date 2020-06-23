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
      <p @click="selCity($event)" id="currEl">{{selData?selData:'选择城市'}}</p>
      <div class="city" ref="citySel">
        <City v-if="isCity" @change="cityChange" @close="cityClose"></City>
      </div>
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
      let currEl = document.querySelector("#currEl");
      console.log(currEl)
      this.isCity = true;
      this.$refs["citySel"].style.top = `${currEl.offsetTop}px`;
      this.$refs["citySel"].style.left = `${currEl.offsetLeft}px`;
    },
    cityClose() {
      this.isCity = false;
    },
    cityChange(val) {
      this.selData = val.toString();
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
    display: inline-block;
    position: fixed;
    z-index: 99;
  }
}
</style>
