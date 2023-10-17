import React from 'react'
import Link from 'next/link'

import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";


export const Info = () => {
    return (
        <div className='flex flex-col justify-center text-center gap-2 p-2'>
            <h3 className='text-xl'>SABRINA MAYER</h3>
            <p>819 217 7800</p>
            <p>sabrinamayer.kinesiologue@gmail.com </p>
        
            <div className='flex justify-evenly items-center'>
                <Link href="https://www.facebook.com/profile.php?id=61551595513543" target='_blank' className='hover:scale-110'>
                    <BiLogoFacebookCircle/>
                </Link>
                <Link href="https://instagram.com/kinesiologie_sm?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" target='_blank' className='hover:scale-110'>
                    <BiLogoInstagramAlt />
                </Link>
                <Link href="https://ca.linkedin.com/in/sabrina-mayer-0527a9178" target='_blank' className='hover:scale-110'>
                    <BiLogoLinkedinSquare />
                </Link>
            </div>
        </div>
    )
}
