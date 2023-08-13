<template>
    <div class="relative">
        <UiTextInput :value="value" @update:value="update" placeholder="Минимум 6 символов" class="relative z-1 pr-8" :type="show ? 'text' : 'password'"/>
        <div @click="set" class="w-5 h-5 absolute right-3 cursor-pointer text-cviolet-400 top-[50%] translate-y-[-50%] z-2">
            <EyeIcon v-if="!show"/>
            <EyeSlashIcon v-else/>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(["value", "update"])

import EyeIcon from "@heroicons/vue/24/outline/EyeIcon"
import EyeSlashIcon from "@heroicons/vue/24/outline/EyeSlashIcon"

const show = ref(false)

const set = () => {
    show.value = !show.value
}
</script>