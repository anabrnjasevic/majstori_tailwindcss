<template>
    
            <ul class="hidden md:flex flex-row h-2.5 w-screen text-2xl text-slate-200 ">
                <li class="px-5 "><router-link :to="{name:'Početna'}" >Početna</router-link></li>
                <li class="px-5"><router-link :to="{name:'Pločice'}" >Pločice</router-link></li>
                <li class="px-5"><router-link :to="{name:'Krečenje'}">Krečenje</router-link></li>
                <li class="px-5"><router-link :to="{name:'Rigips'}">Rigips</router-link></li>
                <li class="px-5"><router-link :to="{name:'Kontakt'}">Kontakt</router-link></li>
            </ul>
  
</template>


<script setup>



</script>
<style>
a.router-link-active {
    color:#334155;
}
</style>

