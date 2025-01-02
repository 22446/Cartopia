<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <v-app>
    
    <NavBar />

    
    <v-main>
      <router-view />
    </v-main>

 
    <v-footer color="black darken-3" app>
      <span class="text-white">&copy; 2025 Cartopia</span>
    </v-footer>
  </v-app>
</template>

