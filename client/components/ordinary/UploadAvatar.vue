<template>
    <UiAvatar :src="blob" @click="onClick" class="border relative border-cviolet-500/40 hover:bg-cviolet-600/10 transition cursor-pointer">
        <UiButton variant="link" type="button" :class="{[$style.scrollButtonToBottom]: !!blob}">Загрузить</UiButton>
        <input accept="image/*" capture @change="onChange($event)" ref="input" type="file" class="hidden"/>
    </UiAvatar>
</template>

<script setup lang="ts">
defineProps(["value"])
const emit = defineEmits(["update:value"])

const input = ref()
const blob = ref("")

const onClick = () => {
    input.value.click()
}

const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if(target && target.files) {
        emit("update:value", target.files[0])

        blob.value = URL.createObjectURL(target.files[0])
    }
}

</script>

<style lang="scss" module>
.scrollButtonToBottom {
    animation: scrollButtonToBottom ease-in 0.4s 0.4s forwards;
}

@keyframes scrollButtonToBottom {
    from {
        @apply absolute bottom-[50%] translate-y-[50%] 
    }

    to {
        @apply absolute bottom-[-6px] backdrop-blur-lg bg-dark/50
    }
}
</style>

