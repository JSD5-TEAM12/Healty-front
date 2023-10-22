import React from 'react'

const Intro = () => {
  return (
    <article className='h-screen border flex justify-center align-middle items-center bg-zinc-200'>

      <section className='rounded-md w-1/2 mx-auto shadow-lg py-10 bg-white'>
        <div>
          <p className='pl-28 font-bold'>Front-end</p>
          <h1 className='text-5xl text-center font-bold'>Welcome to Final-Project</h1>
          <h2 className='text-2xl pl-28 mt-2 font-bold'>Survivor</h2>
          <div className='w-1/2  mt-5 mx-auto'>
            <ul className='flex flex-col gap-5 '>
              <li>21_Narathip (Nice/ไนท์)</li>
              <li>34_Rittik(Rit/ริท)</li>
              <li>40_Sittikorn(Beer/เบียร์)</li>
              <li>52_Thanwarat(Tong/ตอง)</li>
              <li>58_Vanchana(Vic/วิก)</li>
            </ul>
          </div>
          <h3 className='text-end pr-28 text-2xl mt-5 font-bold'>Goodluck everyone :) </h3>
        </div>
      </section>
      
    </article>
  )
}

export default Intro