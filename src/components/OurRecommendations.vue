<script lang="ts" setup>
import { IRecommendation } from "~/types";

const recommendationsList = ref<IRecommendation[]>([]);

const recommendScroll = ref(null);
const { x, y } = useScroll(recommendScroll, { behavior: "smooth" });

const scrollNext = () => {
  if (window.innerWidth >= 1536) {
    x.value += (recommendScroll.value.offsetWidth - 3 * 32) / 4;
  } else if (window.innerWidth <= 1535 && window.innerWidth >= 1024) {
    x.value += (recommendScroll.value.offsetWidth - 2 * 32) / 3;
  } else if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
    x.value += (recommendScroll.value.offsetWidth - 32) / 2;
  } else {
    x.value += recommendScroll.value.offsetWidth;
  }
};

const scrollPrevious = () => {
  if (window.innerWidth >= 1536) {
    x.value -= (recommendScroll.value.offsetWidth - 3 * 32) / 4;
  } else if (window.innerWidth <= 1535 && window.innerWidth >= 1024) {
    x.value -= (recommendScroll.value.offsetWidth - 2 * 32) / 3;
  } else if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
    x.value -= (recommendScroll.value.offsetWidth - 32) / 2;
  } else {
    x.value -= recommendScroll.value.offsetWidth;
  }
};

onMounted(() => {
  recommendationsList.value = [...Array(20).keys()].map((v, index) => {
    return {
      id: index + 1,
      cover:
        "https://www2.mercedes-benz.com.br/content/brazil/pt_BR/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_1_363232770.component.damq6.3342612073458.jpg/showroom-online-cta_16x9.jpg",
      title: "Visite o Showroom Online",
      content:
        "Encontre todos os veículos disponíveis em um só lugar. Comece sua pesquisa agora.",
      link: "https://www2.mercedes-benz.com.br/passengercars/buy/new-car.html",
      publishedDate: new Date(),
    };
  });
});
</script>

<template>
  <div
    class="flex flex-col px-[50px] lg:px-[80px] 2xl:px-[100px] py-8 md:py-12 lg:py-16 2xl:py-24 gap-6 md:gap-10 2xl:gap-14"
  >
    <h1 class="text-3xl md:text-4xl font-light">Nossas Recomendações</h1>
    <div class="relative flex items-center">
      <button
        @click="scrollPrevious"
        class="w-12 h-12 rounded-full bg-white controls-shadow flex items-center justify-center absolute left-4 hover:brightness-90 transition-all duration-[.25] z-10"
      >
        <NuxtIcon name="caret-left" class="text-2xl text-black-300" />
      </button>
      <button
        @click="scrollNext"
        class="w-12 h-12 rounded-full bg-white controls-shadow flex items-center justify-center absolute right-4 hover:brightness-90 transition-all duration-[.25] z-10"
      >
        <NuxtIcon name="caret-right" class="text-2xl text-black-300" />
      </button>

      <div
        class="flex items-center overflow-scroll gap-8 hide-scrollbar snap-x snap-mandatory py-2 relative"
        ref="recommendScroll"
      >
        <RecommendationCard
          class="snap-start snap-always"
          :recommendation="rec"
          v-for="rec in recommendationsList"
        />
      </div>
    </div>
  </div>
</template>

<style>
.controls-shadow {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
</style>
