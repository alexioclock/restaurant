import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
        {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center items-center gap-8 p-6'>
        <h1 className='text-white font-bold text-5xl xl:text-6xl'>Burger Signature</h1>
        <p className='text-white xl:text-xl'>Une recette élaborée par un chef étoilé à base de bleu d'Auvergne</p>
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Commandez Maintenant</button>
        <CountDown />
      </div>
        {/* IMAGE CONTAINER */}
      <div className='flex-1 w-full relative'>
        <Image src='/offerProduct.png'alt='' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer
