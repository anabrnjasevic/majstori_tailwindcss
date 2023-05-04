<template class="">

    <div class="flex flex-row flex-nowrap justify-start  overflow-x-scroll focus-within:overflow-visible p-6 w-full">
        <div class=" h-80 flex flex-row">
           <div class=" p-3 focus:scale-150 focus:justify-center duration-300 ease-in"
            tabindex="0"
             id="thumbnail-photo"
             v-for="(photo, index) in photos"
             :src="photo"
             :key="index"
             @click="changePhoto(index)"
             :class="{ ' focus ': activePhoto == index }"
             :style="'content:url(' + photo + ')'">
           </div>
    </div>
    </div>

    <div class="flex flex-row justify-center">
    <button @click="previousPhoto" style="color:aliceblue" > 
        <img src="src/assets/left-arrow-circle-svgrepo-com.svg" 
        class="h-10 w-10">
        </button>

        <button @click="nextPhoto" style="color:aliceblue" > 
        <img src="src/assets/right-arrow-circle-svgrepo-com.svg" 
        class="h-10 w-10">
        </button>
    </div>
</template>
<script>
export default {
  name: "Galerija",
  props: ["photos"],

  data() {
    return {
      activePhoto: 0,
    };
  },

  methods: {
    touchStartMethod(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      addEventListener(
        "touchend",
        (touchEvent) => this.touchEndMethod(touchEvent, posXStart),
        { once: true }
      );
    },
    touchEndMethod(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      if (posXStart < posXEnd) {
        this.previousPhoto();
      } else if (posXStart > posXEnd) {
        this.nextPhoto();
      }
    },
    changePhoto(index) {
      this.activePhoto = index;
      
    },
    nextPhoto() {
      const nextIndex =
        this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0;
      this.changePhoto(nextIndex);
      this.activePhoto.focus();
    },
    previousPhoto() {
      const previousIndex =
        this.activePhoto - 1 >= 0 ? this.activePhoto - 1 : this.photos.length - 1;
        this.changePhoto(previousIndex);
    },

  },
};
</script>



