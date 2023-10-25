import React, { useState, useEffect } from 'react'
import './Profile.css'  //import css
import profile from '../../assets/img/swimming.jpg'
import { useAuth } from '../../auth/AuthContext'
import { Link } from 'react-router-dom'
//component below 
import AxiosServices from '../../services/AxiosServices'

const Profile = () => {
  let userImg = profile
  const [profile_user, setProfile_user] = useState(userImg)
  const [firstname, setFirstname] = useState("Firstname")
  const [lastname, setlastname] = useState("Lastname")
  const [hight, setHight] = useState(180)
  const [weight, setWeight] = useState(72)

  const userAuthen = useAuth();

  useEffect(() => {
    if (userAuthen.user) {
      console.log('userAuthen :>> ', userAuthen.user.userId);
      const id = userAuthen.user.userId;

      AxiosServices("GET",`http://localhost:8050/profile/${id}`,{})
      .then((res) => {
        // Assuming the response data contains user information
        const userData = res;
        setFirstname(userData.firstname);
        setlastname(userData.lastname);
        setHight(userData.height);
        setWeight(userData.weight);
        setProfile_user(userData.image)
        console.log('res :>> ', res);
      })
    }
  }, [userAuthen.user])



  return (
    <main className='w-full h-full set-index set-top0 '>
      <section className=' relative set-index'>
        <img className='blur-sm object-cover' src={profile_user} alt="profile_user" />
        <div className='overflow-hidden flex justify-center absolute bottom-[-30px] left-[50%] translate-x-[-50%]'>
          <img src={profile_user} className='w-[180px] rounded-full border-4 h-[180px] border-pink-500' alt="profile_user" />
        </div>
      </section>
      <section className=' mt-14 '>
        <p className='text-white text-3xl text-center'>{firstname} {lastname} </p>
        <p className='text-white text-3xl text-center'>{`Heighe : ${hight} cm` + ` Weight : ${weight} kg`}</p>
      </section>
      <section className='mx-5 '>
        <p className='text-2xl border-b-2 my-10'>My activity status</p>
        <div className='flex flex-col-reverse gap-5 h-[200px] overflow-y-auto '>
          <div>
            <p className='text-2xl text-center rounded-md  py-2 border-b-2 bg-zinc-800 text-white '>RUNNING</p>
          </div>
          <div>
            <p className='text-2xl text-center rounded-md  py-2 border-b-2 bg-zinc-800 text-white '>WALKING</p>
          </div>
          <div>
            <p className='text-2xl text-center rounded-md  py-2 border-b-2 bg-zinc-800 text-white '>SWIMMING</p>
          </div>
          <div>
            <p className='text-2xl text-center rounded-md  py-2 border-b-2 bg-zinc-800 text-white '>HIKKING</p>
          </div>
          <div>
            <p className='text-2xl text-center rounded-md  py-2 border-b-2 bg-zinc-800 text-white '>BICYCLE</p>
          </div>
        </div>
      </section>
      <section className='mt-16 mx-5  flex justify-between   '>
        <button className='block p-5 w-2/5 rounded-md bg-zinc-600 text-2xl font-bold'> <Link to='/Home'>BACK</Link> </button>
        <button className='block p-5 w-2/5 rounded-md bg-zinc-600 text-2xl font-bold'> <Link to='/UpdateProfile'> EDIT </Link> </button>
      </section>
    </main>
  )
}

export default Profile
