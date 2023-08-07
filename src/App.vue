<template>
    <bugeur-componenet/>
    <router-view/>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
h1{
  font-family: 'Kurale', serif;


}
h2{
  font-family: 'Kurale', serif;





}


</style>
<script>

import BugeurComponenet from "@/components/BugeurComponenet.vue";
export default {
    name: 'App',
    components: {
        BugeurComponenet,
    },
}


</script>