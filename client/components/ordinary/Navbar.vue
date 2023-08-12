<template>
  <nav
    class="backdrop-blur sticky top-0"
  >
    <Container class="h-[72px] px-2 flex items-center justify-between">
      <Logo />
      <div class="flex gap-2">
        <NuxtLink to="/sign-in" class="rounded-xl">
          <Button variant="link"> Войти </Button>
        </NuxtLink>
        <NuxtLink to="/sign-up" class="rounded-xl">
          <Button> Зарегистрироваться </Button>
        </NuxtLink>
      </div>
    </Container>
  </nav>
</template>
<script setup lang="ts">
import Logo from "../ui/Logo.vue";
import Container from "../ui/Container.vue";
import Button from "../ui/Button.vue";
</script>
