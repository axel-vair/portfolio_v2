<script setup lang="ts">
</script>

<template>
  <header class="sticky h-18 top-0 border-b border-gray-200 py-4 bg-gray-100 bg-opacity-80 backdrop-blur-md font-medium z-10">
    <div class="px-5 max-w-6xl mx-auto flex items-center justify-between gap-10">
      <NuxtLink to="/">
        <div class="logo-container">
          <svg class="logo" viewBox="0 0 100 100" width="50" height="50">
            <rect x="10" y="10" width="80" height="80" rx="7" ry="7" fill="#000000" class="bg" />
            <path d="M50 30 L70 70 H30 Z" fill="#ffffff" class="a-triangle" />
            <path d="M50 40 L60 60 H40 Z" fill="#000000" class="v-triangle" />
          </svg>
        </div>
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
  .logo-container {
    display: inline-block;
    position: relative;
  }

  .logo {
    display: block;
  }

  .logo .bg,
  .logo .a-triangle,
  .logo .v-triangle {
    transition: fill 0.3s ease;
  }

  .logo:hover .bg,
  .logo:hover .v-triangle {
    fill: #343a40;
  }
</style>