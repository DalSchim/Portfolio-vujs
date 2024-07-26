<script>
import axios from "axios";
import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
  name: 'MyskillView',
  components: {HeaderComponents},

  methods: {},

  mounted() {
    /*connection a git hub*/
    axios.get('https://api.github.com/users/Abdoulaye-BA/repos')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })

  }
};
</script>
<template>
  <header-components titre="My skill"/>
</template>
<style>

</style>