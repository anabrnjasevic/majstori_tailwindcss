<template>
    <div>
        <gal :photos="photos" />
        <p class="text-slate-200 px-3 text-center">
          Rigips ploče se upotrebljavaju za suvu gradnju u enterijeru. Od
          pregradnih zidova,spuštenih plafona, oblaganja zidova do dekorativnih
          elemenata koje daju nikatan dodir vašem prostoru.Gips je u upotrebi
          nekoliko hiljada godina jer je idealan građevinski materijal koji je
          ekološki, reguliše klimu u prostoriji, pruža odličnu toplotnu i zvučnu
          izolaciju, a pri tome je cena povoljna.
        </p>
      </div>
   
  </template>
  
  <script>
  import gal from "../components/gal.vue";
  
  export default {
    name: "Rigips",
    components: {
      gal,
    },
    data() {
      return {
        photos: [
          ("/assets/rigips/rigips_zid.jpg"),
          ("/assets/rigips/sank_1.jpg"),
          ("/assets/rigips/rigips_plafon.jpg"),
          ("/assets/rigips/rigips_plafon1.jpg"),
          ("/assets/rigips/rigips_plafon2.jpg"),
          ("/assets/rigips/rigips_plafon_drugi.jpg"),
        ],
      };
    },
  };
  </script>