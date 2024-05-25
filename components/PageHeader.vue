<script setup lang="ts">
import socialLinks from "../content/static/social-links.json";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: null,
  }
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-20 lg:my-32 items-center">
    <div>
      <h1 class="text-5xl font-extrabold leading-[1.14em]" v-html="title"></h1>
      <p v-if="subtitle" class="mt-5 text-2xl text-gray-500 leading-8">{{ subtitle }}</p>
    </div>

    <div class="flex justify-end">
      <a
          :href="socialLinks.github"
          target="_blank"
          rel="noreferrer">
        <Icon name="uil:github" class="mr-5 text-gray-500 hover:text-black transition duration-300" size="45"/>
      </a>

      <a :href="socialLinks.linkedin"
         target="_blank"
         rel="noreferrer"
      >
        <Icon name="bxl:linkedin" class="text-gray-500 hover:text-black transition duration-300" size="45"/>
      </a>
    </div>
  </div>
</template>

