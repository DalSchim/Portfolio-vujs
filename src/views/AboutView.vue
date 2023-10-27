<script>
import HeaderComponents from "@/components/HeaderComponents.vue";

export default {
    name: 'AboutView',
    components: {HeaderComponents},
    
}

</script>

<template>
    <header-components titre="Who I am"></header-components>
    <section class="me">
        <div class="inform">
            <h2 class="">About Me</h2>
            <p class="text">
                I am a web developer, I am passionate about the web and new technologies. I am a person who likes to learn new things and who is not afraid of challenges. I am a person who likes to work in a team and who is not afraid to ask for help when needed. I am a person who likes to learn new things and who is not afraid of challenges. I am a person who likes to work in a team and who is not afraid to ask for help when needed.
            </p>
        </div>
        <div class="photo">
            <img class="image" src="src/assets/new.png" alt="">
        </div>
    </section>
</template>

<style scoped>
.me {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
    background: #1E1E1E;
}

.inform{
    color: white;
    padding: 64px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.photo{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}


</style>