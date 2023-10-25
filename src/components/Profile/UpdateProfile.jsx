import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import profileIMG from '../../assets/img/profile.svg'
import './UpdateProfile.css'
import AxiosServices from '../../services/AxiosServices';
import { useAuth } from '../../auth/Authcontext';
import axios from 'axios';

const UpdateProfile = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [profile_user, setProfile_user] = useState("")
  const [gender, setGender] = useState("")
  const [height, setHeight] = useState(150)
  const [weight, setWeight] = useState(40)
  const [birthday, setBirthday] = useState("")
  const navigate = useNavigate()
  const userAuthen = useAuth()
  console.log('gender :>> ', gender);

  useEffect(() => {
    if (userAuthen.user) {
      console.log('userAuthen :>> ', userAuthen.user.userId);
      const id = userAuthen.user.userId;

      AxiosServices("GET",`http://localhost:8050/profile/${id}`,{})
      .then((res) => {
        const userData = res;
        setUsername(userData.username)
        setPassword(userData.password)
        setEmail(userData.email)
        setGender(userData.gender)
        setBirthday(userData.date)
        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setHeight(userData.height);
        setWeight(userData.weight);
        setProfile_user(userData.image)
      })
    }
  }, [userAuthen.user])


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;
        setProfile_user(base64Image);
      };

      reader.readAsDataURL(selectedImage);
    }
  };


  const update = async (username, password, firstname, lastname, email, gender, height, weight, birthday, image) => {
    const requestData = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender: gender,
      height: height,
      weight: weight,
      birthday: birthday,
      image: image
    }

    const form = new FormData();
    for (const key in requestData) {
      form.append(key, requestData[key]);
    }
    const token = localStorage.getItem('token')

    const config = {
      headers: {
        'authorization': `Bearer ${token}` // Assuming it's a Bearer token
      }
    }
    

    const id = userAuthen.user.userId;
    const response = await axios.put(import.meta.env.VITE_APP_BACKEND_URL + `/update/${id}`, requestData,config)
    navigate('/Home');
  }


  return (
    <div className='flex flex-col justify-canter mt-10'>

      <div className='flex flex-col justify-canter items-center '>
        <div className='text-5xl'>My Profile</div>
        <div className='h-[200px] w-[200px]'><img src={profile_user} alt="" className='object-cover h-[200px] w-[200px]' /></div>
        <input type="file" onChange={handleImageChange} />
      </div>

      
 
      <div className='mt-8'>
        <div className='flex justify-around' >
          <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Firstname</label>
              <input className='input text-2xl' type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} name="" id="" />
            </div>

            <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Lastname</label>
              <input className='input text-2xl' type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} name="" id="" />
            </div>
        </div>

        <div className='flex justify-around' >
          <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Username</label>
              <input className='input text-2xl' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="" id=""  />
            </div>

            <div className='flex flex-col w-5/12'>
              <label htmlFor="" className='text-2xl ms-2'>Password</label>
              <input className='input text-2xl' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="" id="" />
            </div>
        </div>

        <div className='flex justify-around' >
          <div className='flex flex-col w-3/12'>
              <label htmlFor="" className='text-2xl ms-2'>Height</label>
              <input className='input text-2xl' type="number" value={height} onChange={(e)=>setHeight(e.target.value)} name="" id=""/> 
            </div>

            <div className='flex flex-col w-3/12'>
              <label htmlFor="" className='text-2xl ms-2'>weight</label>
              <input className='input text-2xl' type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} name="" id="" />
            </div>

            <div className='flex flex-col w-3/12'>
              <label htmlFor="" className='text-2xl ms-2'>Gender</label>
              <select className='input text-2xl' name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} id="gender">
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="other">other</option>
              </select>
            </div>
        </div>

        <div className='flex justify-around' >
          <div className='flex flex-col w-4/12'>
              <label htmlFor="" className='text-2xl ms-2'>Birthdat</label>
              <input className='input text-2xl' type="date" value={birthday} onChange={(e)=>setBirthday(e.target.value)} name="" id=""/>
            </div>

            <div className='flex flex-col w-6/12'>
              <label htmlFor="" className='text-2xl ms-2'>Email</label>
              <input className='input text-2xl' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="" id="" />
            </div>
        </div>

        
        
      </div>

      <section className='mt-24 mx-5  flex justify-between   '>
        <button className='block p-5 w-2/5 rounded-md bg-zinc-600 text-2xl font-bold' type='button' > <Link to ='/Profile'>BACK</Link> </button>
        <button className='block p-5 w-2/5 rounded-md bg-zinc-600 text-2xl font-bold' type='button' onClick={()=>
          update(username, password, firstname, lastname, email, gender, height, weight, birthday, profile_user)}>SAVE</button>
      </section>
     
    </div>
  )
}

export default UpdateProfile