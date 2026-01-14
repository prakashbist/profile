<template>
  <section class="experience">
  <h2>Work Experience</h2>

  <div
    class="experience-container"
    style="
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    "
  >
    <div
      v-for="item in experiences"
      :key="item.role"
      class="experience-card"
      style="
        display: flex;
        gap: 16px;
        padding: 16px;
        border-radius: 8px;
        background: #fff;
      "
    >
    <a :href="item.url" target="_blank" rel="noopener noreferrer" >
      <img
        :src="item.imageSrc"
        alt="Company Logo"
        class="company-logo"
        style="width: 60px; height: 60px; object-fit: contain;"
      />
     </a>

      <div class="experience-details">
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
    startDate: "Dec, 2016 ",
    endDate: "Dec, 2017",
    experiences: [
                  "Assist in requirement analysis, coding, and testing.",
                  "Fix bugs and support feature development.",
                  "Learn and apply best coding practices and version control.",
                  "Support deployment and documentation tasks."
                  ],
    imageSrc: synergyImg
  },
  {
    role: "Java Developer",
    organisation: "Softhover",
    url:"http://softhover.com/",
    startDate: "July, 2016 ",
    endDate: "Dec, 2016",
    experiences: [
                 "Coding and Front end Designing.",
                  "Self Learning and implementing required features on the system.",
                  "Maintaining code version and documentation.",
                  "Submitting code and features to the project manager.",
                  "Keep track of daily work log.",
                  "Involving in different programs organized by the office."
                  ],
    imageSrc: softhoverImg
  }
];
</script>

<style scoped>
.experience {
  padding: 2rem;
  background: #f5f5f5;
  color: #333;
  //height: 80vh;
}

.experience h2 {
  font-size: 2rem;
  //margin-bottom: 1rem;
  text-align: center;
}
.experience-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 30px;
}
.experience-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1 1 calc(33.333% - 2rem);
  display: flex;
  align-items: center;
}
.company-logo {
  width: 100px;
  height: auto;
  margin-right: 1.5rem;
}
.experience-details {
  flex: 1;
}
.experience-details h3 {
  margin: 0;
  font-size: 1.5rem;
}
.experience-details h4 {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
.experience-details p {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.experience-details ul {
  padding-left: 20px;

}
.experience-details li {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

/* Media Queries for responsiveness */
@media (max-width: 1200px) {
  .experience-card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media (max-width: 768px) {
  .experience-card {
    flex: 1 1 100%;
    flex-direction: column;
    text-align: center;
  }

  .company-logo {
    margin-bottom: 1rem;
  }

  .experience-details ul {
    padding-left: 0;
    list-style: none;
  }
}

</style>