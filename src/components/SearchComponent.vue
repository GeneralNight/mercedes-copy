<script lang="ts" setup>
const emits = defineEmits<{
  (e: "close"): void;
}>();

const searchFocused = ref(false);
const inputSearch = ref(null);
onClickOutside(inputSearch, () => {
  emits("close");
});
</script>

<template>
  <div
    class="flex items-start justify-center py-10 fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
  >
    <Transition name="slide-anchor-top" :appear="true">
      <div
        ref="inputSearch"
        class="flex items-center gap-3 bg-black-300 px-5 py-3.5 rounded w-[80%] border"
        :class="{
          'border-[#ffffff30] border-b-3 border-b-[#1998FC]': searchFocused,
          'border-transparent': !searchFocused,
        }"
      >
        <input
          type="text"
          class="bg-transparent placeholder:text-white-300 border-r text-sm placeholder:font-light text-white border-r-white border-opacity-20 flex-1 outline-none"
          placeholder="Pesquisar"
          @focusin="searchFocused = true"
          @focusout="searchFocused = false"
        />
        <button>
          <NuxtIcon name="search" class="text-white text-lg" />
        </button>
      </div>
    </Transition>
  </div>
</template>
