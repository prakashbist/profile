<template>
  <Menubar :model="items" class="menubar"></Menubar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import 'primeicons/primeicons.css';
import { inject } from 'vue';  // Injects the provided value (Allows the component to access dependencies provided by a parent or globally provided variables.)
import Aura from "@primevue/themes/aura";
import Lara from "@primevue/themes/lara";

const router = useRouter();

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home', command: () => router.push('/') },
  { label: 'Experience', icon: 'pi pi-fw pi-briefcase', command: () => router.push('/experience') },
  { label: 'Projects', icon: 'pi pi-fw pi-folder', command: () => router.push('/projects') },
  { label: 'Skill', icon: 'pi pi-fw pi-code', command: () => router.push('/skill') },
  { label: 'Education', icon: 'pi pi-fw pi-graduation-cap', command: () => router.push('/education') },
  { label: 'Contact', icon: 'pi pi-fw pi-phone', command: () => router.push('/contact') }
];

const currentTheme = inject('currentTheme');

const switchTheme = () => {
  currentTheme.theme = currentTheme.theme === Aura ? Lara : Aura;
  document.documentElement.setAttribute('data-theme', currentTheme.value);
};

</script>
<style scoped>
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-size: 1rem;
} 
</style>

