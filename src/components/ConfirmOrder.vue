<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          variant="tonal"
          color="red"
          :disabled="cartProduct?.data?.numOfCartItems == 0"
          width="50%"
          class="mx-auto"
          v-bind="activatorProps"
        >
          Procees to checkout <v-icon>mdi-cash-check</v-icon>
        </v-btn>
      </template>

      <v-card prepend-icon="mdi-account" title="User Information">
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field label="details*" v-model="shippingAddress.details" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="shippingAddress.phone" label="phone"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="city*" v-model="shippingAddress.city" required></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" @click.prevent="ConfirmOrderFunc.Confirmorder(cartProduct.data.cartId)" :loading="loadingOrder" text="Confirm" variant="tonal" ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { UseOrder } from '@/stores/OrderStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const dialog = ref(false)
const {shippingAddress,loadingOrder}=storeToRefs(UseOrder())
const ConfirmOrderFunc=UseOrder()
defineProps({
  cartProduct: Object,
  
})
</script>
