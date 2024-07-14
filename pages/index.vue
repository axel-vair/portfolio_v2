<script setup lang="ts">

import socialLinks from "~/content/static/social-links.json";
</script>

<template>
  <PageHeader
      title=" 👋 Bonjour ! <br>
      C'est <span class='text-red-500'>Axel Vair</span>.
  "
      subtitle="Je suis développeur web full stack depuis 2 ans. Passionné de code et de design, je m'attache à créer des expériences numériques épurées et fluides."
  >
  </PageHeader>

  <main>
    <section>
      <Grid class="my-20 gap-y-20 text-xl">
        <div class="col-span-3">
          <h2 class="text-slate-800 mt-8 mb-5 text-3xl font-bold">Qui suis-je ?</h2>
          <p class="text-slate-700 text-xl leading-8">
            Né dans les années 90, j'ai dédié la première partie de ma vie à la littérature. Après un master en
            recherche en littérature, un master en science de l'éducation et quelques année poche, je décide de me
            réorienter professionnellement.
          </p>
          <br>
          <p class="text-slate-700 text-xl leading-8">
            Je découvre le développement à l'université et du fait de cette expérience positive, je décide de préparer
            un diplôme de Concepteur, Développeur d'Applications en alternance.
          </p>
        </div>
        <div class="col-span-3">
          <div class="bg-gradient-to-t from-transparent to-gray-100 p-8 rounded-xl">
            <h2 class="mb-5 text-slate-800 text-3xl font-bold">Et maintenant ? </h2>
            <p class="text-slate-700 text-xl leading-8">
              En alternance depuis dans une institution française, je travaille comme développeur fullstack.
            </p>
            <br>
            <p class="text-slate-700 text-xl leading-8">
              J'utilise Figma et Lucany pour maquetter les applications que je souhaite développer.
            </p>
            <br>
            <p class="text-slate-700 text-xl leading-8">
              Pour développer mes applications, j'utilise au quotidien des technologies comme Symfony, Spring Boot,
              VueJS, Angular, Electron.
            </p>
          </div>
        </div>
      </Grid>
    </section>

    <div class="flex ml-20 mx-auto mb-20">
      <div>
        <img src="/public/img/angular_logo_icon.png" alt="logo angular">
      </div>
      <div>
        <img src="/public/img/boot_spring_logo_icon.png" alt="logo spring boot">
      </div>
      <div>
        <img src="/public/img/electron_logo_icon.png" alt="logo electron">
      </div>
      <div>
        <img src="/public/img/symfony_logo_icon.png" alt="logo symfony">
      </div>
      <div>
        <img src="/public/img/vuejs_icon.png" alt="logo vuejs">
      </div>
    </div>

    <section>
      <div class="mx-0 max-w-screen-xl py-8 sm:py-12">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl lg:pb-10">Sélection de projets</h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
              class="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
              href="https://github.com/axel-vair/symfony-shop"
              target="_blank"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path d="M3 3h18v18H3z"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
              <circle cx="6" cy="6" r="1"/>
              <circle cx="18" cy="6" r="1"/>
              <path d="M12 14h4"/>
              <path d="M12 17h4"/>
            </svg>

            <h2 class="mt-4 text-xl font-bold text-black">Boutique en ligne</h2>

            <p class="mt-1 text-md text-gray-800">
              Une boutique en ligne développée avec Symfony et Twig. Création d'interfaces utilisateur dynamiques avec
              Twig, Stimulus et Turbo Frames.
            </p>
          </a>

          <a
              class="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
              href="https://github.com/axel-vair/portfolio_v2"
              target="_blank"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
              <path d="M15 21V9"/>
              <path d="M6 6h.01"/>
              <path d="M18 6h.01"/>
            </svg>

            <h2 class="mt-4 text-xl font-bold text-black">Portfolio Nuxt</h2>

            <p class="mt-1 text-md text-gray-800">
              Mon portfolio personnel créé avec Nuxt.js. Ce site vitrine m'a permis
              d'explorer en profondeur les fonctionnalités de Nuxt.
            </p>
          </a>

          <a
              class="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
              href="#"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
            >
              <g transform="scale(1.1)">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </g>
            </svg>

            <h2 class="mt-4 text-xl font-bold text-black">À suivre</h2>

            <p class="mt-1 text-md text-gray-800">
              D'autres projets viendront à terme compléter cette sélection.
            </p>
          </a>
        </div>

        <div class="mt-12 text-center">
          <a
              href="https://github.com/axel-vair"
              target="_blank"
              class="inline-block rounded-full bg-black px-12 py-3 text-md font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Voir plus sur Github
          </a>
        </div>
      </div>
    </section>

    <section class="rounded-lg bg-slate-100 p-8 lg:mt-10">
      <h2 class="text-slate-800 mb-5 text-3xl font-bold">Contact</h2>
      <div class="flex flex-col md:flex-row items-center">
        <p class="text-lg text-slate-700 md:w-2/3 mb-4 md:mb-0 md:pr-4">Pour ne rien rater de mes annonces ou de mes projets. Suivez-moi sur Linkedin pour me poser une question ou simplement discuter de sujets techniques.</p>
        <div class="flex-grow flex justify-center items-center">
          <a :href="socialLinks.linkedin"
             target="_blank"
             rel="noreferrer"
             class="flex-shrink-0">
            <Icon name="bxl:linkedin" class="text-gray-500 hover:text-black transition duration-300" size="40"/>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>