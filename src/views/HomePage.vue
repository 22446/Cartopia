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
 <v-container>
  <v-row>
    <v-col cols="12" md="4" class="text-center">
      <div>
        <v-icon class="bg-black pa-6 rounded-circle">
        mdi-truck-delivery
        </v-icon>
        <p class="font-weight-black">FREE AND FAST DELIVERY</p>
        <p>Free delivery for all orders over $140</p>
      </div>
    </v-col>
    <v-col cols="12" md="4" class="text-center">
      <div>
        <v-icon class="bg-black pa-6 rounded-circle">
          mdi-phone
        </v-icon>
        <p class="font-weight-black">24/7 CUSTOMER SERVICE</p>
        <p>Friendly 24/7 customer support</p>
      </div>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
      <div>
        <v-icon class="bg-black pa-6 rounded-circle"> 
          mdi-cash
        </v-icon>
        <p class="font-weight-black">MONEY BACK GUARANTEE</p>
        <p>We return money within 30 days</p>
      </div>
      </v-col>
  
  </v-row>
 </v-container>
</template>
