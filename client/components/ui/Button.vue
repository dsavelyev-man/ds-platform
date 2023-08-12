<template>
  <button :class="classes"><slot/></button>
</template>

<script lang="ts" setup>
import classnames from "classnames"

const props = defineProps<{
  variant?: "link"
}>()

const classes = computed(() => {
  let variant;

  switch(props.variant) {
    case "link":
      variant = "border border-cviolet-600 hover:bg-cviolet-600/30 hover:drop-shadow-violet"
      break;
    default:
      variant = "bg-cviolet-600 from-cviolet-600	bg-gradient-to-r hover:to-black/10 hover:drop-shadow-violet"
  }

  return classnames("transition-all duration-200 ease-in-out px-4 py-2 rounded-xl", variant)
}) 
</script>