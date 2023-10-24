import React from 'react'
import './Chart.css'  //import css
import Chart1 from './Chart1'
import icon from '../../assets/img/icon.svg'

//component below 

import Listdata from './Listdata'

const Chart = () => {
  return (
   
        <div className='flex items-center flex-col  '>
          <div className='w-full h-20 mt-8 flex justify-around items-center bg-zinc-700'>
            <div className=''><img src={icon} alt="" className='w-16' /></div> 
            <div className='text-5xl'>walk</div>
          </div>
          <Chart1/>
          <Listdata/>
        </div>
    
    
  );
}

export default Chart