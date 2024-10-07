<script setup lang="ts">
const activeId = ref(null)
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  })
  const elements = document.querySelectorAll('h2, h3');
  for (const element of elements) {
    observer.observe(element)
  }
  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>

<template>
  <article class="prose max-w-none dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <ContentDoc>
      <template #not-found>
        <h1>La page n'existe pas (404)</h1>
        <p>Cet article n'a pas pu être trouvé</p>
      </template>

      <template v-slot="{ doc }">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-16">

          <!-- Contenu principal -->
          <div :class="{'col-span-1 md:col-span-4' : doc.toc, 'col-span-1 md:col-span-6' : !doc.toc}">
            <ContentRenderer :value="doc"/>
          </div>

          <!-- Sommaire sur le côté pour les écrans plus larges -->
          <div v-if="doc.toc" class="not-prose col-span-2 hidden md:block">
            <aside class="sticky top-24">
              <div class="font-semibold mb-2">Sommaire</div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId"/>
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>
