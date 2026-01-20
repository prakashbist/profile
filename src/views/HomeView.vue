<template>
  <div class="home">
    <!-- Intro Section -->
    <section class="section-wrapper intro">
      <img src="@/assets/profile.jpg" alt="Prakash Bist" class="profile-image" />
      <h1>Prakash Bist</h1>
      <p>Principal Software Engineer</p>
      <p class="description-text">
        Highly accomplished Principal Software Engineer with over 10+ years of experience architecting, delivering, and scaling high-availability enterprise and fintech platforms. Deep expertise in the Java ecosystem (Java EE, Spring Boot, Spring Cloud, Quarkus) and modern frontend frameworks (Angular, Vue.js, with strong experience in JSF and JSP). A proven technical leader with a consistent record of reducing technical debt, improving system performance, and building high-performing engineering teams. Adept at aligning long-term technical strategy with business objectives, regulatory requirements, and feasibility-driven case studies.
      </p>
      <RouterLink to="/experience">
        <Button label="View My Experience" class="custom-button" />
      </RouterLink>
    </section>
 
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Home container */
.home {
  text-align: center;
  background-color: #f5f5f5;
  width: 100%;
  min-height: 90vh; 
  box-sizing: border-box;
}

/* Section wrapper for consistent spacing */
.section-wrapper {
  width: 100%;
  min-height: 80vh;               /* Ensure each section has enough vertical space */
  display: flex;
  flex-direction: column;
  justify-content: center;        /* vertical alignment */
  align-items: center;
  padding: 60px 20px;             /* gutter spacing */
  margin-bottom: 10px;            /* space between sections */
  box-sizing: border-box;
  background-color: #f5f5f5;
  transition: background-color 0.3s ease;
}

/* Optional alternate background for every other section */
.section-wrapper:nth-child(even) {
  background-color: #eaeaea;
}

/* Intro Section */
.intro {
  min-height: 70vh;               /* make intro smaller than full height */
}

/* Profile image */
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px 0;
}

/* Name */
h1 {
  font-size: 3rem;
  color: #333;
  margin: 5px 0 0 0;
}

/* Role / subtitle */
p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #666;
}

/* Description text */
.description-text {
  font-size: 1.3rem;
  color: #888;
  max-width: 900px;
  margin: 10px auto;
  padding: 0 20px;
  line-height: 1.6;
  text-align: justify;
}

/* Custom Button */
.custom-button {
  background-color: #3498db !important;  /* main color */
  color: white !important;
  border: none !important;
  font-size: 1.1rem !important;
  font-weight: bold !important;
  padding: 10px 20px !important;
  border-radius: 4px !important;
  margin-top: 15px !important;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Hover / focus states */
.custom-button:hover,
.custom-button:focus,
.custom-button:active {
  background-color: #3498db !important;  /* prevent darkening on mobile */
  filter: brightness(1.1);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  .description-text {
    font-size: 1.1rem;
    padding: 0 15px;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .custom-button {
    font-size: 1rem !important;
    padding: 8px 16px !important;
  }
}
</style>