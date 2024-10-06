<script setup lang="ts">
</script>

<template>
  <!-- Header -->
  <Header/>
  <!-- Output the page content -->
  <main class="px-5 max-w-6xl mx-auto my-20 lg:my-32 bg-background text-foreground">
    <NuxtPage/>
    <slot/>
  </main>
  <!-- Footer -->
  <Footer/>
</template>

<style scoped>
body {
  @apply bg-background text-foreground;
}
</style>
