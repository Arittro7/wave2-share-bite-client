import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpeg'
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  
  const { user, logOut } = useAuth();

  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme('forest')
    } else{
      setTheme('light')
    }
  }

  return (
    <div className='navbar justify-center shadow-sm container px-4 mx-auto bg-pink-800 rounded-lg mt-2 text-white'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto size-7 md:size-16 rounded-full' src={logo} alt='' />
          <span className='text-xs md:text-2xl md:font-bold  bg-transparent '>Share-Bite</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 '>
          
          <li>
                <label className="swap swap-rotate">
        
        {/* this hidden checkbox controls the state */}
        <input
        onChange={handleToggle}
         type="checkbox" className="theme-controller" 
         />
        
        {/* sun icon */}
        <svg className="swap-off fill-current w-6 h-4 md:w-10 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
        {/* moon icon */}
        <svg className="swap-on fill-current w-6 h-4 md:w-10 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
                  </label>
          </li>

          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/all-foods'>All Foods</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 border-4 border-[#eb9916] rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm bg-pink-800 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 '
            >
              <li>
                <Link to='/add-product' className='justify-between'>
                  Add Product
                </Link>
              </li>
              <li>
                <Link to='/my-add-products'>My Add Products</Link>
              </li>
              <li>
                <Link to='/my-order'>My Order</Link>
              </li>
              <li>
                <Link to='/my-profile'>My Profile</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-pink-700 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
