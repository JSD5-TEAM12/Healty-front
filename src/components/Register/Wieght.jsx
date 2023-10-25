import React from 'react'

const Wieght = ({ setWeight, weight }) => {
  return (
    <main className={`flex flex-col md:gap-[7.5rem] gap-[7.4rem] overflow-hidden`}>
            <header className=" ">
        <h2 className="text-white text-center text-3xl md:text-5xl">
        What’s your weight?
        </h2>
        <p className="text-zinc-500 text-center text-xl  md:text-2xl">
        You can always change this later
        </p>
      </header>

        <div className=' flex justify-center  items-center'>
          <p className='text-center text-9xl md:text-[10rem] text-white '> {weight} </p>
          <p className='text-2xl md:text-4xl text-white self-end py-3'>kg</p>
        </div>

        <div className='mb-16'>
          <input type="range" name="" id="" onChange={(e) => setWeight(e.target.value)} value={weight} min="0" max="100" step="0.1" className='w-full range_bar_weigth' />
          <div className='scale_weight'>

          </div>
        </div>
      
    </main>
  )
}

export default Wieght
