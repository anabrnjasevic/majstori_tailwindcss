const newLocal="slide-fade-l";
<template>
  <div class="pt-3">
    <div class="">
      <button @click="nextPhoto" class="bg-slate-200">next</button>
      <i
        class="fas fa-chevron-circle-right"
        id="next"
        type="button"
        @click="nextPhoto"
      ></i>
      <i
        class="fas fa-chevron-circle-left"
        id="previous"
        type="button"
        @click="previousPhoto"
      ></i>
      
    </div>
    <div >
      <div class="flex flex-row overflow-x-scroll max-h-96 w-full">
        <div class="h-80 p-3 focus:scale-150"
        tabindex="0"
          id="thumbnail-photo"
          v-for="(photo, index) in photos"
          :src="photo"
          :key="index"
          :style="'content:url(' + photo + ')'"
          ref="thumbphoto"
        ></div>
        <div
        @touchstart="touchStartMethod"
        @touchend="touchEndMethod"
        :style="'content:url(' + photos[activePhoto] + ');'"
        class="invisible focus:visible"
      ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Galerija",
  props: ["photos"],

  data() {
    return {
      activePhoto:null,
      nextSlide: false,
      activePicture: false,
    };
  },
  mounted() {
    this.changePhoto(0);
    document.addEventListener("keydown", (event) => {
      if (event == 37) this.previousPhoto();
      if (event == 39) this.nextPhoto();
    });
  },

  methods: {
    touchStartMethod(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is usedconsole.log(touchEvent)
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
        // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      if (posXStart < posXEnd) {
        this.previousPhoto(); // swipe right
      } else if (posXStart > posXEnd) {
        this.nextPhoto(); // swipe left
      }
    },
    changePhoto(index) {
      this.activePhoto = index;
    },
    nextPhoto() {
        this.activePhoto=this.$refs.thumbphoto;
        activePhoto.focus()
//console.log(this.$refs.thumbphoto.indexOf(.focus))
    // this.nextSlide = true;
      //this.activePicture = true;
      //this.changePhoto(
       // this.activePhoto + 1 < this.photos.length ? this.activePhoto + 1 : 0
      //);
    },
    previousPhoto() {
      this.changePhoto(
        this.activePhoto - 1 >= 0
          ? this.activePhoto - 1
          : this.photos.length - 1
      );
    },
  },
};
</script>



