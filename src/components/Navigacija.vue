<template>
    
            <ul class="hidden md:flex flex-row h-2.5 w-screen md:text-2xl text-slate-200 ">
                <li class="px-5 "><router-link :to="{name:'Početna'}" >Početna</router-link></li>
                <li class="px-5"><router-link :to="{name:'Pločice'}" >Pločice</router-link></li>
                <li class="px-5"><router-link :to="{name:'Krečenje'}">Krečenje</router-link></li>
                <li class="px-5"><router-link :to="{name:'Rigips'}">Rigips</router-link></li>
                <li class="px-5"><router-link :to="{name:'Kontakt'}">Kontakt</router-link></li>
            </ul>
            <button @click="show" class="text-slate-200 absolute top-0 right-0 p-2 md:hidden ">Meni</button>
            
            <ul class="md:hidden flex flex-col absolute top-9 right-0 bg-gradient-to-t from-slate-700 to-slate-900 z-10 text-slate-200 rounded-b-lg" v-show=vidime>
            
                <li class="px-5 "><router-link :to="{name:'Početna'}" >Početna</router-link></li>
                <li class="px-5"><router-link :to="{name:'Pločice'}" >Pločice</router-link></li>
                <li class="px-5"><router-link :to="{name:'Krečenje'}">Krečenje</router-link></li>
                <li class="px-5"><router-link :to="{name:'Rigips'}">Rigips</router-link></li>
                <li class="px-5"><router-link :to="{name:'Kontakt'}">Kontakt</router-link></li>
            </ul>
        
        
  
</template>


<script setup>
import { ref} from 'vue';

const vidime=ref(false);



function show() {
    vidime.value=!vidime.value
    
}





</script>
<style>
a.router-link-active {
    color:#334155;
}
</style>

