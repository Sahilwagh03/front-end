import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const param = useParams()
    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const [Err,setError] = useState(false)

    useEffect( ()=>{
        getProduct()
    },[])

    const getProduct = async ()=>{
        let result = await fetch(`https://e-commerce-hjvt.onrender.com/product/${param.id}`)
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const UpdateProduct = async ()=>{
        console.log(name,price,category,company)

        let result = await fetch(`https://e-commerce-hjvt.onrender.com/update/${param.id}`,{
            method:'PUT',
            body:JSON.stringify({name,price,category,company}),
            headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        console.log(result)
        navigate('/')
    }

  return (
    <div className='product'>
        <h1>Update Product</h1>
        <input className='inputBox' type="text" name="" placeholder='Enter Product Name' id="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {Err && !name && <span className='Error_message'>Enter Vaild Product Name</span>}
        <input className='inputBox' type="text" name="" placeholder='Enter Product Price' id="" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        {Err && !price && <span className='Error_message'>Enter Vaild Product Price</span>}
        <input className='inputBox' type="text" name="" placeholder='Enter Product Category' id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        {Err && !category && <span className='Error_message'>Enter Vaild Product Category</span>}
        <input className='inputBox' type="text" name="" placeholder='Enter Product Company' id="" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        {Err && !company && <span className='Error_message'>Enter Vaild Product Company</span>}
        <button className='btn' type='button' onClick={UpdateProduct} >Update</button>
    </div>
  )
}

export default UpdateProduct
