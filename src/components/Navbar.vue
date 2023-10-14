<script lang="ts" setup>
const emits = defineEmits<{
  (e: "close"): void;
}>();

const navbarElement = ref(null);
onClickOutside(navbarElement, () => {
  emits("close");
});
</script>

<template>
  <div
    class="flex items-start py-10 px-[50px] fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
  >
    <Transition name="slide-anchor-left" :appear="true">
      <div
        ref="navbarElement"
        class="flex flex-col bg-white h-full w-[50%] rounded"
      ></div>
    </Transition>
  </div>
</template>
