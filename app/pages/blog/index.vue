<script setup lang="ts">
const colorMode = useColorMode();

// prevent duplicate refetching with useAsyncData
const {data: posts} = await useAsyncData(
    'blog-list',
    () => queryContent('/blog').only(['_path', 'title']).find()
)
</script>
<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
  <!--  <div class="flex flex-col justify-center items-center">-->
  <!--    <div class="text-center">-->
  <!--      <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4 dark:text-gray-300">Blog en construction</h1>-->

  <!--      <p class="text-xl md:text-2xl text-gray-400 mb-8">-->
  <!--        Le blog est actuellement en cours de développement. Je travaille dur pour vous offrir une expérience-->
  <!--        exceptionnelle.-->
  <!--      </p>-->

  <!--      <div class="flex justify-center space-x-4 mb-8">-->
  <!--        <a href="https://github.com/axel-vair" target="_blank" rel="noreferrer"-->
  <!--           class="text-gray-500 hover:text-black dark:hover:text-white transition duration-300">-->
  <!--          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
  <!--            <path fill-rule="evenodd"-->
  <!--                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"-->
  <!--                  clip-rule="evenodd"/>-->
  <!--          </svg>-->
  <!--        </a>-->
  <!--        <a href="https://linkedin.com/in/axel-vair" target="_blank" rel="noreferrer"-->
  <!--           class="text-gray-500 hover:text-black dark:hover:text-white transition duration-300">-->
  <!--          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
  <!--            <path fill-rule="evenodd"-->
  <!--                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"-->
  <!--                  clip-rule="evenodd"/>-->
  <!--          </svg>-->
  <!--        </a>-->
  <!--      </div>-->

  <!--      <p class="text-lg text-gray-400 mb-8">-->
  <!--        Revenez bientôt pour découvrir notre nouveau blog !-->
  <!--      </p>-->

  <!--      <div v-if="colorMode.value === 'light'" class="flex justify-center space-x-4 mb-8">-->
  <!--        <img src="/img/angular_logo_icon.png" alt="logo angular" class="h-12 w-auto">-->
  <!--        <img src="/img/boot_spring_logo_icon.png" alt="logo spring boot" class="h-12 w-auto">-->
  <!--        <img src="/img/electron_logo_icon.png" alt="logo electron" class="h-12 w-auto">-->
  <!--        <img src="/img/symfony_logo_icon.png" alt="logo symfony" class="h-12 w-auto">-->
  <!--        <img src="/img/vuejs_icon.png" alt="logo vuejs" class="h-12 w-auto">-->
  <!--      </div>-->

  <!--      <div v-else class="flex justify-center space-x-4 mb-8">-->
  <!--        <img src="/img/dark-angular_logo_icon.png" alt="logo angular" class="h-12 w-auto">-->
  <!--        <img src="/img/dark-boot_spring_logo_icon.png" alt="logo spring boot" class="h-12 w-auto">-->
  <!--        <img src="/img/dark-electron_logo_icon.png" alt="logo electron" class="h-12 w-auto">-->
  <!--        <img src="/img/dark-symfony_logo_icon.png" alt="logo symfony" class="h-12 w-auto">-->
  <!--        <img src="/img/dark-vuejs_icon.png" alt="logo vuejs" class="h-12 w-auto">-->
  <!--      </div>-->

  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped>

</style>
