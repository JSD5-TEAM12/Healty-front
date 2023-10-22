import React from 'react'
import { Link } from 'react-router-dom'

const Data = (
  {
    setUsername,
    username,
    setPassword,
    setPassword2,
    password,
    password2,
    setEmail,
    email,
    checkPass

  }) => {
  return (
    <div>
      <div className='pt-20'>
        <div className=' '>
          <h1 className='text-white text-center text-3xl'>Create new account</h1>
          <p className='text-zinc-500 text-center '>join with us in Healthy Impress !</p>
        </div>

        <div className='px-5 flex flex-col gap-5 mt-16'>
          <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your username' required value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className=' input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" className=' input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Confirm your password' required value={password2} onChange={(e) => setPassword2(e.target.value)} />
          <p className='text-white text-center mt-10 text'>Already have account ? <Link to='/login'> <span className='text-[color:#D23D94]'>Sign In</span> </Link> </p>
        </div>

        {/* <div className=' relative bg-zinc-800  rounded-md top-60 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn' onClick={checkPass}>Next</button>
        </div> */}
      </div>


    </div>
  )
}

export default Data