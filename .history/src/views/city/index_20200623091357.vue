<template>
  <div class="sel">
    <ul class="sel-field">
      <li :class="active=='province'?'active':''" @click="selProvince(),active='province'">省份</li>
      <li :class="active=='city'?'active':''" @click="selCity()">城市</li>
      <li :class="active=='county'?'active':''">县区</li>
    </ul>
    <div class="sel-content">
      <ul>
        <li
          v-for="(item,idx) in currData"
          :key="idx"
          @click="selData(item,currData)"
          :title="item"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { city } from "./city1.js";
export default {
  data() {
    return {
      city: city,
      selDatas: [],
      active: "province",
      currData: [],
      currSel: {},
      currProvince: {},
      notData: false
    };
  },
  mounted() {
    this.currData = this.city["86"];
  },
  methods: {
    selProvince() {
      this.active = "province";
      this.selDatas.length = 0;
      this.currProvince = {};
      this.currSel = {};
      this.notData = false;
      this.currData = this.city["86"];
    },
    selCity() {
      if (this.selDatas.length) {
        this.active = "city";
        this.notData = false;
        this.currSel = this.currProvince;
        this.currData = this.city[this.currProvince.id];
        if (this.selDatas.length >= 2) {
          this.selDatas = [this.currProvince];
        }
      }
    },
    getData(val = "广东省") {
      let city = this.city;
      let currData = this.currData;
    },
    selData(item, key) {
      console.log(key);
      this.currSel = item;
      if (this.notData) return;
      let currData = this.city[item.id];
      if (currData && currData.length) {
        this.selDatas.push(item);
        this.currData = currData;
        if (this.selDatas.length == 1) {
          this.active = "city";
          this.currProvince = item;
        } else if (this.selDatas.length <= 2) {
          this.active = "county";
        }
      } else {
        this.notData = true;
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
  height: auto;

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
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    ul {
      overflow: auto;
      li {
        float: left;
        padding: 10px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li:hover {
        background: #eee;
      }
    }
  }
}
</style>
