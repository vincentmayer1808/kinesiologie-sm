import NavBar from '@/components/NavBar'
import './globals.css'
import { Footer } from '@/components/Footer'
import { montserrat } from './fonts'
import Head from 'next/head'
import Gtag from '@/components/Gtag'

export const metadata = {
  title: 'Kinesiologie SM',
  description: 'Vivez les bienfaits de l$#8217;activité physique au quotidien avec une approche individualisée et humaine! Prenez rendez-vous de kinésiologie a Mont-Tremblant! ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      
      <Head>
        <Gtag/>
        <link href="https://db.onlinewebfonts.com/c/1d4d7dd348a7632d33c193edf4827f87?family=Biome+W04+Light" rel="stylesheet" />
      </Head>
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
