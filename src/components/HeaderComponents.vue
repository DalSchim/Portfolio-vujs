<template>
  <header>
    <div class="title">
      <h1> {{ titre }}</h1>
      <h2> {{ soustitre }}</h2>
    </div>
    <div class="social-media">
      <a href="https://github.com/DalSchim">
        <Icon width="32px" color="white" icon="line-md:github-loop"/>
      </a>
      <a href="https://www.linkedin.com/in/guillaume-gonidou/">
        <Icon width="32px" color="white" icon="line-md:linkedin"/>
      </a>
    </div>
    <div class="iframe">
      <iframe src='https://my.spline.design/untitled-f9040009614a4614ffd85e48545c542d/' frameborder='0' width='100%' height='100%'></iframe>
    </div>
    <div class="box"></div>
  </header>

</template>
<script>
import {Icon} from '@iconify/vue';

export default {
  name: "HeaderComponents",
  components: {
    Icon,
  },
  props: {
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: black;

}

.iframe {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

header {
  position: relative;
  display: flex;
  gap: 32px;
  height: 100vh;
  width: 100vw;
  color: white;
}

.title {
  z-index:12 ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
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

h2 {
  font-family: 'Kurale', serif;
  font-size: 30px;
  color: #fff;
  font-weight: 400;
  text-shadow: 0 0 10px #fff,
  0 0 20px #fff,
  0 0 100px #ff9900,
  0 0 150px #ff9900;
}


.social-media {
  position: absolute;
  bottom: 16px;
  right: 20px;
}

@media screen and (max-width: 900px) {
  h1 {
    text-align: center;
    font-size: 30px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
  }
}
</style>