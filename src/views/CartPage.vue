<template>
  <v-container>
  <GoBack/>
  <div v-if="countCart!==0">
<div v-if="loadingCartAll">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
  <v-table
      height="500px"
      fixed-header
     
      
    >
      <thead class="text-h5 font-weight-black">
        <tr>
          <th class="text-left">
            Product
          </th>
         
          <th class="text-left">
           Quantity
          </th>
          <th class="text-left">
           Subtotal
          </th>
        </tr>
      </thead>
      <tbody class="text-h6">
        <tr
          v-for="item in cartProduct?.data?.data?.products"
          :key="item._id"
        >
          <td class="text-left  d-flex align-center ga-4"> 

            <v-img :src="item.product.imageCover" max-width="50" max-height="50"></v-img>
           <span>{{ item.product.title.split(' ',2).join(' ')}} </span>
           <div v-if="loadingDelete[item.product.id]">
            <v-progress-circular indeterminate></v-progress-circular>

           </div>
           <div v-else>
           <span> <v-icon color="red" @click.prevent="cartFunc.DeleteItem(item.product.id)">mdi-delete</v-icon></span>
           </div>
            
          </td>
        
          <td class="text-left">
              <div v-if="loadingQuantity[item.product.id]">
                <v-progress-circular indeterminate></v-progress-circular>
              </div>
              <div v-else>
               <v-icon class="text-green cursor-pointer"   @click.prevent="cartFunc.UpdateCount(item.product.id,item.count+1)">mdi-plus</v-icon> {{ item.count }} <v-icon class="text-red cursor-pointer" @click.prevent=(cartFunc.UpdateCount(item.product.id,item.count-1))>mdi-minus</v-icon>
                </div>
            </td>
          <td class="text-left">{{ item.price * item.count }}$</td>

        </tr>
      </tbody>
    </v-table>
 <div class="d-flex justify-space-between pt-5">
 <router-link to="/"> <v-btn size="large"  elevation="5">Return to shop</v-btn></router-link>
  <v-btn size="large" color="red"  @click.prevent="cartFunc.DeleteCart" :loading="loadingClear" :disabled="loadingClear"  elevation="5">Clear Cart</v-btn>
 </div>
<v-row class="justify-end">
  <v-col cols="12" md="6" class="border-lg mt-8 d-flex flex-column ga-4">
    <p class="text-h6 font-weight-black">Cart total</p>

    <div class="d-flex justify-space-between font-weight-bold">
      <p>Subtotal</p>
      <p>{{cartProduct?.data?.data?.totalCartPrice}}$</p>
    </div>
    <v-divider></v-divider>
    <div class="d-flex justify-space-between font-weight-bold">
      <p>Shiping</p>
      <p>free</p>
    </div>
    <v-divider></v-divider>

    <div class="d-flex justify-space-between font-weight-bold">
      <p>Total</p>
      <p>{{cartProduct?.data?.data?.totalCartPrice}}$</p>
    </div>
    <ConfirmOrder :cartProduct="cartProduct"     />
  </v-col>
  
</v-row>
</div>
<div v-else>
  <v-alert
    density="compact"
  
    title="Cart is empty"
    type="warning"
  >
    
      <router-link to="/"><v-btn color="black my-2" text>Return to shop</v-btn></router-link>
   
 </v-alert>

  </div>

  </v-container>   
  </template>
  <script setup>
import ConfirmOrder from '@/components/ConfirmOrder.vue';
import GoBack from '@/components/GoBack.vue';
import { UseCart } from '@/stores/CartStore';
import { storeToRefs } from 'pinia';

import { onMounted } from 'vue';

   const { countCart,cartProduct,loadingQuantity,loadingDelete,loadingClear,loadingCartAll} = storeToRefs(UseCart())
   const cartFunc = UseCart()
   
   onMounted(async ()=>{
   await cartFunc.getCardProduct()
   })
       
       
  </script>