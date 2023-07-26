<template>
  <div class="home">
    <h1>welcome</h1>
      <bouton-componenet text="hello"/>
  </div>
</template>

<script>

import BoutonComponenet from "@/components/BoutonComponenet.vue";

export default {

  name: 'HomeView',
    components: {BoutonComponenet},


}
</script>
