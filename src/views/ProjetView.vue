<template>


  <section>
    <header-components titre="Mes projets" soustitre="Voici mes projets réalisés en cours de formation"/>
    <GitHubProjects/>
  </section>
</template>

<script>

import GitHubProjects from '@/components/GithubProjet.vue';
import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
    name: 'ProjetView',
    components: {
      HeaderComponents,
        GitHubProjects,
    },
};
</script>
<style scoped>
.projet{
  margin-top:90px;
}

</style>