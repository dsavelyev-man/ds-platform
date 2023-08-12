<template>
    <UiContainer>
        <div class="flex justify-center h-screen items-center">
            <form>
                <h2 class="text-lg  flex justify-center drop-shadow-violet translate-y-6 relative z-[1]">
                    <span class="bg-dark py-1 px-2 rounded-full border border-cviolet-600">
                        Аватар
                    </span>
                </h2>
                <OrdinaryUploadAvatar/>
            </form>
        </div>
    </UiContainer>
</template>

<script lang="ts" setup>
definePageMeta({
    //@ts-ignore
    layout: "empty"
})
</script>