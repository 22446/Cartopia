<template>
<v-container>
   <v-row>
      <v-col cols="12" md="8" offset-md="2">
         <v-card v-for="order in OrderItems?.data" :key="order._id" class="mb-4">
            <v-card-title>
               <h2>Order ID: {{ order._id }}</h2>
            </v-card-title>
            <v-card-subtitle>
               <v-row>
                  <v-col cols="12" md="6">
                     <p><strong>User:</strong> {{ order.user.name }} ({{ order.user.email }})</p>
                     <p><strong>Shipping Address:</strong> {{ order.shippingAddress.details }}, {{ order.shippingAddress.city }}, {{ order.shippingAddress.phone }}</p>
                  </v-col>
                  <v-col cols="12" md="6">
                     <p><strong>Total Price:</strong> ${{ order.totalOrderPrice }}</p>
                     <p><strong>Payment Method:</strong> {{ order.paymentMethodType }}</p>
                     <p><strong>Paid:</strong> {{ order.isPaid ? 'Yes' : 'No' }}</p>
                     <p><strong>Delivered:</strong> {{ order.isDelivered ? 'Yes' : 'No' }}</p>
                  </v-col>
               </v-row>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
               <h3>Cart Items:</h3>
               <v-row>
                  <v-col v-for="item in order.cartItems" :key="item._id" cols="12" md="6">
                     <v-card class="mb-2">
                        <v-img :src="item.product.imageCover" height="200px"></v-img>
                        <v-card-text>
                           <p><strong>Product:</strong> {{ item.product.title }}</p>
                           <p><strong>Price:</strong> ${{ item.price }}</p>
                           <p><strong>Quantity:</strong> {{ item.count }}</p>
                        </v-card-text>
                     </v-card>
                  </v-col>
               </v-row>
            </v-card-text>
         </v-card>
      </v-col>
   </v-row>
</v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { UseOrder } from '@/stores/OrderStore'
import { jwtDecode } from 'jwt-decode'
import { storeToRefs } from 'pinia';
const {OrderItems} = storeToRefs(UseOrder())
const OrderFnc = UseOrder()
const DecodedMsg = ref(jwtDecode(localStorage.getItem('tokenUser')))

onMounted(async () => {
  await OrderFnc.GetOrders(DecodedMsg.value.id)
  console.log(OrderItems)
})
</script>
