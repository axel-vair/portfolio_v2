<script setup lang="ts">
const colorMode = useColorMode();

// prevent duplicate refetching with useAsyncData
const { data } = await useAsyncData(
    'blog-list',
    () => queryContent('/blog')
        .where({ _path: { $ne: '/blog' } })
        .only(['_path', 'title', 'publishedAt', 'description'])
        .sort({ publishedAt: -1 })
        .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    if (year !== lastYear) {
      result.push({ year, posts: [] });
      lastYear = year;
    }
    result[result.length - 1].posts.push(post);
  }

  return result;
});
</script>

<template>
  <div class="not-prose mt-8">
    <div v-for="group in posts" :key="group.year">
      <h2 class="text-2xl font-bold mt-6 mb-3">{{ group.year }}</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
            v-for="post in group.posts" :key="post._path" :to="post._path"
            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition
            hover:border-red-500/10 hover:shadow-red-500/10
            dark:border-border dark:bg-card dark:text-card-foreground
            dark:hover:border-primary/10 dark:hover:shadow-primary/10"
        >
          <h3 class="mt-4 text-xl font-bold text-black dark:text-foreground">
            {{ post.title }}
          </h3>
          <p class="mt-1 text-md text-gray-800 dark:text-muted-foreground">
            {{ post.description || 'Pas de description disponible' }}
          </p>
          <p :class="{ 'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
            {{ post.year || 'Pas d\'année de publication' }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
