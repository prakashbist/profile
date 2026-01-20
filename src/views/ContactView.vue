<template>
  <section class="contact">
    <div class="contact-card">
      <h2>Connect With Me</h2>

      <!-- Contact Form Section -->
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Your Name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Your Email"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>

        <div class="form-group-button">
          <button type="submit">Send Message</button>
        </div>
      </form>

      <!-- Social Media Links -->
      <div class="contact-links">
        <a
          href="https://bitbucket.org/prakashbistdeveloper"
          target="_blank"
          class="contact-link"
        >
          <i class="fa-brands fa-bitbucket"></i>
        </a>

        <a
          href="https://github.com/prakashbist"
          target="_blank"
          class="contact-link"
        >
          <i class="pi pi-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/prakashbistdeveloper/"
          target="_blank"
          class="contact-link"
        >
          <i class="pi pi-linkedin"></i>
        </a>

        <a
          href="mailto:prakashbist.developer@gmail.com"
          target="_blank"
          class="contact-link"
        >
          <i class="pi pi-envelope"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, toRaw } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form Data:', toRaw(formData))
  alert(`Thank you, ${formData.name}! Your message has been sent.`)

  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>

<style scoped>
/* Section background */
.contact {
  padding: 4rem 2rem;
  background: #f5f6fa;
  min-height: 92vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}

/* Card container */
.contact-card {
  width: 100%;
  min-width: 1100px;  /* restored */
  min-height: 800px;  /* restored */
  background: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  transition: all 0.25s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

/* Heading */
.contact-card h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #2c3e50;
}

/* Form */
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #34495e;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  background-color: #f5f5f5;
  width: 100%;
  transition: border 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #3498db;
  box-shadow: 0 0 6px rgba(52, 152, 219, 0.4);
  outline: none;
}

/* Button */
.form-group-button {
  text-align: center;
  margin-top: 2rem; /* increased vertical gap */
  margin-bottom: 3rem; /* added gap before social links */
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2c80b4;
  transform: translateY(-2px);
}

/* Social links */
.contact-links {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.contact-link i {
  font-size: 2.5rem;
  color: #3498db;
  transition: color 0.3s, transform 0.3s;
}

.contact-link:hover i {
  color: #2c80b4;
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 1200px) {
  .contact-card {
    min-width: 800px;
    min-height: 700px;
  }
}

@media (max-width: 992px) {
  .contact-card {
    min-width: 600px;
    min-height: 650px;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 3rem 1rem;
  }

  .contact-card {
    min-width: auto;
    width: 100%;
    min-height: auto;
    padding: 2rem;
  }

  .contact-card h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .contact-links {
    gap: 1.5rem;
  }

  .contact-link i {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
