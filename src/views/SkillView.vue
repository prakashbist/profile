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
  // Backend & Architecture
  { name: "Java (SE/EE/Jakarta)", icon: "fab fa-java", level: 95 }, // [cite: 17, 18, 19]
  { name: "Spring (Boot/Cloud/MVC)", icon: "fas fa-leaf", level: 95 }, // [cite: 18, 19]
  { name: "Quarkus & Microservices", icon: "fas fa-bolt", level: 85 }, // [cite: 19, 182]
  { name: "C/C++", icon: "fas fa-code", level: 80 }, // [cite: 15, 16, 141]
  { name: "Hibernate & JDBC", icon: "fas fa-database", level: 90 }, // [cite: 68, 81]
  { name: "Socket Programming", icon: "fas fa-plug", level: 80 }, // [cite: 94, 96]
  { name: "Kafka", icon: "fas fa-network-wired", level: 90 }, // [cite: 89, 90, 98]

  // Frontend & UI
  { name: "JSF/JSP (PrimeFaces)", icon: "fas fa-server", level: 85 }, // [cite: 20]
  { name: "Vue.js (PrimeVue/Vuetify)", icon: "fab fa-vuejs", level: 90 }, // [cite: 22]
  { name: "Angular", icon: "fab fa-angular", level: 85 }, // [cite: 21]
  { name: "TypeScript/JavaScript/jQuery", icon: "fab fa-js", level: 90 }, // [cite: 61, 62, 64]
  { name: "HTML5/CSS/Bootstrap", icon: "fab fa-html5", level: 95 }, // [cite: 23, 24, 60]

  // Data & Infrastructure
  { name: "MySQL & MS-SQL", icon: "fas fa-table", level: 90 }, // [cite: 65, 66]
  { name: "Docker & Minicube", icon: "fab fa-docker", level: 85 }, // [cite: 121, 122, 124]
  { name: "Jenkins & CI/CD", icon: "fab fa-jenkins", level: 85 }, // [cite: 80, 125]
  { name: "Git / Mercurial / SVN", icon: "fab fa-git-alt", level: 95 }, // 
  { name: "Maven & Gradle", icon: "fas fa-box-open", level: 90 }, // [cite: 82, 85]
  { name: "Linux/Unix/Windows", icon: "fab fa-linux", level: 85 }, // [cite: 123, 141]
  { name: "WEKA (Data Mining)", icon: "fas fa-brain", level: 75 }, // 

  // Performance & Quality
  { name: "JUnit/Mockito/TestNG", icon: "fas fa-check-double", level: 90 }, // [cite: 99, 104, 108]
  { name: "JVM Profiling (JVisualVM/JRebel)", icon: "fas fa-microscope", level: 85 }, // [cite: 134, 135, 137]
  { name: "Memory Analysis (HeapHero/GCeasy)", icon: "fas fa-memory", level: 85 }, // [cite: 140, 141]
  { name: "SonarQube & JaCoCo", icon: "fas fa-shield-alt", level: 85 }, // [cite: 111, 127]
  { name: "jMeter (Load Testing)", icon: "fas fa-tachometer-alt", level: 80 }, // [cite: 110]

  // Leadership & System Design
  { name: "Agile/Jira/Scrum", icon: "fas fa-tasks", level: 95 }, // 
  { name: "System Design (Dia/Draw.IO/Miro)", icon: "fas fa-project-diagram", level: 90 }, // 
  { name: "Mentoring & Leadership", icon: "fas fa-users", level: 95 }, // [cite: 28, 37, 141]
  { name: "Problem Solving", icon: "fas fa-lightbulb", level: 95 } // [cite: 28, 141, 175]
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
