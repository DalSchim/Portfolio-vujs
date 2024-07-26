<script>
import axios from "axios";

export default {
  name: 'MyskillView',

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
  <div>

  </div>
</template>
<style>

</style>