<template>
  <div class="body-projet">
    <h1 class="titel">Mes projets GitHub</h1>
    <!-- Boutons de filtre -->
    <div class="filter-buttons">
      <button @click="filterProjects('All')" :class="{ active: selectedFilter === 'All' }">Tous</button>
      <button @click="filterProjects('HTML')" :class="{ active: selectedFilter === 'HTML' }">HTML</button>
      <button @click="filterProjects('JavaScript')" :class="{ active: selectedFilter === 'JavaScript' }">JavaScript</button>
      <button @click="filterProjects('Python')" :class="{ active: selectedFilter === 'Python' }">Python</button>
      <button @click="filterProjects('SCSS')" :class="{ active: selectedFilter === 'SCSS' }">SCSS</button>
      <button @click="filterProjects('CSS')" :class="{ active: selectedFilter === 'CSS' }">CSS</button>
      <button @click="filterProjects('Vue')" :class="{ active: selectedFilter === 'Vue' }">Vue</button>
      <button @click="filterProjects('PHP')" :class="{ active: selectedFilter === 'PHP' }">PHP</button>
      <button @click="filterProjects('TypeScript')" :class="{ active: selectedFilter === 'TypeScript' }">TypeScript</button>
      <button @click="filterProjects('Blade')" :class="{ active: selectedFilter === 'Blade' }">Blade</button>
      <!-- Ajoutez des boutons pour d'autres langages si nécessaire -->
    </div>
    <ul>
      <li v-for="project in filteredProjects" :key="project.id">
        <div class="card">
          <div class="description">
            <a :href="project.html_url" target="_blank"><h2>{{ project.name }}</h2></a>
            <div class="infos">
              <a v-if="project.homepage" :href="project.homepage" target="_blank"><p style="color: #FF9900; ">Visitez le
                Site web</p></a>
              <p v-else style="color: red; font-size: 1em">Pas de site web</p>
              <p>{{ project.description }}</p>
              <div class="languages">
                <div class="icons" v-for="(bytes, language) in projectLanguages[project.name]" :key="language">
                  <Icon class="icon" :icon="getIconForLanguage(language)"/>
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
// céez un écrant de chargement pour les projets

import axios from 'axios';
import {Icon} from '@iconify/vue';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      projects: [],
      projectLanguages: {},
      filters: [
        'All',
        'HTLL',
        'JavaScript',
        'Python',
        'SCSS',
        'CSS',
        'Vue',
        'PHP',
        'Blade',
        'TypeScript',
        // Ajoutez d'autres langages si nécessaire
      ],
      selectedFilter: 'All',
    };
  },

  // si le langage est égale à tous les projets sont affichés
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => {
        return this.projectLanguages[project.name] && this.projectLanguages[project.name][this.selectedFilter];
      });
    },
  },

  mounted() {
    this.fetchProjects();
  },

  methods: {
    filterProjects(language) {
      this.selectedFilter = language;
    },

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
            this.projectLanguages[project.name] = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },

    getIconForLanguage(language) {
      const iconMappings = {
        HTML: 'logos:html-5',
        JavaScript: 'vscode-icons:file-type-js',
        Python: 'logos:python',
        SCSS: 'logos:sass',
        CSS: 'logos:css-3',
        Vue: 'logos:vue',
        PHP: 'logos:php',
        Blade: 'vscode-icons:file-type-blade',
        TypeScript: 'logos:typescript-icon',
        // Ajoutez d'autres mappages pour d'autres langages si nécessaire
      };

      return iconMappings[language] || 'default-icon';
    },
  },
};
</script>

<style scoped>
/* Vos styles existants ... */

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-buttons button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 5px;
  padding: 5px 10px;
  color: white;
}

.filter-buttons button.active {
  background-color: #333;
  color: #FF9900;
}

.card {
  width: 300px;
  height: 300px;
  background: #333;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  transition: 0.5s;
}

.card:hover {
  box-shadow: 0 0 20px #FF9900;
  transform: scale(1.1);;
}

a {
  color: black;
  font-family: 'Kurale', serif;
  text-decoration: none;
}

.titel {
  color: white;
  font-size: 2em;
  font-family: 'Kurale', serif;
  margin-bottom: 64px;
}

.body-projet {
  background: #1E1E1E;
  transition: height 0.5s ease-in-out;
  height: auto;
  padding:  8px 32px;
  width: 100vw;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.languages {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 2em;
  margin: 5px;
}

h1, h2 {
  text-align: center;
  font-size: 1.5em;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 100%;
}
/* Autres styles ... */
</style>
