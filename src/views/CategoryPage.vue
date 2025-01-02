<template>
  <v-container>
    <GoBack />

    <v-row>
      <template v-if="filteredProducts.length > 0">
        <v-col v-for="product in filteredProducts" :key="product._id" cols="6" lg="3" md="4" sm="4">
          <CardComp :loading="loading" :product="product" />
        </v-col>
      </template>
    <template v-else>
      <v-col cols="12">
        <v-alert density="compact" title="No products available" type="warning">
        This category doesn't have any products at this time.
        <router-link to="/">
          <v-btn color="black" class="my-2" text>Return to shop</v-btn>
        </router-link>
        </v-alert>
      </v-col>
    </template>
    </v-row>
  </v-container>
</template>

<script setup>
import CardComp from '@/components/CardComp.vue'
import { UseProducts } from '@/stores/ProductStore'
import { storeToRefs } from 'pinia'
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import GoBack from '@/components/GoBack.vue'

const { loading, products } = storeToRefs(UseProducts())
const AllProducts = UseProducts()

const router = useRouter()
const id = router.currentRoute.value.params.id

const filteredProducts = computed(() => {
  return products.value.filter((p) => p.category._id === id)
})

onMounted(async () => {
  await AllProducts.GetAllProducts()
})
</script>
