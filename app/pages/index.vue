<script setup lang="ts">
import socialLinks from "~~/content/static/social-links.json";

const { error, pending, data } = await useFetch('https://api.github.com/users/axel-vair/repos')
const displayCount = ref(6)
const loadMore = () => {
  displayCount.value += 6;
};

const sortedRepositories = computed(() => {
  return data.value
      ? [...data.value]
          .filter(repo => repo.name !== 'axel-vair')
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
      : [];
});

const colorMode = useColorMode();

</script>

<template>
  <PageHeader
      class="bg-background text-foreground"
      title=" 👋 Bonjour ! <br>
      C'est <span class='text-destructive dark:text-red-600'>Axel Vair</span>."
      subtitle="Je suis développeur web full stack depuis 2 ans. Passionné de code et de design, je m'attache à créer des expériences numériques épurées et fluides."
  >
  </PageHeader>

  <div class="bg-background text-foreground">
    <section>
      <Grid class="my-20 gap-y-20 text-xl">
        <div class="col-span-3">
          <h2 class="text-primary mt-8 mb-5 text-3xl font-bold">Qui suis-je ?</h2>
          <p class="text-foreground dark:text-gray-300 text-xl leading-8">
            Né dans les années 90, j'ai dédié la première partie de ma vie à la littérature. Après un master en
            recherche en littérature, un master en science de l'éducation et quelques années dans le domaine.
          </p>
          <br>
          <p class="text-foreground dark:text-gray-300 text-xl leading-8">
            J'ai découvert le développement informatique à l'université. Aussi, je décide de préparer
            un diplôme de Concepteur, Développeur d'Application dans le cadre d'une réorientation professionnelle.
          </p>
        </div>
        <div class="col-span-3">
          <div class="bg-secondary p-8 rounded-xl">
            <h2 class="mb-5 text-primary text-3xl font-bold">Et maintenant ? </h2>
            <p class="text-foreground dark:text-gray-300 text-xl leading-8">
              En alternance dans une institution française, je travaille comme développeur web fullstack.
            </p>
            <br>
            <p class="text-foreground dark:text-gray-300 text-xl leading-8">
              Pour développer mes applications, j'utilise au quotidien des technologies comme Symfony, Spring Boot,
              VueJS, Angular, React, Electron.
            </p>
            <br>
            <p class="text-foreground dark:text-gray-300 text-xl leading-8">
              J'ai eu un coup de coeur pour Symfony, VueJS (et Nuxt).
            </p>
          </div>
        </div>
      </Grid>
    </section>

    <div>
      <!-- Div pour le mode clair -->
      <div v-if="colorMode.value === 'light'" class="flex ml-20 mx-auto mb-20 sm:flex">
        <div class="hidden sm:block">
          <img src="public/img/angular_logo_icon.png" loading="lazy" alt="logo angular">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/boot_spring_logo_icon.png" loading="lazy" alt="logo spring boot">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/electron_logo_icon.png" loading="lazy" alt="logo electron">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/symfony_logo_icon.png" loading="lazy" alt="logo symfony">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/vuejs_icon.png" loading="lazy" alt="logo vuejs">
        </div>
      </div>

      <!-- Div pour le mode sombre -->
      <div v-if="colorMode.value === 'dark'" class="flex ml-20 mx-auto mb-20 sm:flex">
        <div class="hidden sm:block">
          <img src="public/img/dark-angular_logo_icon.png" loading="lazy" alt="logo angular">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/dark-boot_spring_logo_icon.png" loading="lazy" alt="logo spring boot">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/dark-electron_logo_icon.png" loading="lazy" alt="logo electron">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/dark-symfony_logo_icon.png" loading="lazy" alt="logo symfony">
        </div>
        <div class="hidden sm:block">
          <img src="public/img/dark-vuejs_icon.png" loading="lazy" alt="logo vuejs">
        </div>
      </div>
    </div>

    <section>
      <div class="mx-0 max-w-screen-xl py-8 sm:py-12">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-primary text-3xl font-bold sm:text-4xl lg:pb-10">Sélection de projets</h2>
        </div>
        <div v-if="pending">Chargement...</div>
        <div v-else-if="error" class="text-center">
          <div class="flex flex-col items-center bg-destructive text-destructive-foreground p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <p>Une erreur s'est produite lors de la récupération des projets. Veuillez réessayer plus tard.</p>
          </div>
        </div>
        <div v-else-if="!data || data.length === 0" class="text-center">
          <div class="flex flex-col items-center bg-destructive text-destructive-foreground p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <p>Aucun projet n'a pu être chargé pour le moment. Veuillez réessayer plus tard.</p>
          </div>
        </div>
        <div v-else class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
              v-for="repository in sortedRepositories.slice(0, displayCount)"
              :key="repository.id"
              :href="repository.html_url"
              target="_blank"
              class="block rounded-xl border border-gray-300 p-8 shadow-xl transition
           hover:border-red-500/10 hover:shadow-red-500/10
           dark:border-border dark:bg-card dark:text-card-foreground
           dark:hover:border-primary/10 dark:hover:shadow-primary/10"
          >
            <div class="flex justify-between items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="33"
                  height="33"
                  class="text-black dark:text-primary"
              >
                <path fill="currentColor"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.285-.01-1.042-.015-2.048-3.338.724-4.043-1.607-4.043-1.607-.546-1.387-1.333-1.758-1.333-1.758-1.089-.743.083-.728.083-.728 1.204.085 1.836 1.237 1.836 1.237 1.067 1.827 2.8 1.297 3.48.993.108-.774.418-1.297.76-1.597-2.665-.303-5.466-1.333-5.466-5.933 0-1.313.469-2.384 1.236-3.22-.124-.303-.536-1.53.117-3.176 0 0 1.007-.322 3.301 1.23.957-.266 1.986-.398 3.006-.402 1.02.004 2.049.136 3.006.402 2.294-1.552 3.301-1.23 3.301-1.23.653 1.646.241 2.873.118 3.176.768.836 1.236 1.907 1.236 3.22 0 4.608-2.805 5.63-5.474 5.93.43.372.815 1.104.815 2.224 0 1.606-.014 2.9-.014 3.287 0 .319.19.694.8.577C20.563 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>

              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="33"
                  height="33"
                  class="transition-transform duration-300 ease-in-out hover:translate-x-1
               hover:text-red-500 dark:hover:text-red-500"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/>
                <path d="M12 16l4-4m0 0l-4-4m4 4H8" stroke="currentColor"/>
              </svg>
            </div>

            <h2 class="mt-4 text-xl font-bold text-black dark:text-foreground">
              {{ repository.name }}
            </h2>

            <p class="mt-1 text-md text-gray-800 dark:text-muted-foreground">
              {{ repository.description || 'Pas de description disponible' }}
            </p>
          </a>
        </div>

        <div v-if="data && displayCount < data.length" class="mt-12 text-center">
          <button
              @click="loadMore"
              class="inline-block rounded-full border border-border px-12 py-3 text-md font-medium text-foreground transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring focus:ring-ring"
          >
            Charger plus de projets
          </button>
        </div>

        <div v-if="data && displayCount >= data.length" class="mt-12 text-center">
          <a
              href="https://github.com/axel-vair"
              target="_blank"
              class="inline-block rounded-full bg-primary px-12 py-3 text-md font-medium text-primary-foreground transition hover:bg-primary/80 focus:outline-none focus:ring focus:ring-ring"
          >
            Voir plus sur Github
          </a>
        </div>
      </div>
    </section>

    <section class="rounded-lg bg-secondary p-8 lg:mt-10">
      <h2 class="text-primary mb-5 text-3xl font-bold">Contact</h2>
      <div class="flex flex-col md:flex-row items-center">
        <p class="text-lg text-foreground md:w-2/3 mb-4 md:mb-0 md:pr-4">Pour ne rien rater de mes annonces ou de mes
          projets. Suivez-moi sur Linkedin pour me poser une question ou simplement discuter de sujets techniques.</p>
        <div class="flex-grow flex justify-center items-center">
          <a :href="socialLinks.linkedin"
             target="_blank"
             rel="noreferrer"
             class="flex-shrink-0"
             aria-label="Linkedin logo"
          >
            <Icon name="bxl:linkedin" class="text-muted-foreground hover:text-foreground transition duration-300" size="40"/>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  max-width: 35%;
}
</style>
