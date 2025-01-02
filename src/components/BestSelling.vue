<template>
    <v-container>
    <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <h2 class="font-weight-black text-lg-h3 text-sm-h4 text-h5 py-3">Best Selling Products<v-icon class="text-h4 text-red">mdi-star-box</v-icon></h2>
   <v-row>
        <v-col cols="6"  lg="3" md="4"  sm="4" v-for="product in products.slice(4,8)" :key="product._id">
         <CardComp :product="product" :loading="loading"/>
        </v-col>
    </v-row>
    <div class="d-flex align-center justify-center py-2">
        <ButtonComp @handleClick="toProducts">
            <template #icon>
                mdi-eye
            </template>
            <template #title>
                View all Product
            </template>
           
        </ButtonComp>
    </div>
  </v-container>

    </template>
      <script setup>
      import { defineProps } from 'vue'
  import CardComp from './CardComp.vue';
  import ButtonComp from './ButtonComp.vue';
  import { useRouter } from 'vue-router';
    const router=useRouter()

      defineProps({
          products:{
              type:Object,
              required:true
          },
          loading:{
              type:Boolean,
              required:true
          }
      })
      function toProducts(){
    router.push('/products')
  }
  </script>