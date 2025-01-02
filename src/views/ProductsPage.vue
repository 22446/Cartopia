<script setup lang="ts">
import CardComp from '@/components/CardComp.vue'
import GoBack from '@/components/GoBack.vue'
import { UseProducts } from '@/stores/ProductStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const { loading, products } = storeToRefs(UseProducts())
const AllProducts = UseProducts()

onMounted(async () => {
  await AllProducts.GetAllProducts()
})
</script>

<template>
  <v-container>
    <GoBack />
    <v-row>
      <v-col
      cols="6"  lg="3" md="4"  sm="4" 
        v-for="product in products"
        :key="product._id"
      >
        <CardComp :loading="loading" :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>
