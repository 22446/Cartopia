<template>
    
    <v-container>
  <GoBack/>

        <v-row>
            <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
            <v-col cols="12"  md="6">
                <v-carousel show-arrows="hover" height="300" cycle>
            <v-carousel-item v-for="pro in product.images" :key="pro._id"  cover>
                <v-img :src="pro"></v-img>
            </v-carousel-item>
          </v-carousel>
            </v-col>
            <v-col cols='12' md="6">
                <h3 class="text-h5 font-weight-black">{{ product.title }} <span class="text-green">({{product.quantity}})</span> </h3>
                <div class="d-flex align-center ga-2 my-3">
              <v-rating
                half-increments
                readonly
                :length="5"
                :size="24"
                :model-value="product.ratingsAverage"
                color="warning"
                active-color="warning"
              />
              <span>({{ product.ratingsQuantity }})</span>
            </div>
            <p class="text-h6 d-flex flex-row ga-5 my-3">
              <span class="text-red" v-if="product.priceAfterDiscount">${{ product.priceAfterDiscount }}</span>
              <span :class="product.priceAfterDiscount?'text-decoration-line-through  text-grey' :'text-red'"
                >${{ product.price }}</span
              >
            </p>
                <p class="font-weight-bold ">{{ product.description }}</p>
                <v-divider class="my-3"></v-divider>
                <div  class="my-3 d-flex justify-space-center ga-2">
                    <v-btn color="red" :loading="loadingCart[product._id]"  @click.prevent="Addtocart.AddTocart(product._id)"> <v-icon>mdi-plus</v-icon>add to cart </v-btn>
                   <v-btn color="warning" :loading="loadingWish[product._id]" @click.prevent="AddtoWish.AddToWishList(product._id)"><v-icon>mdi-heart</v-icon>add to wishlist</v-btn>
            </div>
            <div class="border rounded my-3 ">
                <div class="d-flex align-center ga-7 border-b pa-4">
                    <v-icon class="text-h4">
                       mdi-truck
                    </v-icon>
                    <div>
                        <p class="font-weight-bold">Free delivary</p>
                        <p>Free delivery saves money and time.</p>
                    </div>
                </div>
                <div class="d-flex align-center ga-7 pa-4">
                    <v-icon class="text-h4">
                        mdi-reload
                    </v-icon>
                    <div>
                        <p class="font-weight-bold">Return Delivery</p>
                        <p>Free 30 Days Delivery Returns</p>
                    </div>
                </div>
            </div>
            </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
       <MoreProduct/>
    </v-container>

    </template>

    <script setup>
    

import { useRouter } from 'vue-router';
import { UseProducts } from '@/stores/ProductStore';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import MoreProduct from '@/components/MoreProduct.vue';
import { UseCart } from '@/stores/CartStore';
import { UseWishList } from '@/stores/WishList';
import GoBack from '@/components/GoBack.vue';
const {product,loading}=storeToRefs(UseProducts())
const productbyid=UseProducts()
const {loadingCart}=storeToRefs(UseCart())
const {loadingWish}=storeToRefs(UseWishList())
const Addtocart=UseCart()
const AddtoWish=UseWishList()
const router=useRouter()
const Products = UseProducts()
watchEffect(async()=>{
    const id=router.currentRoute.value.params.id
if(id){
  await  productbyid.GetProductById(id) 
  await Products.getProductsAfterDis()
}
})
</script>