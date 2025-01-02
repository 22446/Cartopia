import axios from 'axios';
import{ defineStore } from 'pinia';

export  const UseOrder =defineStore('order',{
    state:()=>({
        shippingAddress:{
            details:'',
            phone:'',
            city:'',
        } ,
        loadingOrder:false,
        OrderItems:[]

    }),
    actions:{
        async Confirmorder(id)
        {
            this.loadingOrder=true
            await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:5173`,{shippingAddress:this.shippingAddress},
               {headers:{token:localStorage.getItem('tokenUser')}}
            )
            .then((res)=>{
                console.log(res)
                console.log(res.data.session.url)
                window.location=res.data.session.url
                this.loadingOrder=false
               
            })
        },
        async GetOrders(id){
            
            await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
            .then((res)=>{
                this.OrderItems=res
                console.log(res)
               
            })
        }
        
    }
})