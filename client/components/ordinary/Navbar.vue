<template>
  <nav class="backdrop-blur border-b border-b-cviolet-600 overflow-hidden sticky top-0">
    <Container class="h-[72px] px-2 flex items-center justify-between">
      <Logo/>
      <div class="flex gap-2">
        <Button class="focus:drop-shadow-violet">
          Войти
        </Button>
        <Button class="focus:drop-shadow-violet">
          Зарегистрироваться
        </Button>
      </div>
    </Container>
  </nav>
</template>
<script setup lang="ts">
import Logo from "../ui/Logo.vue";
import Container from "../ui/Container.vue";
import Button from "../ui/Button.vue";
</script>