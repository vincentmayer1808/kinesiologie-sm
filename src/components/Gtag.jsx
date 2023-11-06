'use client'

import Script from "next/script"

const Gtag = () => {
  return (
    <>

    <Script src={`https://www.googletagmanager.com/gtag/js?id="G-ZPLG7K317G"`} />

    <Script id="google-analytics">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', "G-ZPLG7K317G");
    `}
    </Script>
</>
  )
}

export default Gtag