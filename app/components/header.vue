<script setup lang="ts">
</script>

<template>
  <header class="sticky h-18 top-0 border-b border-gray-200 dark:border-gray-700
  py-4 bg-gray-100 dark:bg-gray-700 bg-opacity-80 backdrop-blur-md font-medium z-10">
    <div class="px-5 max-w-6xl mx-auto flex items-center justify-between gap-10">
      <NuxtLink to="/" aria-label="Accueil">
        <div class="logo-container">
          <svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" title="Site logo">
            <rect x="0" y="0" width="32" height="32" rx="5" ry="5" class="bg fill-current text-black dark:text-white"/>
            <path d="M16 8 L24 24 H8 Z" class="a-triangle fill-current text-white dark:text-black"/>
            <path d="M16 12 L20 20 H12 Z" class="v-triangle fill-current text-black dark:text-white"/>
          </svg>
        </div>
      </NuxtLink>
      <nav class="flex items-center gap-5">
        <NuxtLink class="p-3 text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400" to="/">
          À propos
        </NuxtLink>
        <NuxtLink class="p-3 text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400" to="/blog">
          Blog
        </NuxtLink>
        <ColorModeSelector />
      </nav>
    </div>
  </header></template>

<style scoped>
.router-link-exact-active {
  color: #000000; /* Couleur pour l'état actif */
}
.logo-container {
  display: inline-block;
  position: relative;
  width: 42px;
  height: 42px;
}

.logo-svg {
  width: 100%;
  height: 100%;
}

.logo .bg,
.logo .a-triangle,
.logo .v-triangle {
  transition: fill 0.3s ease;
}

.logo-container:hover .bg,
.logo-container:hover .v-triangle {
  fill: #343a40;
}
</style>
