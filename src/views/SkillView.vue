<template>
  <div class="portfolio">

    <!-- Skills Section -->
    <Card class="skills">
      <template #header>
        <h2>Skills</h2>
      </template>

      <template #content>
        <div class="skills-grid">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="skill-item"
          >
            <div class="skill-header">
              <div class="skill-name">
                <i :class="skill.icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            </div>

            <div class="skill-bar">
              <div
                class="skill-progress"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </template>
    </Card>

  </div>
</template>

<script setup>
const skills = [
  // Languages
  { name: "Java", icon: "fab fa-java", level: 95 },
  { name: "C++", icon: "fas fa-code", level: 85 },
  { name: "C", icon: "fas fa-terminal", level: 80 },
  { name: "JavaScript", icon: "fab fa-js", level: 90 },
  { name: "TypeScript", icon: "fas fa-file-code", level: 85 },
  { name: "Python", icon: "fab fa-python", level: 75 },

  // Frameworks & Libraries
  { name: "Spring Boot", icon: "fas fa-leaf", level: 95 },
  { name: "Spring Cloud", icon: "fas fa-cloud", level: 90 },
  { name: "JakartaEE", icon: "fas fa-server", level: 85 },
  { name: "Quarkus", icon: "fas fa-bolt", level: 80 },
  { name: "Angular", icon: "fab fa-angular", level: 85 },
  { name: "Vue.js", icon: "fab fa-vuejs", level: 90 },
  { name: "Hibernate", icon: "fas fa-database", level: 90 },

  // UI Components
  { name: "PrimeVue", icon: "fas fa-palette", level: 90 },
  { name: "PrimeFaces", icon: "fas fa-gem", level: 85 },
  { name: "Vuetify", icon: "fab fa-vuejs", level: 80 },
  { name: "Bootstrap", icon: "fab fa-bootstrap", level: 90 },
  { name: "HTML", icon: "fab fa-html5", level: 95 },
  { name: "CSS", icon: "fab fa-css3-alt", level: 90 },

  // Tools & Infrastructure
  { name: "Docker", icon: "fab fa-docker", level: 85 },
  { name: "Jenkins", icon: "fab fa-jenkins", level: 80 },
  { name: "Kafka", icon: "fas fa-stream", level: 80 },
  { name: "MySQL", icon: "fas fa-database", level: 90 },
  { name: "MS-SQL", icon: "fas fa-table", level: 85 },
  { name: "Git", icon: "fab fa-git-alt", level: 90 }
];
</script>

<style scoped>
.portfolio {
  padding: 4rem 2rem 2rem 2rem; /* top padding larger to avoid navbar overlap */
  background-color: white;
  color: #333;
  min-height: 92vh;
  box-sizing: border-box;
}

/* Skills Card */
.skills {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Header */
.skills h2 {
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

/* Skills grid in 3 columns */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Skill item */
.skill-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #34495e;
}

.skill-name {
  display: flex;
  align-items: center;
  gap: 12px; /* This creates a consistent 12px gap between the icon and text */
}

.skill-name i {
  font-size: 1.2rem;
  color: #3498db;
  width: 24px; /* Optional: Setting a fixed width keeps text aligned if icons vary in width */
  text-align: center;
}

/* Skill bar */
.skill-bar {
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #5dade2);
  border-radius: 4px;
  transition: width 0.6s ease;
}

/* Responsive */
@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
