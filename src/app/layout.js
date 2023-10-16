import NavBar from '@/components/NavBar'
import './globals.css'
import { Montserrat} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Kinesiologie SM',
  description: 'Site Internet de Kinesiologie Sabrina Mayer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://db.onlinewebfonts.com/c/1d4d7dd348a7632d33c193edf4827f87?family=Biome+W04+Light" rel="stylesheet"/>
      </head>
      <body className={montserrat.className}>

        <NavBar/>
        
      <div className='pt-24 sm:pt-12'>

        {children}
      </div>
        </body>
    </html>
  )
}
