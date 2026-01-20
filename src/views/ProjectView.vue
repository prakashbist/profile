<template>
  <section class="section-wrapper">
    <h2 class="section-title">Personal Projects</h2>

    <div class="card-container">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card"
        @click="navigateToDetail(project.id)"
      >
        <img
          :src="project.imageSrc"
          class="card-logo"
          alt="Project"
        />

        <div class="card-body">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="project-link"
          >
            View Source Code
          </a>
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
const router = useRouter();

const navigateToDetail = (projectId) => {
  router.push({ name: 'ProjectDetail', params: { id: projectId } });
};

const projects = [
  {
    id: 1,
    name: 'Service Registry:',
    description: 'Built using Netflix Eureka to manage dynamic service registration and discovery.',
    imageSrc: petImg,
    link: 'https://bitbucket.org/prakashbistdeveloper/serviceregistry'
  },
  {
    id: 2,
    name: 'API Gateway',
    description: 'Developed using Spring WebFlux for non-blocking request routing, including custom filters and security integration.',
    imageSrc: saImg,
    link: 'https://bitbucket.org/prakashbistdeveloper/apigateway'
  },
  {
    id: 3,
    name: 'Authentication Module',
    description: 'Implemented secure login/logout, role-based access control, and JWT-based authentication with Spring Security.',
    imageSrc: customerReachImg,
    link: 'https://bitbucket.org/prakashbistdeveloper/workspace/projects/DA'
  },
  {
    id: 4,
    name: 'Config Server',
    description: 'Centralized external configuration management using Spring Cloud Config, supporting multiple environments.',
    imageSrc: hmsImg,
    link: 'https://bitbucket.org/prakashbistdeveloper/configserver'
  },
  {
    id: 5,
    name: 'DataFusion',
    description: 'Collects, transforms, and analyzes large volumes of data. Handles both batch and real-time processing.',
    imageSrc: hmsImg,
    link: 'https://bitbucket.org/prakashbistdeveloper/datafusion'
  },
  {
    id: 6,
    name: 'Scheduler',
    description: 'Automates periodic tasks such as data syncing, cleanup, and report generation using Spring Scheduler.',
    imageSrc: hmsImg,
    link: 'https://bitbucket.org/prakashbistdeveloper/workspace/projects/DA'
  }
];
</script>

<style scoped>
/* SAME CSS AS EXPERIENCE VIEW */

.section-wrapper {
  padding: 3rem 2rem;
  background: #f5f6fa;
  min-height: 90vh;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.card-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

.card-body h3 {
  margin: 0;
  font-size: 1.4rem;
  color: #34495e;
}

.card-body p {
  margin: 8px 0;
  font-size: 1rem;
  color: #666;
}

.project-link {
  color: #3498db;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>