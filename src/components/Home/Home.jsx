import React from 'react'
import './Home.css'  //import css
import Feed from '../Feed/Feed'
import SelectActivity from '../SelectActivity/SelectActivity'
//component below 


const Home = () => {
  return (
    
    <>
    <div>Home</div>
    <div className=''>
      <Feed />
      <SelectActivity />
    </div>
    
    </>
  )
}

export default Home