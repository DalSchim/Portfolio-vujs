<template>
    <div>
        <h1>Mes projets GitHub</h1>
        <ul>
            <li class="w-full" v-for="project in projects" :key="project.id">
                <div class="card">
                    <div class="description">
                        <a :href="project.html_url" target="_blank"><h2>{{ project.name }}</h2></a>
                        <a v-if="project.homepage" :href="project.homepage" target="_blank"><p>Site web</p></a>
                        <p v-else>Pas de site web</p>
                        <p>{{ project.description }}</p>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';


export default {

    data() {
        return {
            projects: [],
        };
    },
    mounted() {
        this.fetchProjects();


    },
    methods: {
        fetchProjects() {
            const apiUrl = 'https://api.github.com/users/DalSchim/repos';

            axios.get(apiUrl)
                .then(response => {
                    this.projects = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },



};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.card{
    border: black solid 1px;
    background: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    height: 100px;
    display: flex;
    align-items: end;


}

ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;

}

</style>
