import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Services = () => {
  return (
    <>
      <div className="bg-white text-pilates w-full text-center p-4">
        <h2 className="font-bold text-3xl">NOS SERVICES</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/services#carte"
            className="flex flex-col gap-2 items-center justify-center p-3 m-2 w-64 h-72 rounded-lg ring-2 ring-rosekine hover:shadow-lg hover:shadow-vert hover:ring-vert focus:scale-105"
          >
            <Image className="rounded-lg" src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963374/serviceALC_yvdlx5.webp" alt="Coeur en Santé" width={200} height={200} />
            <h3>SÉANCES A LA CARTE</h3>
          </Link>
          <Link
            href="/services#maternite"
            className="flex flex-col gap-2 items-center justify-center p-3 m-2 w-64 h-72  rounded-lg ring-2 ring-rosekine hover:shadow-lg hover:shadow-vert hover:ring-vert focus:scale-105"
          >
            <Image className="rounded-lg" src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963375/serviceMaternite_mmg6qp.webp" alt="Maternit" width={200} height={200} />
            <h3>MATERNITÉ</h3>
          </Link>
          <Link
            href="/services#pelvienne"
            className="flex flex-col gap-2 items-center justify-center p-3 m-2 w-64 h-72  rounded-lg ring-2 ring-rosekine hover:shadow-lg hover:shadow-vert hover:ring-vert focus:scale-105"
          >
            <Image className="rounded-lg" src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963375/serviceSantePelv_lq5wdb.webp" alt="Santé pelvienne" width={200} height={200} />
            <h3>SANTÉ ABDOMINALE & PELVIENNE</h3>
          </Link>
          <Link
            href="/services#50"
            className="flex flex-col gap-2 items-center justify-center p-3 m-2 w-64 h-72  rounded-lg ring-2 ring-rosekine hover:shadow-lg hover:shadow-vert hover:ring-vert focus:scale-105"
          >
            <Image className="rounded-lg" src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963375/service50_sis4xg.webp" alt="50 ans en mouvement" width={200} height={200} />
            <h3>50+ EN MOUVEMENT</h3>
          </Link>
        </div>
      </div>
    </>
  )
}
