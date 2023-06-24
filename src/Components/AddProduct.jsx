import React, { useState } from 'react'

export const AddProduct = () => {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const [Err,setError] = useState(false)

    const addProduct = async ()=>{
        
        if(!name || !price || !category || !company){
          setError(true)
          return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;

        let result = await fetch('https://e-commerce-hjvt.onrender.com/add-product',{
            method:"POST",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        console.log(result)
    
    }

  return (
    <div className='product'>
        <h1>Add Products</h1>
        <input className='inputBox' type="text" name="" placeholder='Enter Product Name' id="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {Err && !name && <span className='Error_message'>Enter Vaild Product Name</span>}
        <input className='inputBox' type="text" name="" placeholder='Enter Product Price' id="" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        {Err && !price && <span className='Error_message'>Enter Vaild Product Price</span>}
        <input className='inputBox' type="text" name="" placeholder='Enter Product Category' id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        {Err && !category && <span className='Error_message'>Enter Vaild Product Category</span>}
        <input className='inputBox' type="text" name="" placeholder='Enter Product Company' id="" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        {Err && !company && <span className='Error_message'>Enter Vaild Product Company</span>}
        <button className='btn' type='button' onClick={addProduct} >Add product</button>
    </div>
  )
}
