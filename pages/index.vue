<script setup>
const isDark = useDark();
import darkImg from "~/assets/img/bg-eye.jpg";
const show = ref(false)

const onImageLoad = () => {
  show.value = true
}
</script>

<template>
  <Typewriter v-if="!isDark" />
  <div v-else>
    <img :src="darkImg" :class="{ 'fade-in': show }" @load="onImageLoad">
  </div>
</template>

<style scoped>
img {
  opacity: 0;
  transition: opacity 5s ease-in-out;
}

.fade-in {
  opacity: 1;
}
</style>
