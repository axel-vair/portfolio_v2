<script setup lang="ts">
useSeoMeta({
  title: "Portfolio d'Axel Vair",
  ogTitle: 'Portfolio d\'Axel Vair',
  description: 'Axel Vair est un développeur web et mobile full stack basé sur Marseille. Il a une expérience variée et une soif d\'apprendre qui lui permet de réaliser des projets de qualité.',
  ogDescription: 'Axel Vair est un développeur web et mobile full stack basé sur Marseille. Il a une expérience variée et une soif d\'apprendre qui lui permet de réaliser des projets de qualité.',
  ogImage: [
    { url: 'https://axelvair.fr/ogimage.svg', type: 'image/svg+xml' },
    { url: 'https://axelvair.fr/ogimage.png', type: 'image/png' }
  ],
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogUrl: 'https://axelvair.fr',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://axelvair.fr/ogimage.svg',
})
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>
