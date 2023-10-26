import React from 'react'
import './Home.css'  //import css
import Feed from '../Feed/Feed'
import SelectActivity from '../SelectActivity/SelectActivity'
//component below 


const Home = () => {
  return (
    
    <main className='justify-center h-screen w-screen max-w-7xl mx-auto px-4  lg:px-0  flex flex-col gap-4'>
      <Feed />
      <SelectActivity />
    </main>
  )
}

export default Home
