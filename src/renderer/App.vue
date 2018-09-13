<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'mtg-upkeep'
  };
</script>

<style>
  /* CSS */
</style>
