<script lang="ts" setup>
const emits = defineEmits<{
  (e: "handleNavbarState", val?: boolean): void;
  (e: "handleSearchState", val?: boolean): void;
}>();

const searchFocused = ref(false);
</script>

<template>
  <div class="bg-black flex justify-center">
    <div class="flex flex-col items-center flex-1">
      <!-- TOP HEADER -->
      <div
        class="flex justify-center w-full py-4 lg:border-b border-white border-opacity-20 px-[50px] lg:px-[80px] 2xl:px-[110px]"
      >
        <div class="flex items-center justify-between flex-1">
          <!-- NAVBAR MOBILE -->
          <button
            class="text-white text-2xl lg:hidden"
            @click="emits('handleNavbarState')"
          >
            <NuxtIcon name="menu-stack" />
          </button>
          <!-- LOGO -->
          <NuxtLink to="/" class="flex items-center gap-6">
            <img src="~/assets/icons/logo.svg" alt="" class="w-[64px]" />
            <img
              src="~/assets/icons/logo-written.svg"
              alt=""
              class="h-[15px] hidden lg:block"
            />
          </NuxtLink>
          <!-- PRIVACY AND SEARCH -->
          <div class="items-center gap-5 text-white-300 hidden lg:flex">
            <NuxtLink to="/" class="header-link text-xs">
              Politica de Privacidade/Provedor
            </NuxtLink>
            <div
              class="flex items-center gap-3.5 bg-black-300 px-4 py-3.5 rounded-[2px] min-w-[275px] border"
              :class="{
                'border-[#ffffff30] border-b-3 border-b-[#1998FC]':
                  searchFocused,
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
          </div>
          <!-- SEARCH MOBILE -->
          <button
            class="text-white text-2xl lg:hidden"
            @click="emits('handleSearchState')"
          >
            <NuxtIcon name="search" />
          </button>
        </div>
      </div>

      <!-- HEADER LINKS -->
      <nav class="py-4 w-full px-[80px] 2xl:px-[110px] hidden lg:block">
        <ul
          class="flex justify-start items-stretch text-white-300 gap-8 leading-[1.25] tracking-wide flex-1"
        >
          <li>
            <NuxtLink to="/" class="header-link flex items-center gap-2">
              <NuxtIcon name="car" class="text-2xl leading-none" />
              <span>Nossos modelos</span>
            </NuxtLink>
          </li>
          <li class="flex items-center">
            <NuxtLink to="/" class="header-link"> Showroom Online </NuxtLink>
          </li>
          <li class="flex items-center">
            <NuxtLink to="/" class="header-link"> Guia de Compra </NuxtLink>
          </li>
          <li class="flex items-center">
            <NuxtLink to="/" class="header-link"> Peças e Serviços </NuxtLink>
          </li>
          <li class="flex items-center">
            <NuxtLink to="/" class="header-link"> Nossa marca </NuxtLink>
          </li>
        </ul>
      </nav>

      <div
        class="flex justify-center items-center border-y border-white flex-1 w-full text-white py-2 md:text-lg xl:text-xl tracking-wide gap-1.5"
      >
        <span class=""> Confira as </span>
        <NuxtLink
          class="underline underline-offset-2 cursor-pointer hover:brightness-90 duration-[.25] transition-all"
        >
          melhores opções
        </NuxtLink>
        <span class=""> no Showroom Online Mercedez Benz. </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-link {
  @apply hover:text-white transition-all duration-[.25] cursor-pointer;
}
</style>
