import React, { PropsWithChildren } from 'react'
import { NavBar } from './_components/NavBar'
import { Footer } from './_components/Footer'

const MarketingLayout = ({children}: PropsWithChildren) => {
  return (
    <div className='h-full bg-slate-100'>
      <NavBar />
        <main className='pt-40 pg-20 bg-slate-100'>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default MarketingLayout