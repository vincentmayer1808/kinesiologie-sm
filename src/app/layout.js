import NavBar from '@/components/NavBar'
import './globals.css'
import { Footer } from '@/components/Footer'
import { montserrat } from './fonts'

// import { Montserrat, Dancing_Script } from 'next/font/google'
// const montserrat = Montserrat({ subsets: ['latin'] })
// const dancingScript = Dancing_Script({subsets: ['latin']})

export const metadata = {
  title: 'Kinesiologie SM',
  description: 'Site Internet de Kinesiologie Sabrina Mayer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/1d4d7dd348a7632d33c193edf4827f87?family=Biome+W04+Light" rel="stylesheet" />
      </head>
      <body className={montserrat.className}>

        <NavBar className="text-gris"/>

        <div className='pt-28 sm:pt-14 text-gris'>

          {children}
        </div>
        <Footer className="text-gris"/>
      </body>
    </html>
  )
}
