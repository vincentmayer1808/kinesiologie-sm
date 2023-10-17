import { Contact } from '@/components/Contact'
import { Info } from '@/components/Info';
import Image from 'next/image'
import React from 'react'

const page = () => {


  return (
    <div className='text-center'>
      <h2 className='text-gris font-semibold text-2xl'>Contactez-Moi</h2>
      <div className='flex flex-col-reverse sm:flex-row m-3 text-pilates justify-evenly items-center'>
        <Info className='sm:w-1/2 p-2'/>

        <Contact className='sm:w-1/2' />

      </div>
      <p>*Service en ligne ou présenciel à Mont-Tremblant et alentours</p>
      <div className='flex items-center justify-center'>
        <Image src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696431033/KSMlogo_oobig8.webp" alt='Logo' width={500} height={500} />
      </div>
    </div>
  )
}

export default page