import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-1/2 md:h-2/4 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p>TOUS DROITS RESERVES.</p>
    </div>
  )
}

export default Footer
