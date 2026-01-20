<template>
  <section class="section-wrapper">
    <h2 class="section-title">Skills</h2>

    <div class="card skills-card">
      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-item"
        >
          <div class="skill-header">
            <i :class="skill.icon" class="skill-icon"></i>
            <span class="skill-name">{{ skill.name }}</span>
          </div>

          <div class="skill-bar">
            <div
              class="skill-progress"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: "Java (SE/EE/Jakarta)", icon: "fab fa-java", level: 95 },
  { name: "Spring (Boot/Cloud/MVC)", icon: "fas fa-leaf", level: 95 },
  { name: "Quarkus & Microservices", icon: "fas fa-bolt", level: 85 },
  { name: "C/C++", icon: "fas fa-code", level: 80 },
  { name: "Hibernate & JDBC", icon: "fas fa-database", level: 90 },
  { name: "Socket Programming", icon: "fas fa-plug", level: 80 },
  { name: "Kafka", icon: "fas fa-network-wired", level: 90 },

  { name: "JSF/JSP (PrimeFaces)", icon: "fas fa-server", level: 85 },
  { name: "Vue.js (PrimeVue/Vuetify)", icon: "fab fa-vuejs", level: 90 },
  { name: "Angular", icon: "fab fa-angular", level: 85 },
  { name: "TypeScript/JavaScript/jQuery", icon: "fab fa-js", level: 90 },
  { name: "HTML5/CSS/Bootstrap", icon: "fab fa-html5", level: 95 },

  { name: "MySQL & MS-SQL", icon: "fas fa-table", level: 90 },
  { name: "Docker & Minicube", icon: "fab fa-docker", level: 85 },
  { name: "Jenkins & CI/CD", icon: "fab fa-jenkins", level: 85 },
  { name: "Git / Mercurial / SVN", icon: "fab fa-git-alt", level: 95 },
  { name: "Maven & Gradle", icon: "fas fa-box-open", level: 90 },
  { name: "Linux/Unix/Windows", icon: "fab fa-linux", level: 85 },
  { name: "WEKA (Data Mining)", icon: "fas fa-brain", level: 75 },

  { name: "JUnit/Mockito/TestNG", icon: "fas fa-check-double", level: 90 },
  { name: "JVM Profiling (JVisualVM/JRebel)", icon: "fas fa-microscope", level: 85 },
  { name: "Memory Analysis (HeapHero/GCeasy)", icon: "fas fa-memory", level: 85 },
  { name: "SonarQube & JaCoCo", icon: "fas fa-shield-alt", level: 85 },
  { name: "jMeter (Load Testing)", icon: "fas fa-tachometer-alt", level: 80 },

  { name: "Agile/Jira/Scrum", icon: "fas fa-tasks", level: 95 },
  { name: "System Design (Dia/Draw.IO/Miro)", icon: "fas fa-project-diagram", level: 90 },
  { name: "Mentoring & Leadership", icon: "fas fa-users", level: 95 },
  { name: "Problem Solving", icon: "fas fa-lightbulb", level: 95 },
  { name: "AWS & GCP", icon: "fas fa-cloud", level: 70 }
];
</script>

<style scoped>
/* ===== Common Section Wrapper (same as Experience & Projects) ===== */
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

/* ===== Card ===== */
.card {
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

/* ===== Skills Grid (3 Columns) ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* ===== Skill Item ===== */
.skill-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Header */
.skill-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: #34495e;
}

.skill-icon {
  font-size: 1.2rem;
  color: #3498db;
  width: 24px;
  text-align: center;
}

.skill-name {
  font-size: 1rem;
}

/* ===== Progress Bar ===== */
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

/* ===== Responsive ===== */
@media (max-width: 1024px) {
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