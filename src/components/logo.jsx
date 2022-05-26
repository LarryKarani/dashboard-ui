import React from 'react'
import LogoImage from '../assets/logo.png'

const Logo = () => {
  return (
    <div className='flex flex-row'>
     <img className='h-8 w-auto' src={LogoImage} alt="Insurance Portal" />
     <span className='text-normal font-bold text-black'>Insurance Portal</span>
    </div>
  )
}

export default Logo