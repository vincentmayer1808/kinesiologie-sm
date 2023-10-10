import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kinesiologie SM',
  description: 'Kinesiologie Sabrina Mayer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://db.onlinewebfonts.com/c/1d4d7dd348a7632d33c193edf4827f87?family=Biome+W04+Light" rel="stylesheet"/>
      </head>
      <body className={inter.className}>

        <NavBar/>
      
        {children}
        </body>
    </html>
  )
}
