<template>
  <section class="education">
  <h2>Education</h2>

  <div
    class="education-container"
    style="
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    "
  >
    <div
      v-for="education in educations"
      :key="education.course"
      class="education-card"
      style="
        display: flex;
        gap: 16px;
        padding: 16px;
        border-radius: 8px;
        background: #fff;
      "
    > 
      <div class="education-details">
        <h3>{{ education.course }}</h3>
        <h4>{{ education.college }}</h4>
        <p>{{ education.startDate }} – {{ education.endDate }}</p>
        <p class="education-description">
              {{ education.description }}
        </p>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>
import synergyImg from '@/assets/synergy.png';
import softhoverImg from '@/assets/softhover.jpg';

const educations = [
  {
  course: "BSc in Computer Science and Information Technology (Bsc.CSIT)",
  college: "Aberdeen International College, Lalitpur, Nepal",
  startDate: "2011",
  endDate: "2015",
  description: `Equipped with a diverse skill set encompassing programming proficiency in C, C++, Java, and Python, along with a thorough understanding of computer architecture, operating systems, cloud computing, data structures, and algorithms. Experienced in database systems, networking, and security protocols, complemented by a solid grasp of software engineering principles. Proficient in web development technologies and frameworks. Completed coding boot-camps and internships, refining practical coding skills and gaining hands-on industry experience. Additionally, developed essential soft skills such as communication, teamwork, and problem-solving.`
},
  {
    course: "Science (High School)",
    college: "Aishwaraya Vidya Niketan, Dhanghadi, Nepal",
    startDate: "2009",
    endDate: "2011",
    description:"Explored Physics, Mathematics, Chemistry, and Biology, learning to think carefully and see how things in our daily life are connected through science."
   }
];
</script>

<style scoped>
.education {
  min-height:880px;
  padding: 2rem;
  background: #f5f5f5;
  color: #333;
  //height: 80vh;
}

.education h2 {
  font-size: 2rem;
  //margin-bottom: 1rem;
  text-align: center;
}
.education-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 30px;
}
.education-card {
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
.education-details {
  flex: 1;
}
.education-details h3 {
  margin: 0;
  font-size: 1.5rem;
}
.education-details h4 {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
.education-details p {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.education-details ul {
  padding-left: 20px;

}
.education-details li {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

/* Media Queries for responsiveness */
@media (max-width: 1200px) {
  .education-card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media (max-width: 768px) {
  .education-card {
    flex: 1 1 100%;
    flex-direction: column;
    text-align: center;
  }

  .company-logo {
    margin-bottom: 1rem;
  }

  .education-details ul {
    padding-left: 0;
    list-style: none;
  }
}

</style>