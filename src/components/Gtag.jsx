'use client'

import Script from "next/script"

const Gtag = () => {
  return (
    <>

    <Script src={`https://www.googletagmanager.com/gtag/js?id="G-CR1FSTKEH8"`} />

    <Script id="google-analytics">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', "G-CR1FSTKEH8");
    `}
    </Script>
</>
  )
}

export default Gtag