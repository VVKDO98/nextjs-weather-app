import Head from 'next/head'
import React from 'react'

function Header({pageTitle, icon}) {
  return (
    <Head>
        <title>Weather in {pageTitle}</title>
        <link
          rel="icon"
          href={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        />
    </Head>
  )
}

export default Header