<script setup lang="ts">
import AllProducts from '@/components/AllProducts.vue'
import BestSelling from '@/components/BestSelling.vue'
import CategoryComp from '@/components/CategoryComp.vue'
import FlashSales from '@/components/FlashSales.vue'
import HeaderCopm from '@/components/HeaderCopm.vue'
import JblExplore from '@/components/JblExplore.vue'
import SectionsComp from '@/components/SectionsComp.vue'
import { UseCategory } from '@/stores/CategoryStore'
import { UseProducts } from '@/stores/ProductStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const { loading, products } = storeToRefs(UseProducts())
const { category,loadingcat } = storeToRefs(UseCategory())
const Categories = UseCategory()
const Products = UseProducts()
import { UseWishList } from '@/stores/WishList';
import { UseCart } from '@/stores/CartStore'
import LastSection from '@/components/LastSection.vue'



const WishlistFun = UseWishList();
const cartfunc = UseCart();


onMounted(async () => {
  await Categories.getCategory()
  await WishlistFun.GetWishList();
  
    await cartfunc.getCardProduct();
  await Products.getProductsAfterDis()
})
</script>

<template>
  <HeaderCopm />
  <v-container>
 <v-divider></v-divider>
</v-container>
 <FlashSales :products="products" :loading="loading"/>
 <v-container>
 <v-divider></v-divider>
</v-container>
<CategoryComp :category="category" :loadingcat="loadingcat"/>
<v-container>
 <v-divider></v-divider>
</v-container>
<BestSelling :products="products" :loading="loading"/>
<v-container>
 <v-divider></v-divider>
</v-container>
<JblExplore />
<v-container>
 <v-divider></v-divider>
 </v-container>
<AllProducts :products="products" :loading="loading"/>
<v-container>
 <v-divider></v-divider>
 </v-container>
<SectionsComp/>
<v-container>
 <v-divider></v-divider>
 </v-container>
 <LastSection/>
</template>
