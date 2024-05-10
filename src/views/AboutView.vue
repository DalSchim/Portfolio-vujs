<template>
  <HeaderComponents titre="A propos de moi"/>
  <section id="profile">
    <div class="container">
      <div class="about">
        <div class="about-img">
          <transition name="fade" mode="out-in">
            <img v-if="show" src="../assets/new.png" alt="photo de profil">
          </transition>
        </div>
        <div class="about-text">
          <h2>Qui suis-je ?</h2>
          <p> Je suis un jeune developeur travailant principalement sur des projets front-end </p>
        </div>
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
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}

</script>
<style scoped lang="scss">
section {
  background-color: #1E1E1E;
}

.container {
  margin: 0 auto;
  max-width: 920px;
  justify-content: center;
  display: flex;

  gap: 20px;

  .about {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 20px;
  }

  .about-text {
    h2 {
      font-size: 30px;
      color: #fff;
      font-weight: 400;
    }

    p {
      color: #fff;
      font-size: 20px;
    }

  }
  .about-img {
    margin: 32px 16px;
    img {
      width: 450px;
      height: 450px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

}


</style>
