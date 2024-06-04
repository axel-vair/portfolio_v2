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

    <div class="flex mb-20">
      <div>
        <img src="/public/img/angular_logo_icon.png">
      </div>
      <div>
        <img src="/public/img/boot_spring_logo_icon.png">
      </div>
      <div>
        <img src="/public/img/electron_logo_icon.png">
      </div>
      <div>
        <img src="/public/img/symfony_logo_icon.png">
      </div>
      <div>
        <img src="/public/img/vuejs_icon.png">
      </div>
    </div>
    <hr>

    <section class="">
      <template>
        <UCard>
          <template #header>
            <Placeholder class="h-8" />
          </template>

          <Placeholder class="h-32" />

          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </template>
    </section>


  </main>

</template>

<script setup lang="ts">
</script>