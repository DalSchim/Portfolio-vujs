<template>
  <HeaderComponents titre="A propos de moi"/>
  <section id="profile">
    <div class="container">
      <div class="profil-contain">
        <img class="img-p" src="../assets/new.png" alt="ma photo de profil">
      </div>
    </div>
  </section>

</template>
<script>
import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
  // recuper tous les infmation sur les langage que je maitrise et les affichher avec un slider
  name: 'AboutView',
  components: {
    HeaderComponents
  },
}


</script>
<style scoped lang="scss">
#profile {
  height: 75vh;
}

section {
  background-color: #1E1E1E;
}

.container{
  width: 100%;
  height: 100%;
}

.profil-contain{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.img-p {
  height: 100%;


}
</style>
