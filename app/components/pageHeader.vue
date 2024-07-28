<script setup lang="ts">
import socialLinks from "~~/content/static/social-links.json";

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
  <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-4 my-12 lg:my-32 items-center">
    <div>
      <h1 class="text-slate-800 dark:text-gray-200 text-5xl font-extrabold leading-tight lg:leading-[1.14em] text-center lg:text-left" v-html="title"></h1>
      <p v-if="subtitle" class="mt-4 lg:mt-5 text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-7 lg:leading-8 text-center lg:text-left">{{ subtitle }}</p>
    </div>

    <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <a
          :href="socialLinks.github"
          target="_blank"
          rel="noreferrer"
          class="mr-5"
          aria-label="Github logo"
      >
        <Icon name="uil:github" class="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300" size="40"/>
      </a>

      <a :href="socialLinks.linkedin"
         target="_blank"
         rel="noreferrer"
         aria-label="Linkedin logo"
      >
        <Icon name="bxl:linkedin" class="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300" size="40"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: blue; /* Couleur pour l'état actif */
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
