<template>
  <div>
    <SLOTS>
      <template #testSlot="data">
        <div>
          <div v-for="(item,idx) in data.parentName" :key="idx">{{item}}</div>
        </div>
      </template>
    </SLOTS>
  </div>
</template>

<script>
  import SLOTS from './slot'

  export default {
    name: "index",
    components:{
      SLOTS
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
