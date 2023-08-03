<template>
  <Navbar/>
  <slot/>
</template>
<script setup lang="ts">
import Navbar from "../components/ordinary/Navbar.vue";
</script>

<style lang="scss">
@import "../scss/default.scss";
</style>