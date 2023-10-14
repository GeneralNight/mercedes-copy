<script lang="ts" setup>
const showSearch = ref(false);
const showNavbar = ref(false);

const handleSearchState = () => {
  showNavbar.value = false;
  showSearch.value = !showSearch.value;
};

const handleNavbarState = () => {
  showSearch.value = false;
  showNavbar.value = !showNavbar.value;
};
</script>

<template>
  <div class="flex flex-col">
    <Header
      @handleSearchState="handleSearchState"
      @handleNavbarState="handleNavbarState"
    />
    <Transition name="from-opacity">
      <SearchComponent v-if="showSearch" @close="handleSearchState" />
    </Transition>
    <Transition name="from-opacity">
      <Navbar v-if="showNavbar" @close="handleNavbarState" />
    </Transition>

    <slot />
  </div>
</template>
