<template>
  <Navbar/>
  <slot/>
</template>
<script setup lang="ts">
import Navbar from "../components/ordinary/Navbar.vue";
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>