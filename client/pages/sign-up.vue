<template>
    <UiContainer>
        <div class="flex justify-center h-screen items-center">
            <form @submit.prevent="submit" class="flex flex-col gap-2">
                <div class="flex flex-col items-center">
                    <h2 class="text-lg  flex justify-center drop-shadow-violet translate-y-6 relative z-[1]">
                    <span class="bg-dark py-1 px-2 rounded-full border border-cviolet-600">
                        Аватар
                    </span>
                    </h2>
                    <OrdinaryUploadAvatar :value="form.avatar" @update:value="newAvatar => form.avatar = newAvatar"/>
                </div>
                <UiLabel>
                    Имя
                    <UiTextInput 
                        :value="form.name" 
                        @update:value="newValue => form.name = newValue"
                        class="mt-2" 
                        autocomplete="username" 
                        placeholder="Вася пупкин"
                    />
                </UiLabel>
                <UiLabel>
                    Почта
                    <UiTextInput
                        autocomplete="email"
                        class="mt-2" 
                        :value="form.email" 
                        @update:value="newValue => form.email = newValue"
                        placeholder="example@mail.com"
                    />
                </UiLabel>
                <UiLabel>
                    Пароль
                    <UiPasswordInput
                        :value="form.password" 
                        :update="(newValue: string) => form.password = newValue"
                        class="mt-2"
                     />
                </UiLabel>
                <UiLabel>
                    Повторите пароль
                    <UiPasswordInput 
                        :value="form.repeatPassword" 
                        :update="(newValue: string) => form.repeatPassword = newValue"
                        class="mt-2"
                    />
                </UiLabel>
                <UiButton>Зарегистрироваться</UiButton>
            </form>
        </div>
    </UiContainer>
</template>

<script lang="ts" setup>
definePageMeta({
    //@ts-ignore
    layout: "empty"
})

const form = ref({
    avatar: undefined,
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
})

const submit = () => {
    const formData = new FormData()

    formData.append("avatar", form.value.avatar || "")
    formData.append("name", form.value.name)
    formData.append("email", form.value.email)
    formData.append("password", form.value.password)
    formData.append("repeatPassword", form.value.repeatPassword)

}

</script>