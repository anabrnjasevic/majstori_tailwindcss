<template>
  <div class="flex flex-col min-h-screen font-Nothing You Could Do bg-gray-950">
    <header class="text-7xl sticky top-0 text-slate-50 text-center bg-gray-900" >AQUACOLOR</header>
    
    <Navigacija/>
    <div><RouterView/></div>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router'; 
import Navigacija from "./components/Navigacija.vue";

</script>
