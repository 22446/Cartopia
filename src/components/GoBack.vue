<template>
    <div class="d-flex justify-start my-2">
        <v-icon @click.prevent="goBack" class="text-red text-h3" >mdi-arrow-left-circle</v-icon>
    </div>
    </template>

    <script setup>
import { useRouter } from 'vue-router';


    const router=useRouter()
    const goBack=()=>{
        router.go(-1)
    }
    
</script>