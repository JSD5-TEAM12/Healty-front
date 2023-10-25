import React from 'react'
import './Chart.css'  //import css
import Chart1 from './Chart1'
import icon from '../../assets/img/icon.svg'
import { Link } from 'react-router-dom'

//component below 

import Listdata from './Listdata'

const Chart = () => {
  return (
   
        <div className='flex items-center flex-col'>
          <div className='w-full h-20 mt-8 flex justify-around items-center bg-zinc-700'>
            <div className=''><img src={icon} alt="" className='w-16' /></div> 
            <div className='text-5xl'>walk</div>
          </div>
          <Chart1/>
          <Listdata/>
          <div className='flex mt-10'>
            <button className='text-3xl  py-4 px-10 rounded-md bg-zinc-700'> <Link to='/profile'>BACk</Link> </button>
          </div>
        </div>
    
    
  );
}

export default Chart