<script>
import HeaderComponents from "@/components/HeaderComponents.vue";


export default {
  name: "MyskillView",
  components: {HeaderComponents},
  //fetche repos languages from github
}
</script>

<template>
  <HeaderComponents titre="My Skills"/>
  <section>
    <h1>My Skills</h1>
    <div class="skills">
      <div class="skill" v-for="(level, skill) in skills" :key="skill">
        <h2>{{ skill }}</h2>
        <div class="bar">
          <div class="progress" :class="getLevelColor(level)" :style="{ width: level + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .skill {
    width: 100%;
    margin-bottom: 20px;
  }

  .bar {
    background-color: #f1f1f1;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: green;
  }

  .progress.orange {
    background-color: orange;
  }

  .progress.red {
    background-color: red;
  }

  h1 {
    text-align: center;
  }

  h2 {
    margin: 0;
  }

  section {
    padding: 20px;
  }




</style>