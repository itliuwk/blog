<template>
  <div class="page">
    　<p v-color>12312asdsad</p>

  </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {}
        },
        directives: {
            color:{
                inserted(el){
                    el.style.color = '#666'
                }
            }
        },
        mounted() {

        },
        methods: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
