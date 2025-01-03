<template>
  <v-card  hover :to="`/productsdetails/${product._id}`">
    <v-img :src="product.imageCover" cover height="300" width="300">
      <div  class="d-flex justify-end" v-if ="loadingWish[product._id]">
        <v-progress-circular indeterminate></v-progress-circular>

      </div>
      <div class="d-flex justify-end" v-else >
        
 
        <v-chip class="justify-center text-center" variant="text">
         <v-icon v-if="WishListProducts?.data?.data?.find( (p)=>p._id===product._id) " color="red text-h4" @click.prevent="WishlistFun.RemovefromWishList(product._id)"
            >   mdi-heart-minus
        </v-icon>
            <v-icon v-else color="red text-h4"  @click.prevent="WishlistFun.AddToWishList(product._id)">
             
              mdi-heart-plus
            </v-icon>
          </v-chip
        >
      </div>
    </v-img>
    <v-card-title>
      <h2 class="text-subtitle-1">{{ product.title.split(' ', 2).join(' ') }}</h2>
    </v-card-title>

    <v-card-text>
      <p class="text-h6 d-flex flex-row ga-5">
        <span class="text-red" v-if="product.priceAfterDiscount"
          >${{ product.priceAfterDiscount }}</span
        >
        <span
          :class="
            product.priceAfterDiscount ? 'text-decoration-line-through  text-grey' : 'text-red'
          "
          >${{ product.price }}</span
        >
      </p>
      <div class="d-flex align-center">
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
    </v-card-text>
  </v-card>
  <v-btn color="red " @click="cartFun.AddTocart(product._id)" :loading="loadingCart[product._id]" width="100%">
    <v-icon>mdi-plus</v-icon>add to cart
  </v-btn>
</template>

<script setup>
import { UseCart } from '@/stores/CartStore'
import { UseWishList } from '@/stores/WishList'
import { storeToRefs } from 'pinia'
import { defineProps } from 'vue'
const { loadingCart } = storeToRefs(UseCart())
const { loadingWish,WishListProducts } = storeToRefs(UseWishList())
const cartFun = UseCart()
const WishlistFun = UseWishList()
defineProps({
  product: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },

})

</script>
