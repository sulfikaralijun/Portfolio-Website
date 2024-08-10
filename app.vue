<script setup>
const isDark = useDark();
const startSurprice = ref(false);
const bg = ref("bg-red-500");
const classBg = computed(() => ({
  "bg-black": isDark.value,
  "bg-red-500": bg.value === "red",
  "bg-blue-500": bg.value === "blue",
}));
watch(isDark, (newVal) => {
  console.log("newVal", newVal);
  console.log("startSurprice", startSurprice.value);
  if (newVal === true) {
    setTimeout(() => {
      startSurprice.value = true;
      console.log("startSurprice", startSurprice.value);
      setInterval(() => {
        if (bg.value === "red") {
          bg.value = "blue";
        } else {
          bg.value = "red";
        }
      }, 0);
    }, 3000);
  }
});
</script>

<template>
  <div
    class="h-dvh grid place-items-center"
    :class="classBg">
    <Typewriter v-if="!isDark" />
  </div>
</template>
