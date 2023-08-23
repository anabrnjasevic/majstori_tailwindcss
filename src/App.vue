<template>
  <div class="flex flex-col min-h-screen font-Nothing You Could Do bg-gradient-to-b from-slate-900 from-10% via-teal-700 via-50% to-slate-900 ">
    <header class="flex flex-row h-14 sticky top-0 bg-slate-900
    shadow-lg shadow-cyan-500/30 z-50">
    <Navigacija />
    </header>
    <div><RouterView/></div>
  </div>


<footer
  class="bg-slate-900 text-center lg:text-left">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:Helix021
  </div>
</footer>
</template>

<script setup>
import {RouterView} from 'vue-router'; 
import Navigacija from "./components/Navigacija.vue";



</script>

<style>
.fade-enter-from{
  opacity: 0;
}

.fade-enter-to{
  opacity: 1;
}

.fade-enter-active {
  transition: all 2s ease-in;

}
</style>
