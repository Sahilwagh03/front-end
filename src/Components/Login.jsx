import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const [email ,setEmail]= useState('')
    const [password ,setPassword]= useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    },[])

    const handleLogin=async ()=>{
        let result = await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        console.log(result)
        if(result.auth){
            localStorage.setItem('user',JSON.stringify(result.user))
            localStorage.setItem('Token',JSON.stringify(result.auth))
            navigate('/')
        }
        else{
            alert('Enter correct details')
        }
    }


  return (
    <div className='input_group'>
            <h1>Login</h1>
            <input className='inputBox' type="email" placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input className='inputBox' type="password" placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button className='btn_signUp' type='button' onClick={handleLogin} >Login</button>
        </div>
  )
}


