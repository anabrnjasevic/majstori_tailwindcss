<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class='text-slate-200'>
    <div class="flex flex-row space-x-2">
    <RouterLink to="/plocice" class="inline-flex w-3/6 pt-3">
      <img src="public/assets/plocicepocetna.jpg" class="h-auto max-w-full shadow-slate-50 shadow-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink to="/plocice"  class='text-slate-200 self-center w-3/6 pt-3 '>
        Pločice ne samo da su higijenski zahvalna zidna obloga za održavanje,
        njihova estetika je vrhunska. Pogledajte neke od ideja koja su naši
        klijenti izabrali.
      </RouterLink></transition
    >
  </div>
  <div class="flex flex-row space-x-2">
    <RouterLink to="/rigips" class="inline-flex w-3/6 pt-3"
      ><img src="public/assets/rigips/rigips_zid.jpg" class="h-auto max-w-full shadow-slate-50 shadow-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-r"
      ><RouterLink to="/rigips" class='text-slate-200 self-center w-3/6 pt-3' 
        >Ukoliko renovirate životni prostor, jedno od najjednostavnijih rešenja
        svakako je rigips. Ali osim funkcionalnosti pregrađivanja on nudi
        mogućnost dodavanja dimenzije na vaše zidove.
      </RouterLink></transition
    >
  </div>
  <div class="flex flex-row space-x-2">
    <RouterLink :to="{ name: 'Krečenje' }" class="inline-flex w-3/6 pt-3"
      ><img src="public/assets/krecenje/IMG_20201230_163030.jpg" class="h-auto max-w-full shadow-slate-50 shadow-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink :to="{ name: 'Krečenje' }" class='text-slate-200 self-center w-3/6 pt-3' 
        >Svedene boje skandinavije, teksture peska, kamena ili satena, jarke
        boje juga- krečenjem možete osvežiti vaše zidove ili iskazati svoj lični
        stil.</RouterLink
      ></transition
    >
  </div>
  </main>
</template>
<script>
export default {
  name: "Home",
  components: {},
 
  
};
</script>
<style scoped>



  
  .slide-fade-l-enter-active {
    transition: all 1s ease-out;
  }

  .slide-fade-l-enter-from,
  .slide-fade-l-leave-to {
    transform: translateX(-60rem);
    opacity: 0;
  }
  .slide-fade-r-enter-active {
    transition: all 1s ease-out;
  }
  .slide-fade-r-enter-from,
  .slide-fade-r-leave-to {
    transform: translateX(60rem);
    opacity: 0;
  }

</style>

