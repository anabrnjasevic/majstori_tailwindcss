<template>

    <div>
      
      <gal :photos="photos"/>
      <p  class=" text-slate-200 px-3 text-center">
        Keramičke pločice se koriste još od vremena starog Egipta, i donedavno
        su se upotrebljavale isključivo za oblaganje zidova i podova u kupatilu.
        Međutim, danas se keramičke pločice koriste u ostalim prostorijama doma,
        postaju sve popularnije rešenje u dizajnu enterijera i eksterijera.One
        su lake za čišćenje, veoma dugotrajne (vek keramičkih pločica je dug
        10-50 godina), i predstavljaju predivne podne i zidne dekoracije u vašem
        životnom prostoru.
      </p>
    </div>
  
    
</template>
<script>
import gal from "../components/gal.vue";

export default {
  mounted() { import ("../components/gal.vue")},
  name: "Pločice",
  components: {
    gal,
  },
  data() {
    return {
      photos: [
        ("assets/IMG_20210421_112652.jpg"),
        ("assets/kupatilo_1.jpg"),
        ("assets/kupatilo_2.jpg"),
        ("assets/plocce_vani3.jpg"),
        ("assets/plocice_kupatilo.jpg"),
        ("assets/plocice_kupatilo1.jpg"),
        ("assets/plocice_parket.jpg"),
        ("assets/plocice_parket2.jpg"),
        ("assets/plocice_stepeniste.jpg"),
        ("assets/plocice_vani.jpg"),
        ("assets/plocice_vani2.jpg"),
        ("assets/plocicw_stepeniste2.jpg"),
      ],
    };
  },
  
};
</script>

