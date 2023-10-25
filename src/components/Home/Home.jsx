import React from 'react'
import './Home.css'  //import css
import Feed from '../Feed/Feed'
import SelectActivity from '../SelectActivity/SelectActivity'
//component below 


const Home = () => {
  return (
    
    <>
    <main className='lg:w-[100%] flex justify-center'>
    <div className=''>
      <Feed />
      <SelectActivity />
    </div>
    </main>
    </>
  )
}

export default Home