<template>
  <header>
    <h1> {{titre}}</h1>
    <h2> {{soustitre}}</h2>
  </header>
</template>

<script>
export default {
  name: "HeaderComponents",
  props:{
    soustitre: {
      type: String,
      default: ""
    },
    titre: {
      type: String,
      default: "None"
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  width: 100vw;
  background: url("../../Img.jpg");
  background-size: cover;
  background-position: center;
  color: white;
}
h1{
  font-family: 'Kurale', serif;
  font-size: 50px;
  color: #fff;
  text-shadow: 0 0 10px #fff,
  0 0 20px #fff,
  0 0 70px #ff9900,
  0 0 80px #ff9900,
  0 0 100px #ff9900,
  0 0 150px #ff9900;
}
h2{
  font-family: 'Kurale', serif;
  font-size: 30px;
  color: #fff;
  font-weight: 400;
  text-shadow: 0 0 10px #fff,
  0 0 20px #fff,
  0 0 100px #ff9900,
  0 0 150px #ff9900;
}

@media screen and (max-width: 900px){
  h1{
    text-align: center;
    font-size: 30px;
  }
  h2{
    text-align: center;
    font-size: 20px;
  }
}
</style>