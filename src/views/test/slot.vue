<template>
  <div class="slot">
    <slot name="testSlot" :parentName="list"></slot>
  </div>
</template>

<script>
  export default {
    name: "slot",
    data() {
      return {
        list:[123,12,312,4,534,53,4]
      }
    }
  }
</script>

<style scoped>

</style>
