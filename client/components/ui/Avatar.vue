<template>
    <div :class="classes" :style="`background-image: url('${props.src}')`">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import classnames from "classnames"

const props = defineProps<{
    src: string
}>()

const classes = classnames(`h-48 w-48 rounded-full flex justify-center items-center bg-cover bg-center`)
</script>