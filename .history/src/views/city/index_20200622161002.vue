<template>
  <div class="sel">
    <ul class="sel-field">
      <li :class="active=='province'?'active':''" @click="selProvince(),active='province'">省份</li>
      <li :class="active=='city'?'active':''" @click="selCity()">城市</li>
      <li :class="active=='county'?'active':''" @click="selCounty()">县区</li>
    </ul>
    <div class="sel-content">
      <ul>
        <li v-for="(item,idx) in currData" :key="idx" @click="selData(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { city } from "./city.js";
export default {
  data() {
    return {
      city: city,
      sels: [],
      active: "province",
      currData: [] || city["-1"]
    };
  },
  mounted() {
    this.currData = this.city["-1"];
  },
  methods: {
    selProvince() {},
    selCity() {},
    selCounty() {},
    selData(item) {
      let currData = this.city[item.id];
      if (currData && currData.length) {
        this.sels.push(item);
        this.currData = currData;
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.sel {
  margin: 100px auto;
  background: #fff;
  width: 600px;
  height: 400px;

  .sel-field {
    border-bottom: 1px solid #eee;
    width: 100%;
    overflow: hidden;
    li {
      width: 80px;
      float: left;
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      border: 1px solid #eee;
    }

    li.active {
      border-bottom: none;
      background: #eee;
    }
  }

  .sel-content {
    width: 100%;
    height: calc(100% - 40px);
    padding: 20px;
    box-sizing: border-box;
    ul {
      li {
        float: left;
        padding: 15px;
        cursor: pointer;
      }
      li:hover {
        background: #eee;
      }
    }
  }
}
</style>
