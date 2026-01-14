<template>
  <div class="home">
    <section class="intro">
      <img src="@/assets/profile.jpg" alt="Prakash Bist" class="profile-image" />
      <h1>Prakash Bist</h1>
      <p>Principal Software Engineer | Computer Science UnderGraduate</p>
      <p class="description-text" style="text-align: justify;">
        Highly accomplished Principal Software Engineer with over 10+ years of experience architecting, delivering, and scaling high-availability enterprise and fintech platforms. Deep expertise in the Java ecosystem (Java EE, Spring Boot, Spring Cloud, Quarkus) and modern frontend frameworks (Angular, Vue.js, with strong experience in JSF and JSP). A proven technical leader with a consistent record of reducing technical debt, improving system performance, and building high-performing engineering teams. Adept at aligning long-term technical strategy with business objectives, regulatory requirements, and feasibility-driven case studies.
      </p>
      <RouterLink to="/experience">
        <Button label="View My Experience" class="custom-button p-button-raised" />
      </RouterLink>
    </section>
  </div>

  
  <ExperienceView />
  <ProjectView />
  <SkillView />
  <AboutView />
  <ContactView />
</template>

<script setup>

import ExperienceView from "@/views/ExperienceView.vue";
import ProjectView from "@/views/ProjectView.vue";
import SkillView from "@/views/SkillView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  margin-top: 20px;
}

h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 0;
  margin-top: 5px;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #666;
}

.custom-button {
  background-color: #3498db !important;
  border: none !important;
  color: white !important;
  font-size: 1.1rem !important;
  font-weight: bold !important;
  padding: 10px 20px !important;
  border-radius: 4px !important;
  margin-top: 15px !important;
}

.custom-button:hover {
  background-color: #2980b9;
}

.custom-button:focus {
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
}
.description-text {
  font-size: 1.3rem;
  color: #888;
  max-width: 900px;
  margin: 10px auto;
  padding: 0 20px;
  line-height: 1.6;
}
</style>
