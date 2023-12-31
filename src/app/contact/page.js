import { Contact } from '@/components/Contact'
import { Info } from '@/components/Info';
import Image from 'next/image'
import React from 'react'

const page = () => {


  return (
    <div className='text-center'>
            <h2 className='text-gris font-semibold text-3xl'>CONTACT</h2>

      <div className='flex flex-col-reverse m-3 text-pilates justify-evenly items-center'>
        <Contact />
        <Info className='p-2'/>
      </div>
      <p className='pt-6'>*Service offert en ligne ou en présentiel dans la région de Mont-Tremblant et alentour.</p>
      <div className='flex items-center justify-center'>
        <Image src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696431033/KSMlogo_oobig8.webp" alt='Logo' width={500} height={500} />
      </div>
    </div>
  )
}

export default page