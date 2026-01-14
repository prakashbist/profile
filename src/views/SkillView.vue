<template>
  <div class="portfolio">
    <div class="two-column-wrapper">

      <!-- LEFT: Education (70%) -->
      <Card class="education">
        <template #header>
          <h2>Education</h2>
        </template>

        <template #content>
          <div
            v-for="education in educations"
            :key="education.period"
            class="education-item"
          >
            <h3>{{ education.degree }}</h3>

            <p class="institution">
              <span>{{ education.institution }}</span>
              <span class="period">{{ education.period }}</span>
            </p>

            <p class="education-description">
              {{ education.description }}
            </p>
          </div>
        </template>
      </Card>

      <!-- RIGHT: Skills (30%) -->
      <Card class="skills">
        <template #header>
          <h2>Skills</h2>
        </template>

        <template #content>
          <div class="skills-list">
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
  </div>
</template>

<script setup>
const educations = [
  {
    degree: "BSc in Computer Science and Information Technology",
    institution: "Aberdeen International College, Lalitpur, Nepal",
    period: "2011 - 2015",
    description:
      "Equipped with strong programming skills in C, C++, Java, and Python, along with in-depth knowledge of operating systems, cloud computing, data structures, algorithms, databases, networking, and security. Experienced in software engineering principles and modern web technologies."
  },
  {
    degree: "Science (High School)",
    institution: "Aishwaraya Vidya Niketan, Dhanghadi, Nepal",
    period: "2016 - 2018",
    description:
      "Studied Physics, Mathematics, Chemistry, and Biology, developing analytical thinking, scientific reasoning, and problem-solving skills."
  }
];

const skills = [
  { name: "Java", icon: "fab fa-java", level: 90 },
  { name: "Spring", icon: "fas fa-leaf", level: 85 },
  { name: "JavaScript", icon: "fab fa-js", level: 80 },
  { name: "Vue.js", icon: "fab fa-vuejs", level: 75 },
  { name: "HTML", icon: "fab fa-html5", level: 85 },
  { name: "CSS", icon: "fab fa-css3-alt", level: 80 },
  { name: "MySQL", icon: "fas fa-database", level: 78 },
  { name: "PrimeFaces", icon: "fas fa-palette", level: 70 }
];
</script>

<style scoped>
.portfolio {
  padding: 40px 20px;
  background: #f5f6fa;
}

/* 70 - 30 layout */
.two-column-wrapper {
  margin: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
}

/* Cards */
.education,
.skills {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Education */
.education-item {
  margin-bottom: 25px;
}

.education h2,
.skills h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.education-item h3 {
  color: #34495e;
}

.institution {
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.education-description {
  line-height: 1.6;
  text-align: justify;
  color: #7f8c8d;
}

/* Skills */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #34495e;
}

.skill-name i {
  font-size: 1.2rem;
  color: #3498db;
}

.skill-percent {
  font-size: 0.85rem;
  color: #7f8c8d;
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
  .two-column-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
