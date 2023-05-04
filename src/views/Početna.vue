<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class='text-slate-200'>
    <RouterLink to="/plocice" class="plocice">
      <img src="@/assets/plocice_pocetna.jpg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink to="/plocice"  v-if="show" class='text-slate-200'>
        Pločice ne samo da su higijenski zahvalna zidna obloga za održavanje,
        njihova estetika je vrhunska. Pogledajte neke od ideja koja su naši
        klijenti izabrali.
      </RouterLink></transition
    >
    <RouterLink to="/rigips" class="rigips"
      ><img src="@/assets/rigips/rigips_zid.jpg" alt=""
    /></RouterLink>
    <transition name="slide-fade-r"
      ><RouterLink to="/rigips" class="text_rigips" v-if="show"
        >Ukoliko renovirate životni prostor, jedno od najjednostavnijih rešenja
        svakako je rigips. Ali osim funkcionalnosti pregrađivanja on nudi
        mogućnost dodavanja dimenzije na vaše zidove.
      </RouterLink></transition
    >
    <RouterLink :to="{ name: 'Krecenje' }" class="krecenje"
      ><img src="@/assets/krecenje/IMG_20201230_163030.jpg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink :to="{ name: 'Krecenje' }" class="text_krecenje" v-if="show"
        >Svedene boje skandinavije, teksture peska, kamena ili satena, jarke
        boje juga- krečenjem možete osvežiti vaše zidove ili iskazati svoj lični
        stil.</RouterLink
      ></transition
    >
  </main>
</template>

