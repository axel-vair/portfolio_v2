<script setup lang="ts">
import socialLinks from "../content/static/social-links.json";

</script>

<template>
  <footer class="py-20 lg:py-32 font-medium text-gray-500 border-t">
    <div class="px-5 max-w-6xl mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 overflow-hidden">
        <div class="col-span-2 lg:col-span-3">
          <p>© <!-- -->2024<!-- --> Axel Vair.</p>
        </div>
        <ul class="lg:col-start-5 space-y-1 lg:text-right">
          <li>
            <a class="py-1 inline-block hover:text-black hover:underline" href="/">Accueil</a>
          </li>
          <li>
            <a class="py-1 inline-block hover:text-black hover:underline" href="/blog">Blog</a>
          </li>
<!--          <li>-->
<!--            <a href="/blog/rss.xml" target="_blank" rel="noreferrer" class="py-1 inline-block hover:text-black hover:underline">RSS</a>-->
<!--          </li>-->
        </ul>
        <ul class="space-y-1 lg:text-right">
          <li>
            <a :href="socialLinks.linkedin" target="_blank" rel="noreferrer" class="py-1 inline-block hover:text-black hover:underline">Linkedin</a>
          </li>
          <li>
            <a :href="socialLinks.github" target="_blank" rel="noreferrer" class="py-1 inline-block hover:text-black hover:underline">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>