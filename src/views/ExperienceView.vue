<template>
  <section class="section-wrapper">
    <h2 class="section-title">Work Experience</h2>

    <div class="card-container">
      <div
        v-for="item in experiences"
        :key="item.role"
        class="card"
      >
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <img
            :src="item.imageSrc"
            alt="Company Logo"
            class="card-logo"
          />
        </a>

        <div class="card-body">
          <h3>{{ item.role }}</h3>
          <h4>{{ item.organisation }}</h4>
          <p>{{ item.startDate }} – {{ item.endDate }}</p>
          <ul>
            <li v-for="exp in item.experiences" :key="exp">
              {{ exp }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import synergyImg from '@/assets/synergy.png';
import softhoverImg from '@/assets/softhover.jpg';

const experiences = [
  {
    role: "Principal Software Engineer",
    organisation: "Synergy Tech Software",
    url:"https://synergytechsoft.com.np/",
    startDate: "July, 2025",
    endDate: "Present",
    experiences: [
      "Designed, developed, and delivered a fully automated Buy Now Pay Later (BNPL) for Android devices within 6 months, enabling seamless transactions, automated lock/unlock on due dates and settlement, and real-time integration with multiple wallet APIs.",
      "Reduced CI/CD deployment overhead across BNPL services and components using Docker Compose.",
      "Conducted comprehensive feasibility studies (business, cost, and technical) for a DLC application within a BNPL platform, enabling owner-level device control.",
      "Lead refactoring, performance optimization, and automated testing initiatives for core banking modules.",
      "Mentored engineering leads and senior developers, supporting them through complex technical challenges and career growth.",
      "Represented engineering in strategic decision-making, technology evaluations, and stakeholder discussions."
    ],
    imageSrc: synergyImg
  },
  {
    role: "Lead Software Engineer",
    organisation: "Synergy Tech Software",
    url:"https://synergytechsoft.com.np/",
    startDate: "Dec, 2022",
    endDate: "July, 2025",
    experiences: [
      "Designed, developed and delivered an automated Loan Appraisal system (LMS) with multi-role approval workflows and end-to-end document management for banking and finance.",
      "Developed and enhanced scalable components and services based on evolving business requirements.",
      "Lead multiple projects and engineering teams, ensuring on-time, in-scope, high-quality delivery.",
      "Reviewed features, verified unit testing, approved merge requests, and validated technical implementations, ensuring adherence to coding standards, security best practices, and scalable architecture principles.",
      "Defined and monitored KPIs to improve team performance, and supported recruitment through technical interviews and onboarding of new team members."
    ],
    imageSrc: synergyImg
  },
  {
    role: "Senior Software Engineer",
    organisation: "Synergy Tech Software",
    url:"https://synergytechsoft.com.np/",
    startDate: "Dec, 2020 ",
    endDate: "Dec, 2022",
    experiences: [
      "Designed, developed, and stabilized multiple projects, modules, and components, including Fixed Assist, Inventory, Staff Evaluation, Audit/Monitoring, Payment Gateways, Jobboard, and more.",
      "Continuously improved test coverage across projects, modules, and components to ensure robust and reliable software. Reviewed code, fixed bugs, ensured code quality, and mentored junior developers for best practices and technical growth.",
      "Contributed to CI/CD and DevOps processes, streamlining deployment, automation, and operational efficiency.",
      "Review code, fix bugs, and ensure code quality.",
      "Guide junior developers and share technical knowledge.",
      "Solve technical issues and improve system performance."
    ],
    imageSrc: synergyImg
  },
  {
    role: "Mid-Level Software Engineer",
    organisation: "Synergy Tech Software",
    url:"https://synergytechsoft.com.np/",
    startDate: "Dec, 2017 ",
    endDate: "Dec, 2020",
    experiences: [
      "Own modules and deliver assigned features.",
      "Build secure APIs and integrate remote services.",
      "Improve performance through query and code optimization.",
      "Participate in CI/CD setup and deployment processes.",
      "Collaborate with teams for smooth project delivery."
    ],
    imageSrc: synergyImg
  },
  {
    role: "Junior Software Engineer",
    organisation: "Synergy Tech Software",
    url:"https://synergytechsoft.com.np/",
    startDate: "Dec, 2015 ",
    endDate: "Dec, 2017",
    experiences: [
      "Assist in requirement analysis, coding, and testing.",
      "Fix bugs and support feature development.",
      "Learn and apply best coding practices and version control.",
      "Support deployment and documentation tasks."
    ],
    imageSrc: synergyImg
  }
];
</script>

<style scoped>
/* ===== Common Section Wrapper ===== */
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

/* ===== Grid Layout ===== */
.card-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

/* ===== Card ===== */
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

/* ===== Logo ===== */
.card-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

/* ===== Content ===== */
.card-body {
  flex: 1;
}

.card-body h3 {
  margin: 0;
  font-size: 1.4rem;
  color: #34495e;
}

.card-body h4 {
  margin: 6px 0;
  font-size: 1.1rem;
  color: #7f8c8d;
}

.card-body p {
  margin: 6px 0;
  font-size: 0.95rem;
  color: #7f8c8d;
}

.card-body ul {
  padding-left: 18px;
  margin-top: 8px;
}

.card-body li {
  font-size: 1rem;
  margin-bottom: 6px;
  color: #555;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .card-body ul {
    padding-left: 0;
    list-style: none;
  }
}
</style>