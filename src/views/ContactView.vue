<script>


import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
  name: "ContactView",
  components: {HeaderComponents,}
}
</script>

<template>
  <HeaderComponents titre="Contact" soustitre="Contactez moi"/>
  <section class="contact">
    <div class="container">
      <div class="contact-form">
        <form action="">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Votre email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message"></textarea>
          </div>
          <button class="btn">Envoyer</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.container {
  width: 100%;
  max-width: 600px;
  padding: 0 20px;

}

.contact-form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ff9900;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-family: 'Kurale', serif;
  display: block;
  margin-bottom: 5px;
}

.form-group input, .form-group textarea {
  font-family: 'Kurale', serif;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background: #ff6600;
}

@media screen and (max-width: 900px){
  .contact-form {
    padding: 10px;
  }
  .form-group input, .form-group textarea {
    padding: 5px;
  }
  .btn {
    padding: 5px;
  }

}

</style>