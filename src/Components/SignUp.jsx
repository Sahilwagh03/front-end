
import React , {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
export const SignUp = () => {

    const [name ,setname]= useState('')
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
      },[])

    const collectData = async ()=>{
        console.log(name,email,password)
        let result = await fetch('https://e-commerce-hjvt.onrender.com/register',{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user',JSON.stringify(result.result))
        localStorage.setItem('Token',JSON.stringify(result.auth))
        if(result){
            navigate('/')
        }
    }
    
    return (
        <div className='input_group'>
            <h1>Register</h1>
            <input className='inputBox' type="name" placeholder='Enter Name' value={name} onChange={(e)=>setname(e.target.value)}/>
            <input className='inputBox' type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className='inputBox' type="password" placeholder='Enter Password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn_signUp' type='button' onClick={collectData}>Sign Up</button>
        </div>
    )
}
