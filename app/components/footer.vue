<script setup lang="ts">
import socialLinks from "~/content/static/social-links.json";

</script>

<template>
  <footer class="py-20 lg:py-32 font-medium text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
    <div class="px-5 max-w-6xl mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 overflow-hidden">
        <div class="col-span-2 lg:col-span-3">
          <p>© 2024 Axel Vair.</p>
        </div>
        <ul class="lg:col-start-5 space-y-1 lg:text-right">
          <li>
            <a class="py-1 inline-block hover:text-black dark:hover:text-white" href="/public">Accueil</a>
          </li>
          <li>
            <a class="py-1 inline-block hover:text-black dark:hover:text-white" href="/blog">Blog</a>
          </li>
        </ul>
        <ul class="space-y-1 lg:text-right">
          <li>
            <a :href="socialLinks.linkedin" target="_blank" rel="noreferrer" class="py-1 inline-block hover:text-black dark:hover:text-white">Linkedin</a>
          </li>
          <li>
            <a :href="socialLinks.github" target="_blank" rel="noreferrer" class="py-1 inline-block hover:text-black dark:hover:text-white">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
