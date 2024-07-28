<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
useSeoMeta({
  title: "Portfolio d'Axel Vair",
  ogTitle: "Portfolio d'Axel Vair",
  description: 'Axel Vair est un développeur web et mobile full stack basé sur Marseille. Il a une expérience variée et une soif d\'apprendre qui lui permet de réaliser des projets de qualité.',
  ogDescription: 'Axel Vair est un développeur web et mobile full stack basé sur Marseille. Il a une expérience variée et une soif d\'apprendre qui lui permet de réaliser des projets de qualité.',
  ogImage: 'https://axelvair.fr/ogimage.png',
  ogImageType: 'image/png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogUrl: 'https://axelvair.fr',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://axelvair.fr/ogimage.svg',
  twitterTitle: "Portfolio d'Axel Vair",
  twitterDescription: 'Axel Vair est un développeur web et mobile full stack basé sur Marseille. Il a une expérience variée et une soif d\'apprendre qui lui permet de réaliser des projets de qualité.'
})
</script>

<template>
  <div class="bg-background text-foreground">
    <NuxtLayout/>
  </div>
</template>
