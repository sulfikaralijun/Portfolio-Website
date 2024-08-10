<script setup>
const isDark = useDark();

</script>

<template>
  <div
    class="h-dvh grid place-items-center overflow-hidden"
    :class="{'bg-black': isDark}">
    <NuxtPage/>
  </div>
</template>
