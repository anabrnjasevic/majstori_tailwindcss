<template class="my-3">
    <div class="flex flex-row relative h-[60vh] my-3 overflow-x-scroll justify-start snap-x snap-mandatory">
    <img v-for="(photo,index) in photos" 
    tabindex="0"
    :key="index" 
    :src="photo" 
    class="h-80 p-1 focus:scale-y-105 md:focus:scale-125 ease-in duration-300 origin-center mt-12 focus:p-0 focus:snap-center focus:border-2 rounded-lg "
    @focus="focusedIndex = photos.indexOf(photo)"
    />
</div>
<div class="flex flex-row justify-center">
  <button @click="previousPhoto" class="h-10 w-10">
    <img src="/assets/left-arrow-circle-svgrepo-com.svg" alt="button for prvious photo"/>
    </button>
  <button @click="nextPhoto" class="h-10 w-10">
    <img src="/assets/right-arrow-circle-svgrepo-com.svg" alt="button for next photo">
    </button>
</div>
    
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps ({
    photos: Array
})

const focusedIndex = ref(-1);




function nextPhoto() {
    const photos = document.querySelectorAll('.flex img');
    //console.log(photos.length)
  const currentIndex = focusedIndex.value;
  if (currentIndex < photos.length -3) {
    const nextIndex = currentIndex + 1;
    photos[nextIndex].focus();
    focusedIndex.value = nextIndex;
  }
  else {
    photos[0].focus();
  }
  console.log(focusedIndex.value)
}

function previousPhoto() {
    const photos = document.querySelectorAll('.flex img');
  let currentIndex = focusedIndex.value;
  if (currentIndex > 0) {
    const previousIndex = currentIndex - 1;
    photos[previousIndex].focus();
    focusedIndex.value = previousIndex;
  }
  else {
    currentIndex = photos.length - 3;
    photos[currentIndex].focus();
    focusedIndex.value = currentIndex;
  }
  
  console.log(focusedIndex.value)
}

</script>

