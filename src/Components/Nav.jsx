import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    //This re-Render the component
    navigate('/signup')
  }
  return (
    <div>
      <img className='logo' src="https://i.pinimg.com/originals/4c/4d/9b/4c4d9bc3f0f191a2e5b98ee645182282.png" alt="logo" />
      {
        auth ?
          <ul className='Nav_ul'>
            
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Products</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
          </ul>
          :
          <ul className='Nav_ul nav_right'>
            <li><Link to='/signup'>SignUP</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
      }
    </div>
  )
}
