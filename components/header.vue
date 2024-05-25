<script setup lang="ts">
</script>

<template>
  <header class="sticky h-18 top-0 border-b border-gray-200 py-4 bg-gray-100 bg-opacity-80 backdrop-blur-md font-medium z-10">
    <div class="px-5 max-w-6xl mx-auto flex items-center justify-between gap-10">
      <NuxtLink to="/">
        <img src="https://via.placeholder.com/40x40" alt="axelvair.fr" class="inline-block h-10 rounded-sm hover:opacity-80">
      </NuxtLink>
      <nav class="-mr-3">
          <NuxtLink class="p-3 text-gray-500 hover:text-gray-600" to="/">
            À propos
          </NuxtLink>
          <NuxtLink class="p-3 text-gray-500 hover:text-gray-600" to="/blog">
            Blog
          </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .router-link-exact-active {
    color: black;
  }
</style>