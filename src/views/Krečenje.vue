<template>
  <div>
      <gal :photos="photos" />
      <p class="text-slate-200 px-3 text-center">
        Klasično krečenje disperzionim ili poludisperzionim bojama ima osnovnu
        funkciju higijene zidova ali odavno je prevazišlo te okvire uz pomoć
        dekorativnih boja za krečenje, te sad ima estetsku crtu. Novi materijali
        za oblaganje zidova sada omogućavaju stvaranje imitacija kamena, peska
        ili svile.
      </p>
    </div>
</template>

<script>
import gal from "../components/gal.vue";


export default {
  name: "Krečenje",
  components: {
   gal,
  },
  data() {
    return {
      photos: [
        ("assets/IMG_20201230_133647.jpg"),
        ("assets/IMG_20201230_163030.jpg"),
      ],
    };
  },
};
</script>

