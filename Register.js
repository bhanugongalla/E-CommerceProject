import axios from 'axios'
import React,{ useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'

export default function Register() {
    const baseUrl="http://localhost:3003/products"
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [api,setApi]=useState([])
   
    
    useEffect(()=>{
        getData()
        
    },[])
    const getData=()=>{
               axios.get(baseUrl)
               .then(res=>{
                setApi(res.data)
               })
              .catch(error =>{
                    console.log(error)
                })
               }
               const myFormSubmit=(myFormData)=>{
                console.log(myFormData)
                axios.post(baseUrl,myFormData)
                  .then(res=>res.data)
                  .catch(err=>err)
                  }
           
  return (
    <>
    <h5>Product registration</h5>
    <form onSubmit={handleSubmit(myFormSubmit)}>
        productName:<input {...register('ProductName',{required:true,pattern:/^[a-zA-Z]{6,20}/i})}/>
        productPrice:<input {...register('productPrice')}></input>
        <input type='submit' name='submit' className='btn btn-primary'/>
   
    </form>
    {/* <h1>{api}</h1> */}
    </>
  )
}

