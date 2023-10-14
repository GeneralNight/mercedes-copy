<script lang="ts" setup>
import { IRecommendation } from "~/types";
const props = defineProps<{
  recommendation: IRecommendation;
}>();
</script>

<template>
  <div
    class="flex flex-col w-full min-w-full md:min-w-[calc((100%-32px)/2)] lg:min-w-[calc((100%-(2*32px))/3)] 2xl:min-w-[calc((100%-(3*32px))/4)] md:max-w-[calc((100%-32px)/2)] lg:max-w-[calc((100%-(2*32px))/3)] xl:max-w-[calc((100%-(3*32px))/4)] card-shadow rounded bg-white overflow-hidden"
  >
    <img :src="recommendation.cover" alt="" class="w-full h-[250px]" />
    <div class="flex flex-col flex-1 px-4 gap-8 py-6">
      <div class="flex flex-col flex-1 gap-2">
        <p class="text-xl font-medium">{{ recommendation.title }}</p>
        <p class="">{{ recommendation.content }}</p>
      </div>
      <NuxtLink
        :external="true"
        :to="recommendation.link"
        class="px-8 py-3 text-center w-full font-semibold tracking-wider border border-[#0078d6] bg-[#0078d6] text-white rounded hover:bg-[#014880] transition-all duration-[.25] cursor-pointer"
      >
        Saiba mais
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.card-shadow {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
