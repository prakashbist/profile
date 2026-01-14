<template>
  <section class="contact">
    <h2>Connect With Me</h2>

    <!-- Contact Form Section -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Your Name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" placeholder="Your Email" required />
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
     <a href="https://bitbucket.org/prakashbistdeveloper" target="_blank" class="contact-link">
        <i class="fa-brands fa-bitbucket"></i>
    </a>
      <a href="https://github.com/prakashbist" target="_blank" class="contact-link">
        <i class="pi pi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/prakashbistdeveloper/" target="_blank" class="contact-link">
        <i class="pi pi-linkedin"></i>
      </a>
      <a href="mailto:prakashbist.developer@gmail.com" target="_blank" class="contact-link">
        <i class="pi pi-envelope"></i>
      </a>
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

  // Reset form fields
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>

<style scoped>
/* Reset default spacing */
.contact {
  padding: 4rem 2rem 2rem 2rem; /* top padding larger to avoid navbar overlap */
  background-color: white;
  color: #333;
  min-height: 92vh;
  box-sizing: border-box;
}

/* Heading */
.contact h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #2980b9;
}

/* Contact Form */
.contact-form {
  max-width: 500px;
  margin: 0 auto 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
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
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333; /* text color dark for readability */
  background-color: #f5f5f5; /* light off-white */
  transition: border 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #2980b9;
  box-shadow: 0 0 5px rgba(41, 128, 185, 0.4);
  outline: none;
}

.form-group-button {
  text-align: center;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #1f6391;
  transform: translateY(-2px);
}

/* Social Media Links */
.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.contact-link i {
  font-size: 2.5rem;
  color: #2980b9;
  transition: color 0.3s, transform 0.3s;
}

.contact-link:hover i {
  color: #1f6391;
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 768px) {
  .contact {
    padding: 3rem 1rem 2rem 1rem;
  }

  .contact-form {
    padding: 1.5rem;
    width: 95%;
  }

  .contact-link i {
    font-size: 2rem;
  }

  .contact h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
}
</style>
