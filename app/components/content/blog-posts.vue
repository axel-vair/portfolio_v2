<script setup lang="ts">
const colorMode = useColorMode();

// prevent duplicate refetching with useAsyncData
const {data} = await useAsyncData(
    'blog-list',
    () => queryContent('/blog')
        .where({_path: {$ne: '/blog'}})
        .only(['_path', 'title', 'publishedAt'])
        .sort({publishedAt: -1})
        .find()
)
const posts = computed(() => {
  if(!data.value){
    return []
  }
  const result = []
  let lastYear = null

  for(const post of data.value){
    const year = new Date(post.publishedAt).getFullYear()
    const displayYear = year !== lastYear
    post.displayYear = displayYear
    post.year = year
    result.push(post)
    lastYear = year
  }
  return result
})
</script>
<template>
  <section class="not-prose">
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">
          <div v-if="!post.displayYear === false">
            {{post.year}}
          </div>
          <div>
            {{ post.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
