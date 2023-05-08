<template>
    <div class="flex flex-row overflow-x-scroll ">
    <img v-for="(photo,index) in photos" 
    tabindex="0"
    :key="index" 
    :src="photo" 
    class="h-80 p-3  focus:scale-150"
    @focus="focusedIndex = photos.indexOf(photo)"
    />
</div>
<div class="flex flex-row justify-center">
  <button @click="previousPhoto" class="h-10 w-10">
    <img src="../assets/left-arrow-circle-svgrepo-com.svg" alt="button for prvious photo"/>
    </button>
  <button @click="nextPhoto" class="h-10 w-10">
    <img src="../assets/right-arrow-circle-svgrepo-com.svg" alt="button for next photo">
    </button>
</div>
    
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps ({
    photos: Array
})

const focusedIndex = ref(-1);
console.log(focusedIndex.value)

function nextPhoto() {
    const photos = document.querySelectorAll('.flex img');
  const currentIndex = focusedIndex.value;
  if (currentIndex < photos.length - 1) {
    const nextIndex = currentIndex + 1;
    photos[nextIndex].focus();
    focusedIndex.value = nextIndex;
  }
}

function previousPhoto() {
    const photos = document.querySelectorAll('.flex img');
  const currentIndex = focusedIndex.value;
  if (currentIndex < photos.length - 1) {
    const nextIndex = currentIndex - 1;
    photos[nextIndex].focus();
    focusedIndex.value = nextIndex;
  }
}

</script>

<style lang="scss" scoped>

</style>