<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="relative overflow-hidden bg-cover bg-no-repeat bg-center h-screen bg-[url('public/assets/satria-hutama-2quuh5yQJvU-unsplash.jpg')]"></div>
  <div
    class="absolute bottom-0 left-0 right-0 top-14 h-screen w-full overflow-hidden bg-fixed"
    style="background-color: hsla(0, 0%, 0%, 0.4)">
    <div class="flex h-full items-center justify-center">
     <Transition appear name="fade"><h1 class="mb-4 text-9xl font-semibold text-emerald-300" style="text-shadow: 2px 2px 8px #6ee7b7">AQUACOLOR</h1></Transition>
     </div>
  </div>
  <main class='text-slate-200 md:space-y-52 m-20 text-2xl leading-loose'>
    
  <p class="mx-48 text-center text-4xl">
Mi smo stručni tim posvećen pružanju vrhunskih usluga u oblasti molerskih radova i drugih unutrašnjih radova. Sa dugogodišnjim iskustvom i znanjem, garantujemo kvalitetne rezultate i zadovoljstvo naših klijenata.Naša vizija je stvaranje inspirativnih prostora koji odražavaju vašu ličnost i stil.</p>
<aside class="flex md:flex-row justify-between space-x-10">
<div class=" space-y-5 text-center"><h2 class="text-4xl underline decoration-emerald-300 underline-offset-8">Pouzdanost</h2>
<p class="text-xl">Vaše zadovoljstvo nam je najvažnije. Stoga smo posvećeni pružanju izuzetne usluge, poštovanju rokova i prilagođavanju vašim individualnim potrebama.</p></div>
<div class=" space-y-5 text-center"><h2 class="text-4xl underline decoration-emerald-300 underline-offset-8">Profesionalnost</h2>
<p class="text-xl">Naši moleri su vešti i pažljivi, koristeći samo najkvalitetnije materijale i alate kako bi postigli profesionalne rezultate. Bez obzira na veličinu projekta, mi pristupamo svakom poslu sa istom pažnjom i posvećenošću.</p></div>
<div class=" space-y-5 text-center"><h2 class="text-4xl underline decoration-emerald-300 underline-offset-8">Iskustvo</h2>
<p class="text-xl">Pored molerskih radova, pružamo i širok spektar drugih unutrašnjih radova. Naš tim stručnjaka će vam pružiti savete i pomoć pri izboru najboljih opcija za vaš prostor.</p></div>
</aside>
<p class="mx-48 text-center leading-loose">Pored molerskih radova, pružamo i širok spektar drugih unutrašnjih radova. To uključuje postavljanje tapeta, dekorativne tehnike, gipsarske radove, krečenje plafona, postavljanje lajsni i još mnogo toga. Naš tim stručnjaka će vam pružiti savete i pomoć pri izboru najboljih opcija za vaš prostor.</p>



    <div class="flex flex-col md:flex-row md:space-x-10">
    <RouterLink to="/plocice" class="w-full md:w-3/6">
      <img src="/assets/plocicepocetna.jpg" class="h-auto max-w-full shadow-lg shadow-cyan-500/30 rounded-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink to="/plocice"  class='text-slate-200 self-center text-justify md:w-3/6' v-if="show">
        Pločice su izvanredan izbor za unutrašnje prostorije jer pružaju trajnost i otpornost na habanje, čineći ih idealnim za visoko prometne delove poput kuhinja i kupatila. Sa različitim bojama, teksturama i oblicima pločica, možete stvoriti jedinstvene i atraktivne obrasce koji će transformisati prostor. Kombinacija pločica sa drugim materijalima poput drveta, stakla ili metala može dodati interesantan kontrast i teksturu vašem enterijeru.
      </RouterLink></transition
    >
  </div>
  

  <div class="flex md:flex-row flex-col md:space-x-10">
    <transition name="slide-fade-r"
      ><RouterLink to="/rigips" class='text-slate-200 self-center text-justify md:w-3/6' v-if="show"
        >Upotreba rigipsa u unutrašnjim radovima pruža praktično i efikasno rešenje za izgradnju i pregrađivanje prostora.Rigips ploče se mogu lako rezati i oblikovati prema potrebama projekta, omogućavajući prilagođavanje prostora i kreiranje različitih konfiguracija.Ove ploče imaju odlične zvučno-izolacione karakteristike, smanjujući prenos buke između prostorija i stvarajući prijatniju atmosferu u enterijeru.
      </RouterLink></transition
    >
    <RouterLink to="/rigips" class="w-full md:w-3/6"
      ><img src="/assets/rigips_zid.jpg" class="h-auto max-w-full shadow-cyan-500/30 shadow-lg rounded-lg" alt=""
    /></RouterLink>
    
  </div>
  
  <div class="flex flex-col space-y-2 md:flex-row  md:space-x-10">
    <RouterLink :to="{ name: 'Krečenje' }" class="md:w-3/6"
      ><img src="/assets/IMG_20201230_163030.jpg" class="h-auto max-w-full shadow-cyan-500/30 shadow-lg rounded-lg" alt=""
    /></RouterLink>
    <transition name="slide-fade-l"
      ><RouterLink :to="{ name: 'Krečenje' }" class='text-slate-200 self-center text-justify md:w-3/6 px-5' v-if="show" 
        >Krečenje je jedan od najjednostavnijih i najpristupačnijih načina da osvežite svoj enterijer i transformišete prostor. Krečenje pruža mogućnost da izaberete željenu boju i ton, čime možete stvoriti potpuno novu atmosferu i stil u prostoru.Svedene boje skandinavije, teksture peska, kamena ili satena, jarke
        boje juga- krečenjem možete osvežiti vaše zidove ili iskazati svoj lični
        stil.</RouterLink
      ></transition
    >
  </div>
  <p class="mx-48 text-center leading-loose">Vaše zadovoljstvo nam je najvažnije. Stoga smo posvećeni pružanju izuzetne usluge, poštovanju rokova i prilagođavanju vašim individualnim potrebama. Sarađujemo sa klijentima tokom celog procesa, slušajući njihove želje i ideje kako bismo zajedno stvorili prostor koji će zadovoljiti njihove očekivanja. Ako želite profesionalne molerske usluge i ostale unutrašnje radove, kontaktirajte nas danas. Naš tim će biti srećan da vam pruži besplatnu procenu i ponudu, prilagođenu vašim potrebama i budžetu.Uvereni smo da ćete biti zadovoljni našom stručnošću, pažnjom prema detaljima i rezultatima koje ćemo postići. Izgradimo zajedno prostor koji će odisati stilom i lepotom!</p>
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

