import axios from "axios";
import { defineStore } from"pinia";

export const  UseCart=defineStore('cart',{
    state:()=>({
        cartProduct:{},
        loadingQuantity: {},
        loadingDelete: {},
        loadingClear:false, 
        countCart:'',
        loadingCartAll:false, 
        loadingCart:{}
    }),
    actions:{
        async AddTocart(id){
            this.loadingCart[id]=true
           await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:id},{
                headers:{token:localStorage.getItem('tokenUser')}
            }).then((res)=>{
                this.cartProduct=res.data
                this.getCardProduct();
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                this.loadingCart[id]=false
            })
        },
        async getCardProduct(){
            this.loadingCartAll=true
            await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
                headers:{token:localStorage.getItem('tokenUser')}
            }).then((res)=>{
                this.cartProduct=res
                this.countCart=res?.data?.numOfCartItems
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
            this.loadingCartAll=false

            })
        },
        async UpdateCount(id,count){
            this.loadingQuantity[id]=true
            await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {count:count},
            {headers:{token:localStorage.getItem('tokenUser')}}).then((res)=>{
                this.getCardProduct()
                console.log(res)
                this.loadingQuantity[id]=false
            })
        },
        async DeleteItem(id){
            this.loadingDelete[id]=true
            await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {headers:{token:localStorage.getItem('tokenUser')}}).then((res)=>{
                this.getCardProduct()
                console.log(res)
                this.loadingDelete[id]=false
            })
        },
        
        async DeleteCart(){
          
            this.loadingClear=true
            await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
            {headers:{token:localStorage.getItem('tokenUser')}}).then((res)=>{
                this.getCardProduct()
                console.log(res)
               this.loadingClear=false
            })
        }
    }
})