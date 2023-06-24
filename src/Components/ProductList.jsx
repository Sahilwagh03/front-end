import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const ProductList = () => {

  const [product, setProduct] = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {

    let result = await fetch('https://e-commerce-hjvt.onrender.com/products')
    result = await result.json()
    setProduct(result)
  }

  const deleteProduct =async (id)=>{
    let result  = await fetch(`https://e-commerce-hjvt.onrender.com/product/${id}`,{
      method:"Delete"
    })
    result = await result.json()
    if(result){
      alert('Record is deleted')
      getProducts()
    }
  }


  const searchHandle = async (event)=>{
    let key = event.target.value
    if(key){
      let result = await fetch(`https://e-commerce-hjvt.onrender.com/Search/${key}`)
      result = await result.json()
      if(result){
      setProduct(result)
    }
  }
    else{
      getProducts()
    }

  }
  return (
    <div className='product-list'>
      <h3>Product List</h3>
      <input type="text" placeholder='Search for Product' className='search_box' onChange={(e)=>{searchHandle(e)}}/>
      <ul>
        <li>Sr. No </li>
        <li>Name </li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {
        product.length>0 ? product.map((item ,index) =>
          <ul key={index}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>$ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={()=>{deleteProduct(item._id)}}>Delete</button>
              <Link to={`/update/${item._id}`}>Update</Link>
            </li>
          </ul>
        ):
        <h1>Not Found</h1>
      }
    </div>
  )
}
