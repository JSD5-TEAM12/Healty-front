import React from 'react'
import { Link } from 'react-router-dom'
import profileIMG from '../../assets/img/profile.svg'
import './UpdateProfile.css'

const UpdateProfile = () => {
  return (
    <div className='flex flex-col justify-canter mt-10'>

      <div className='flex flex-col justify-canter items-center '>
        <div className='text-5xl'>My Profile</div>
        <div className='h-[200px] w-[200px]'><img src={profileIMG} alt="" className='object-cover h-[200px] w-[200px]' /></div>
      </div>

      
 
      <div className='mt-8'>
        <div className='flex justify-around' >
          <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Firstname</label>
              <input className='input text-2xl' type="text" name="" id="" />
            </div>

            <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Lastname</label>
              <input className='input text-2xl' type="text" name="" id="" />
            </div>
        </div>

        <div className='flex justify-around' >
          <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Username</label>
              <input className='input text-2xl' type="text" name="" id="" />
            </div>

            <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Password</label>
              <input className='input text-2xl' type="password" name="" id="" />
            </div>
        </div>

        <div className='flex justify-around' >
          <div className='flex flex-col w-3/12'>
              <label htmlFor="" className='text-2xl ms-2'>Height</label>
              <input className='input text-2xl' type="number" name="" id=""/> 
            </div>

            <div className='flex flex-col w-3/12'>
              <label htmlFor="" className='text-2xl ms-2'>weight</label>
              <input className='input text-2xl' type="number" name="" id="" />
            </div>

            <div className='flex flex-col w-3/12'>
              <label htmlFor="" className='text-2xl ms-2'>Gender</label>
              <select className='input text-2xl' name="gender" id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
        </div>

        <div className='flex justify-around' >
          <div className='flex flex-col w-4/12'>
              <label htmlFor="" className='text-2xl ms-2'>Birthdat</label>
              <input className='input text-2xl' type="date" name="" id=""/>
            </div>

            <div className='flex flex-col w-6/12'>
              <label htmlFor="" className='text-2xl ms-2'>Email</label>
              <input className='input text-2xl' type="email" name="" id="" />
            </div>
        </div>

        
        
      </div>

      <section className='mt-24 mx-5  flex justify-between   '>
        <button className='block p-5 w-2/5 rounded-md bg-zinc-600 text-2xl font-bold'> <Link to ='/Home'>BACK</Link> </button>
        <button className='block p-5 w-2/5 rounded-md bg-zinc-600 text-2xl font-bold'> <Link to ='/UpdateProfile'> SAVE </Link> </button>
      </section>
     
    </div>
  )
}

export default UpdateProfile