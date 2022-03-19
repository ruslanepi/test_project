import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  let navigate = useNavigate()

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
    navigate('/login')
  }
  return (
    <div className='navbar'>
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className='navbar__link'>
        <Link to='/about'>About</Link>
      </div>
      <div className='navbar__link'>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  )
}

export default Navbar
