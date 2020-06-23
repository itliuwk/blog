<template>
  <div class="sel">
    <ul class="sel-field">
      <li :class="active=='province'?'active':''" @click="selProvince(),active='province'">省份</li>
      <li :class="active=='city'?'active':''" @click="selCity('city')">城市</li>
      <li :class="active=='county'?'active':''">县区</li>
    </ul>
    <span class="close" @click="$emit('close')">关闭</span>
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
    <!-- <div class="sel-data">{{JSON.stringify(selDatas)}}</div> -->
  </div>
</template>

<script>
import { city } from "./city.js";
//  https://github.com/airyland/china-area-data    省市区数据源
export default {
  data() {
    return {
      city: city,
      selDatas: [],
      active: "province",
      currData: [],
      currSel: {},
      currProvince: "",
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
      this.$emit("change", []);
    },
    selCity(val) {
      if (this.selDatas.length) {
        this.active = "city";
        this.notData = false;
        this.currSel = this.currProvince;
        this.currData = this.getData(this.currProvince);
        if (val === "city") {
          this.currData = this.provinceData;
        }
        if (this.selDatas.length >= 2) {
          this.selDatas = [this.currProvince];
        }
        this.$emit("change", this.selDatas);
      }
    },
    getData(val) {
      let city = this.city;
      let currData = this.currData;
      let code = "84";
      Object.keys(currData).map(item => {
        if (currData[item] == val) {
          code = item;
        }
      });
      return city[code];
    },
    selData(item) {
      this.currSel = item;
      if (this.notData) {
        let selDatas = this.selDatas;
        selDatas.splice(selDatas.length - 1, 1, item);
        this.selDatas = selDatas;
        this.$emit("change", selDatas);
        return;
      }
      let currData = this.getData(item);
      if (JSON.stringify(currData) != "{}" && currData != undefined) {
        this.selDatas.push(item);
        this.currData = currData;
        if (this.selDatas.length == 1) {
          this.active = "city";
          this.currProvince = item;
          this.provinceData = currData;
        } else if (this.selDatas.length <= 2) {
          this.active = "county";
        }
        this.$emit("change", this.selDatas);
      } else {
        this.selDatas.push(item);
        this.$emit("change", this.selDatas);
        this.notData = true;
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.sel {
  background: #fff;
  width: 600px;
  height: auto;
  color: #333;
  display: inline-block;
  z-index: 99;
  position: relative;

  .close {
    position: absolute;
    top: 13px;
    right: 12px;
    font-size: 12px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
  }

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
        font-size: 12px;
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

  .sel-data {
    padding: 10px;
    text-align: center;
  }
}
</style>
