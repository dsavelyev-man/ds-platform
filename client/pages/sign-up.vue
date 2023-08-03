<template>
  <div class="overflow-hidden h-[calc(100vh-76px)]">
    <Container class="justify-center items-center flex h-[calc(100vh-76px)]">
      <div class="max-w-md w-full relative pb-40">
        <div class="flex flex-col items-center mb-14">
          <h1 class="flex flex-col font-bold font-mono drop-shadow-violet">
            <span class="text-violet-500 text-5xl text-center"> DS </span>
            <span class="text-2xl"> platform </span>
          </h1>
        </div>
        <form @submit="submitFirstForm" :class="classes['0']">
          <Label>
            <span class="px-4 pb-2"> Имя </span>
            <TextInput placeholder="Вася пупкин" />
          </Label>
          <Label>
            <span class="px-4 pb-2"> Почта </span>
            <TextInput placeholder="example@exa.ru" type="email" />
          </Label>
          <Button class="focus:drop-shadow-violet">Далее</Button>
        </form>
        <form @submit="submitSecondForm" :class="classes['1']">
          <Label>
            <span class="px-4 pb-2"> Пароль </span>
            <TextInput
              placeholder="Должен содержать больше или 6 символов"
              type="password"
            />
          </Label>
          <Label>
            <span class="px-4 pb-2"> Повторите пароль </span>
            <TextInput placeholder="••••••••" type="password" />
          </Label>
          <Button class="focus:drop-shadow-violet">Далее</Button>
        </form>
      </div>
    </Container>
  </div>
</template>
<script setup lang="ts">
import Label from "~/components/ui/Label.vue";
import TextInput from "~/components/ui/TextInput.vue";
import Button from "~/components/ui/Button.vue";
import Container from "~/components/ui/Container.vue";

const activeForm = ref(0);
const $style = useCssModule();

const classes = computed(() => ({
  0: [
    "flex flex-col gap-4 absolute w-full",
    {
      [$style.hiding]: activeForm.value > 0,
    },
  ],
  1: [
    "flex flex-col gap-4 hidden absolute w-full",
    {
      [$style.hiding]: activeForm.value > 1,
      [$style.showing]: activeForm.value === 1,
    },
  ],
}));

const submitFirstForm = (e: Event) => {
  e.preventDefault();

  activeForm.value = 1;
};

const submitSecondForm = (e: Event) => {
  e.preventDefault();

  activeForm.value = 2;
};
</script>

<style lang="scss" module>
.hiding {
  animation: hiding 1s forwards ease-in-out;
}

@keyframes hiding {
  from {
  }

  to {
    transform: translateX(-120vh);
  }
}

.showing.showing {
  animation: showing 1s forwards ease-in-out;
  display: flex;
}

@keyframes showing {
  from {
    transform: translateX(100vh);
  }

  to {
    transform: translateX(0);
  }
}
</style>
