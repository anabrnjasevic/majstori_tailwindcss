<template>
<div class="stranica">
    <div class="main">
      
      <Galerija :photos="photos" />
      <p  class=" text-slate-200">
        Keramičke pločice se koriste još od vremena starog Egipta, i donedavno
        su se upotrebljavale isključivo za oblaganje zidova i podova u kupatilu.
        Međutim, danas se keramičke pločice koriste u ostalim prostorijama doma,
        postaju sve popularnije rešenje u dizajnu enterijera i eksterijera.One
        su lake za čišćenje, veoma dugotrajne (vek keramičkih pločica je dug
        10-50 godina), i predstavljaju predivne podne i zidne dekoracije u vašem
        životnom prostoru.
      </p>
    </div>
  </div>
    
</template>
<script>
import Galerija from "../components/Galerija.vue";
export default {
  name: "Pločice",
  components: {
    Galerija,
  },
  data() {
    return {
      photos: [
        ("src/assets/plocice/IMG_20210421_112652.jpg"),
        ("src/assets/plocice/kupatilo_1.jpg"),
        ("src/assets/plocice/kupatilo_2.jpg"),
        ("src/assets/plocice/plocce_vani3.jpg"),
        ("src/assets/plocice/plocice_kupatilo.jpg"),
        ("src/assets/plocice/plocice_kupatilo1.jpg"),
        ("src/assets/plocice/plocice_parket.jpg"),
        ("src/assets/plocice/plocice_parket2.jpg"),
        ("src/assets/plocice/plocice_stepeniste.jpg"),
        ("src/assets/plocice/plocice_vani.jpg"),
        ("src/assets/plocice/plocice_vani2.jpg"),
        ("src/assets/plocice/plocicw_stepeniste2.jpg"),
      ],
    };
  },
};
</script>

