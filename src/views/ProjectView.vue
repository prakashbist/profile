<template>
  <section id="my-projects">
    <h2 class="section-title">Projects</h2>
    <div class="projects-container">
      <div v-for="project in projects" :key="project.id" class="project-card"
      @click="navigateToDetail(project.id)">
        <img :src="project.imageSrc" alt="Project Image" class="project-img">
        <div class="project-info">
          <h3 class="project-name">{{ project.name }}</h3>
         <p>{{ project.description }}</p>      <!-- Dynamic binding -->
          <a :href="project.link" target="_blank" class="project-link">View Source Code GitHub</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import petImg from '@/assets/project.png';
import saImg from '@/assets/project.png';
import customerReachImg from '@/assets/project.png';
import hmsImg from '@/assets/project.png';

import { useRouter } from "vue-router";

const router = useRouter(); //useRouter() hook for navigation

const navigateToDetail = (projectId) => {
  router.push({ name: 'ProjectDetail', params: { id: projectId } });
};

const projects = [
  {
    id: 1,
    name: 'Service Registry:',
    description: 'Built using Netflix Eureka to manage dynamic service registration and discovery.',
    imageSrc: petImg,
    link: 'https://github.com/Shrijanaa1/PersonalExpenseTracker'
  },
  {
    id: 2,
    name: 'API Gateway',
    description: 'Developed using Spring WebFlux for non-blocking request routing, including custom filters and security integration.',
    imageSrc: saImg,
    link: 'https://github.com/Shrijanaa1/Sentiment-Analysis-Web-App'
  },
  {
    id: 3,
    name: 'Authentication Module',
    description: 'Implemented secure login/logout, role-based access control, and JWT-based authentication with Spring Security.',
    imageSrc: customerReachImg,
    link: 'https://github.com/Shrijanaa1/CustomerReach'
  },
  {
    id: 4,
    name: 'Config Server',
    description: 'Centralized external configuration management using Spring Cloud Config, supporting multiple environments.',
    imageSrc: hmsImg,
    link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
  },
  {
    id: 5,
    name: 'DataFusion',
    description: 'Collects, transforms, and analyzes large volumes of data. Handles both batch and real-time processing.',
    imageSrc: hmsImg,
    link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
  },
  {
    id: 6,
    name: 'Scheduler',
    description: 'Automates periodic tasks such as data syncing, cleanup, and report generation using Spring Scheduler.',
    imageSrc: hmsImg,
    link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
  }
  
];
</script>

<style scoped>

#my-projects {
  padding: 20px;
  background-color: #f0f0f5;
  //height: 100vh;
}

h2.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  cursor: pointer;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(50% - 20px);
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.project-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-info h3.project-name {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.project-info p {
  font-size: 1.1rem;
  color: #666;
}

.project-link {
  margin-top: 10px;
  font-size: 16px;
  color: #3498db;
  text-decoration: none;
  display: inline-block;
}

.project-link:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 768px) {
  .project-card {
    width: calc(100% - 20px);
    flex-direction: column;
    text-align: center;
  }

  .project-img {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .project-info h3.project-name {
    font-size: 1.25rem;
  }

  .project-info p {
    font-size: 1rem;
  }

  .projects-container {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  h2.section-title {
    font-size: 1.5rem;
  }

  .project-card {
    padding: 10px;
  }

  .project-info {
    padding: 10px;
  }

  .project-info h3.project-name {
    font-size: 1.2rem;
  }

  .project-info p {
    font-size: 0.9rem;
  }
}
</style>
