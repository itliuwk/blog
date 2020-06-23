<template>
  <div>
    <SLOTS>
      <template #testSlot="data">
        <div>
          <div v-for="(item,idx) in data.parentName" :key="idx">{{item}}</div>
        </div>
      </template>
    </SLOTS>
    <div>
      <City></City>
    </div>
  </div>
</template>

<script>
  import SLOTS from './slot'
  import City from '../city/index'

  export default {
    name: "index",
    components:{
      SLOTS,
      City
    },
    filters:{
      filterLsit(val){
        console.log(val);
      }
    }
  }
</script>

<style scoped>

</style>
