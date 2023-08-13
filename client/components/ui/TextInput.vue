<template>
  <input
    :value="value"
    @input="$emit('update:value', 
    //@ts-ignore
    $event.target.value)"
    class="focus:drop-shadow-violet bg-dark transition hover:bg-cviolet-600/10 focus:border-cviolet-600 outline-none rounded-xl border border-cviolet-600/80 bg-transparent px-4 py-2"
  />
</template>

<script setup lang="ts">
defineProps(["value"])
defineEmits(["update:value"])
</script>