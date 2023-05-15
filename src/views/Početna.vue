<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class='text-slate-200 space-y-3 '>
    <div class="flex flex-col md:flex-row space-x-2">
    <RouterLink to="/plocice" class="w-full md:w-3/6 pt-5 ">
      <img src="/assets/plocicepocetna.jpg" class="h-auto max-w-full shadow-slate-800 shadow-lg rounded-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink to="/plocice"  class='text-slate-200 self-center md:w-3/6 px-5 text-lg' v-if="show">
        Pločice ne samo da su higijenski zahvalna zidna obloga za održavanje,
        njihova estetika je vrhunska. Pogledajte neke od ideja koja su naši
        klijenti izabrali.
      </RouterLink></transition
    >
  </div>
  <div class="flex md:flex-row flex-col space-x-2">
    <transition name="slide-fade-r"
      ><RouterLink to="/rigips" class='text-slate-200 self-center md:w-3/6 px-5 text-lg order-2 md:order-1' v-if="show"
        >Ukoliko renovirate životni prostor, jedno od najjednostavnijih rešenja
        svakako je rigips. Ali osim funkcionalnosti pregrađivanja on nudi
        mogućnost dodavanja dimenzije na vaše zidove.
      </RouterLink></transition
    >
    <RouterLink to="/rigips" class="md:w-3/6 pt-3"
      ><img src="/assets/rigips_zid.jpg" class="h-auto max-w-full shadow-slate-800 shadow-lg rounded-lg order-1 md:order-2" alt=""
    /></RouterLink>
    
  </div>
  <div class="flex flex-col space-y-2 md:flex-row  space-x-2">
    <RouterLink :to="{ name: 'Krečenje' }" class="md:w-3/6 pt-3"
      ><img src="/assets/IMG_20201230_163030.jpg" class="h-auto max-w-full shadow-slate-800 shadow-lg rounded-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink :to="{ name: 'Krečenje' }" class='text-slate-200 self-center md:w-3/6 px-5 text-lg' v-if="show" 
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
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  }, // might need this.$nextTick
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

