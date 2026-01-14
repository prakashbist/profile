<template>
  <section class="project-detail">
    <h1>{{project.name}}</h1>
    <img :src="project.imageSrc" alt="Project Image" class="project-img-detail">
    <div class="project-info">
      <p><strong>Description:</strong> {{ project.description }}</p>
      <p><strong>Technologies Used:</strong> {{ project.languages }}</p>
      <a :href="project.link" target="_blank" class="project-link-detail">View Source Code</a>
    </div>
  </section>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import petImg from "@/assets/project.png";
import saImg from "@/assets/project.png";
import customerReachImg from "@/assets/project.png";
import hmsImg from "@/assets/project.png";

const projects = [
   {
    id: 1,
    name: 'Service Registry:',
    description: 'Built using Netflix Eureka to manage dynamic service registration and discovery.',
    imageSrc: petImg,
    languages: 'Java',
    link: 'https://bitbucket.org/prakashbistdeveloper/serviceregistry'
  },
  {
    id: 2,
    name: 'API Gateway',
    description: 'Developed using Spring WebFlux for non-blocking request routing, including custom filters and security integration.',
    imageSrc: saImg,
    languages: 'Java',
    link: 'https://bitbucket.org/prakashbistdeveloper/apigateway'
  },
  {
    id: 3,
    name: 'Authentication Module',
    description: 'Implemented secure login/logout, role-based access control, and JWT-based authentication with Spring Security.',
    imageSrc: customerReachImg,
    languages: 'Java',
    link: 'https://bitbucket.org/prakashbistdeveloper/workspace/projects/DA'
  },
  {
    id: 4,
    name: 'Config Server',
    description: 'Centralized external configuration management using Spring Cloud Config, supporting multiple environments.',
    imageSrc: hmsImg,
    languages: 'Java',
    link: 'https://bitbucket.org/prakashbistdeveloper/configserver'
  },
  {
    id: 5,
    name: 'DataFusion',
    description: 'Collects, transforms, and analyzes large volumes of data. Handles both batch and real-time processing.',
    imageSrc: hmsImg,
    languages: 'Java',
    link: 'https://bitbucket.org/prakashbistdeveloper/datafusion'
  },
  {
    id: 6,
    name: 'Scheduler',
    description: 'Automates periodic tasks such as data syncing, cleanup, and report generation using Spring Scheduler.',
    imageSrc: hmsImg,
    languages: 'Java',
    link: 'https://bitbucket.org/prakashbistdeveloper/workspace/projects/DA'
  } 
];

const route = useRoute();  //Access current route details
const projectId = route.params.id; //Extract id of the project from route parameters

//computed() computes a value based on its dependencies(Here it filters projects array by projectId)
const project = computed(() => projects.find(p => p.id === parseInt(projectId)));

</script>

<style scoped>

.project-detail {
  background-color: #f5f5f5;
  color: black;
  padding: 20px;
  height: 100vh;
}

.project-detail h1 {
  text-align: center;
  font-size: 2rem;
}

.project-img-detail {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.project-info {
  margin-top: 20px;
  font-size: 1.2rem;
}

.project-usage ol {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
}

.project-link-detail {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

.project-link-detail:hover {
  text-decoration: underline;
}
</style>
