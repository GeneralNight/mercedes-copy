<script lang="ts" setup>
const deviceWidth = ref(0);

const kvHeight = computed(() => {
  if (deviceWidth.value <= 1023) {
    return `${deviceWidth.value * 0.66927083333}px`;
  }
  return `${deviceWidth.value / 2.22222222}px`;
});

onMounted(() => {
  deviceWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    deviceWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div class="flex flex-col flex-1">
    <div
      class="relative w-full bg-cover bg-center overflow-hidden flex flex-col"
      :style="`background-image: url('/kv.avif'); height: ${kvHeight};`"
    >
      <div
        class="w-full h-full absolute inset-0 lg:rotate-[2deg] bg-contain bg-no-repeat lg:bg-cover bg-center z-0"
        style="background-image: url('/kv.avif')"
      ></div>
      <div
        class="relative special-gradient w-full h-full z-[5] flex flex-col justify-center px-[80px] 2xl:px-[100px] gap-10 xl:gap-20"
      >
        <p
          class="text-4xl xl:text-5xl 2xl:text-6xl leading-[1.35] font-light tracking-tight text-white hidden lg:block"
        >
          Conheça o novo <br />
          CLA Coupé.
        </p>
        <NuxtLink
          class="px-8 py-3 font-semibold tracking-wider border border-[#0078d6] bg-[#0078d6] text-white w-fit rounded-sm hover:bg-[#014880] transition-all duration-[.25] cursor-pointer hidden lg:block"
        >
          Saiba mais
        </NuxtLink>
      </div>
    </div>
    <div
      class="relative flex flex-col lg:hidden bg-black px-[50px] pb-10 -top-[1px]"
    >
      <p
        class="text-3xl lg:text-4xl leading-[1.35] font-light tracking-tight text-white relative -top-14 lg:-top-20 z-[5]"
      >
        Conheça o novo <br />
        CLA Coupé.
      </p>
      <NuxtLink
        class="px-8 py-3 text-center font-semibold tracking-wider border border-[#0078d6] bg-[#0078d6] text-white rounded-sm hover:bg-[#014880] transition-all duration-[.25] cursor-pointer"
      >
        Saiba mais
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.special-gradient {
  background-image: linear-gradient(to top, #000, transparent 50%),
    linear-gradient(to right, #000, transparent 50%);
}

@media screen and (max-width: 1023px) {
  .special-gradient {
    background-image: linear-gradient(to top, #000, transparent 25%);
  }
}
</style>
