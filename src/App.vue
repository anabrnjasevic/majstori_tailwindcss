<template>
  <div class="flex flex-col min-h-screen font-Nothing You Could Do bg-gray-950">
    <header class="text-3xl md:text-7xl sticky top-0 text-slate-50 text-center bg-gradient-to-r from-slate-700 to-slate-900" >AQUACOLOR</header>
    
    <Navigacija />
    <div class="mt-5"><RouterView/></div>
  </div>


<footer
  class="bg-gradient-to-r from-slate-700 to-slate-900 text-center lg:text-left">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:Helix021
  </div>
</footer>
</template>

<script setup>
import {RouterView} from 'vue-router'; 
import Navigacija from "./components/Navigacija.vue";

</script>
