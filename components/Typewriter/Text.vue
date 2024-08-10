<template>
  <div class="max-w-xl text-center px-5">
    <div ref="typewriterElement"></div>
    <div
      v-if="showCounter"
      class="text-4xl">
      <Transition name="fade" mode="out-in">
        <span :key="counter" class="inline-block transition-all duration-300 ease-in-out text-red-500">
          {{ counter }}
        </span>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Typewriter from "typewriter-effect/dist/core";
const isDark = useDark()

const typewriterElement = ref(null);
const counter = ref(5);
const showCounter = ref(false);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  const typewriter = new Typewriter(typewriterElement.value, {
    autoStart: true,
    cursor: "|",
    delay: 10,
    loop: false,
  });

  typewriter
    .typeString(props.text)
    .callFunction(() => {
      showCounter.value = true;
      startCounter();
    })
    .start();
});

function startCounter() {
  const interval = setInterval(() => {
    counter.value--;
    if (counter.value <= 0) {
      // Hentikan pada 10, sesuaikan jika perlu
      clearInterval(interval);
      isDark.value = true
    }
  }, 1000);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
