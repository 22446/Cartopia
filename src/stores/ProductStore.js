import axios from "axios";
import  { defineStore } from "pinia";

export const UseProducts= defineStore('producti',{
    state: () => ({
        products: [],
        loading:false,
        product:{}
    }),
    actions: {
        async getProductsAfterDis(){
            this.loading=true
            await axios.get('https://ecommerce.routemisr.com/api/v1/products').
            then(res=>{
                this.products=res.data.data.filter(product => product.priceAfterDiscount)
                console.log(res)
            }).catch(err=>{
                    console.log(err)
            }).finally(()=>{
                this.loading=false
            })
        },
        async GetAllProducts(){
            this.loading=true
            await axios.get('https://ecommerce.routemisr.com/api/v1/products').
            then(res=>{
                this.products=res.data.data
                console.log(res)
            }).catch(err=>{
                    console.log(err)
            }).finally(()=>{
                this.loading=false
            })
        },        
        async GetProductById(id){
            this.loading=true
            this.product={}
            await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).
            then(res=>{
                this.product=res.data.data
                console.log(res)
            }).catch(err=>{
                    console.log(err)
            }).finally(()=>{
                this.loading=false
            })

        }
    }
})