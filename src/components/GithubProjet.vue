<template>

    <div class="body-projet">
        <h1 class="titel">Mes projets GitHub</h1>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <div class="card">
                    <div class="description">
                        <a :href="project.html_url" target="_blank"><h2>{{ project.name }}</h2></a>
                            <div class="infos">
                                <a v-if="project.homepage" :href="project.homepage" target="_blank"><p style="color: #FF9900; text-decoration: black underline"> vité le Site web</p></a>
                                <p v-else style="color: red; font-size: 1em">Pas de site web</p>
                                <p>{{ project.description }}</p>
                                <div class="languages">
                                    <div class="icons" v-for="(bytes, language) in projectLanguages[project.name]" :key="language">
                                        <Icon class="icon" :icon="getIconForLanguage(language)" />
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>



</template>

<script>
import axios from 'axios';


import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },

    data() {
        return {
            projects: [],
            projectLanguages: {},
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
                    this.projects.forEach(project => {
                        this.fetchLanguagesForProject(project);
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        },

        fetchLanguagesForProject(project) {
            const apiUrl = `https://api.github.com/repos/DalSchim/${project.name}/languages`;

            axios.get(apiUrl)
                .then(response => {
                    // Utiliser la notation d'index pour définir les langages
                    this.projectLanguages[project.name] = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },

        getIconForLanguage(language) {
            // Ici, mappez les noms de langage aux noms d'icônes Iconify
            const iconMappings = {
                HTML:'logos:html-5',
                JavaScript: 'vscode-icons:file-type-js',
                python: 'logos:python',
                SCSS: 'logos:sass',
                CSS: 'logos:css-3',
                Vue: 'logos:vue',

                // Ajoutez des mappages pour d'autres langages si nécessaire
            };

            return iconMappings[language] || 'default-icon'; // Remplacez 'default-icon' par l'icône par défaut
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
    width: 300px;
    height: 300px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transition: 0.5s;

}


a{

    color: black;
    font-family: 'Kurale', serif;
    text-decoration: none;

}

.titel{
    color: white;
    font-size: 2em;
    font-family: 'Kurale', serif;
    margin-bottom: 64px;


}

.body-projet{
    background: #1E1E1E;
}


.description{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

li{
    display: flex;
    align-items: center;
    justify-content: center;
}

ul{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));




}


.languages{
    display: flex;
    justify-content: center;
    align-items: center;}

.icon{
    font-size: 2em;
    margin: 5px;
}

h1,h2{
    text-align: center;
    font-size: 1.5em;

}

.infos{
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 100%;
}

</style>
