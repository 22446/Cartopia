<template>
     <h2 class="font-weight-black text-h4">More products to discover <v-icon>mdi-dots-horizontal</v-icon></h2>
        <v-slide-group show-arrows>
          
            <v-slide-group-item v-for="product in products" :key="product._id">


        <v-col  class="pa-2">
         <CardComp :product="product" :loading="loading"/>
        </v-col>
    </v-slide-group-item>

</v-slide-group>
</template>
<script setup>
import CardComp from '@/components/CardComp.vue';
import { UseProducts } from '@/stores/ProductStore';
import { storeToRefs } from 'pinia';

const {products,loading}=storeToRefs(UseProducts())
</script>
