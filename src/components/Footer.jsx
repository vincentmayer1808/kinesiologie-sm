import React from 'react'
import { Info } from './Info'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-evenly items-center gap-2 bg-gradient-to-b from-white to-rosekine pb-4'>
                <div className='flex  items-center justify-center sm:w-1/3'>
                    <Image src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1697568837/KSMlogo-removebg-preview_fkru0z.webp" alt='Logo' width={250} height={250} />
                </div>
                <Info className="sm:w-1/3" />
                <div className="sm:w-1/3 flex flex-col items-center justify-center tecxt-center">
                    <h2 className='text-xl font-semibold'>Services</h2>
                    <ul className='flex flex-col items-center justify-center'>
                        <Link href="/services#carte" className='hover:text-vert hover:scale-105'><li>À la carte</li></Link>
                        <Link href="/services#maternite" className='hover:text-vert hover:scale-105'><li>Maternité</li></Link>
                        <Link href="/services#pelvienne" className='hover:text-vert hover:scale-105'><li>Santé Pelvienne</li></Link>
                        <Link href="/services#50" className='hover:text-vert hover:scale-105'><li>50+ en mouvement</li></Link>

                    </ul>
                </div>

            </div>

            <div className='w-full text-center bg-black text-white text-xs'>
                <p>Developed by vincentmayer1808®</p>
            </div>
        </div>
    )
}
