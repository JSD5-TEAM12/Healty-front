import React from 'react'

const Height = ({setHeight,height}) => {
  return (
    <div>
        <div className='pt-20'>
        <div className=''>
          <h2 className='text-center text-white text-3xl'>What’s your height?</h2>
          <p className='text-zinc-500 text-center'>This helps us create your personalized plan</p>
        </div>
            <p className='text-white text-center text-xl'>cm</p>
        <div className=' mt-16 h-96 flex overflow-hidden '>
          <div className='  sm:w-2/5 lg:w-2/5 range_show_numer '>
            <p className='text-center text-4xl text-zinc-600'> {height - (-3)} </p>
            <p className='text-center text-5xl text-zinc-500 '> {height - (-2)} </p>
            <p className='text-center text-6xl text-zinc-500 '> {height - (-1)} </p>
            <div className='sm:w-full mx-auto  md:w-2/5 '>
              <p className='text-center text-8xl text-white current_age '> {height} </p>
            </div>
            <p className='text-center text-6xl text-zinc-200 '> {height - 1} </p>
            <p className='text-center text-5xl text-zinc-300 '> {height - 2} </p>
            <p className='text-center text-4xl text-zinc-400 '> {height - 3} </p>
          </div>

          <div className=''>
            <input type="range" min="100" max="200" className='range_bar' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>


        </div>
        {/* <div className=' relative bg-zinc-800  rounded-md top-20 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn'>Next</button>
        </div> */}
      </div>
    </div>
  )
}

export default Height