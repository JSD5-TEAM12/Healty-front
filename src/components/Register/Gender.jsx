import React from 'react'
import { IoMale, IoFemale, IoMaleFemale } from "react-icons/io5";


const Gender = ({setGender}) => {
  return (
    <div>
        <div className='pt-20'>
        <div className=''>
          <h2 className='text-center text-3xl font-bold text-white'>Tell us about yourself!</h2>
          <p className='text-center text-zinc-500'>To give you a better experience </p>
          <p className='text-center text-zinc-500'>we need to know your gender</p>
        </div>

        <div className=" pt-20  bg-slate-50 rounded-xl overflow-hidden bg-slate-800/10">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" >
          </div>
          <div className="relative rounded-xl overflow-auto">

            <div className="relative w-full flex gap-6 snap-x overflow-x-auto p-2  lg:justify-center md:justify-center">
              <div className="snap-center shrink-0 ">
                <div className="shrink-0 w-4 sm:w-48 "></div>
              </div>

              <div className="snap-normal snap-center shrink-0 first:pl-8 last:pr-8 w-40 h-40  bg-zinc-600 p-4 rounded-xl box_gender">
                <button type='button' onClick={() => setGender("female")} value={"female"}><IoFemale className='active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-9xl text-white btn_gender ' /></button>

              </div>
              <div className="snap-normal snap-center shrink-0 first:pl-8 last:pr-8 w-40 h-40  bg-zinc-600 p-4 rounded-xl box_gender">
                <button type='button' onClick={() => setGender("male")} value={"male"}><IoMale className='text-9xl text-white   btn_gender' /></button>

              </div>
              <div className="snap-normal snap-center shrink-0 first:pl-8 last:pr-8 w-40 h-40  bg-zinc-600 p-4 rounded-xl box_gender">
                <button type='button' onClick={() => setGender("malefemale")} value={"malefemale"} ><IoMaleFemale className='text-9xl text-white  btn_gender' /></button>
              </div>
              <div className="snap-center shrink-0 ">
                <div className="shrink-0 w-4 sm:w-48"></div>
              </div>
            </div></div><div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5">
          </div>
        </div>
        {/* <div className=' relative bg-zinc-800  rounded-md top-96 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn'>Next</button>
        </div> */}
      </div>
    </div>
  )
}

export default Gender