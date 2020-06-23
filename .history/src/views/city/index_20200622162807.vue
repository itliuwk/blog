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
      selDatas: [],
      active: "province",
      currData: [],
      currSel: {}
    };
  },
  mounted() {
    this.currData = this.city["-1"];
  },
  methods: {
    selProvince() {
      this.active = "province";
      this.selDatas.length = 0;
      this.currData = this.city["-1"];
    },
    selCity() {
      if (this.selDatas.length == 1) {
        this.active = "city";
        this.currData = this.city[this.currSel.id];
      }
    },
    selCounty() {
      if (this.selDatas.length == 2) {
        this.active = "county";
        this.currData = this.city[this.currSel.id];
      }
    },
    selData(item) {
      let currData = this.city[item.id];
      this.currSel = item;
      if (currData && currData.length) {
        this.selDatas.push(item);
      }
      this.selCity();
      this.selCounty();
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
