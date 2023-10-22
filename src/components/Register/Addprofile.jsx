import React from 'react'

const Addprofile = ({
  setFirstname,
  firstname,
  setLastname,
  lastname,
  image,
  birthday,
  setBirthday,
  handleImageChange, }) => {

  return (
    <div className='pt-20'>
      <div className='border w-[102px] h-[102px] mx-auto rounded-md bg-zinc-600 bg-opacity-60'>
        <img src={image} alt="profile_user" className='w-[100px] h-[100px] object-cover rounded-md input_img ' />
        <input type="file" className='custom-file-input w-[120px] color' onChange={handleImageChange} />
      </div>

      <div className=' mx-5 mt-20 flex flex-col gap-5'>
        <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your Firstname' required value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" className='input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' placeholder='Enter your Lastname' required value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <input type="date" className=' text input_text block w-full  text-xl bg-zinc-700 bg-opacity-60 text-white p-4 rounded-md' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </div>
    </div>
  )
}

export default Addprofile