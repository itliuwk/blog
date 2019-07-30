<template>
  <div id="app">
    <home></home>
    <div class="routerView">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import home from '@/components/index'

  export default {
    name: 'App',
    components: {
      home
    }
  }
</script>

<style>
  .routerView {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }
</style>
