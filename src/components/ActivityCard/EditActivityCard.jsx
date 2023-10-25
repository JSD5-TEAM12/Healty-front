import React, { useEffect, useState } from "react"
import { updated, list } from "../SelectActivity/ActivityFunc"
import { useActivityContext } from "../function"
import { useParams, useNavigate } from "react-router-dom"
//try
import { useAuth } from "../../auth/Authcontext"

const EditActivityCard = () => {
  const { currentActivity } = useActivityContext()
  const {id} = useParams()
  
  const navigate = useNavigate()
  const auth = useAuth()

  const [updateData, setUpdateData] = useState({
    // user_id: "6532a6c0246ea32353b3565d",
    // _id: '',
    // user_id: auth.user.userId,
    id: id,
    updateType: '',
    updateDesc: '',
    updateDate: '',
    updateDuration: '',
  })


  // console.log('update data : ', updateData)

  const getdata = async (id)=>{
    try {
      const response = await list(id)
      setUpdateData({updateType:response.type,
      updateDesc: response.desc,
      updateDate: response.date,
      updateDuration: response.duration})
  
      console.log('response Tong :',response);
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  getdata(id)
},[])

  // const form = new FormData();
  //       for (let key in data) {
  //         form.append(key, data[key]);
  //       }
  //   if (!id) {
  //     console.log('no params')
  //   } 
  
  // console.log('auth.user :>> ', auth.user);

  // useEffect(() => {
  //   if(!id) console.log('id in useEffect >>', id)
  //   loadData(id);
  // }, [])


  // const loadData = async (id) => {
  //   console.log('edit load id',id)
  //   read(id)
  //     .then((res) => {
  //       setUpdateData(res.data)
  //       console.log('res :', res)
  //   })
  //     .catch((err)=>console.log(err))
  // }
//   console.log(data)

  const handleChange = (e) => {
    setUpdateData({
        ...updateData,
        [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log('updated id >> ',id)
    updated(id,updateData)
      .then((res) => {
        console.log(res)
        navigate('/ActivityCard')
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <form onSubmit={handleSubmit}> 
  <div className="w-[100%] flex justify-center items-center">
    {/* <div className="lg:w-[30%] border border-white w-[60%] text-center mt-8">
      {currentPicture}
    </div> */}
  </div>
    <div className="lg:w-[100%] flex flex-col justify-center items-center">
      <div className="flex justify-center mt-4">
        <input className="rounded bg-pink-600 text-zinc-300 py-2 text-center text-xl" 
          value={updateData.updateType}
          readOnly/>
      </div>
      <div className="flex justify-center">
        <textarea
          rows="3"
          cols="44"
          placeholder="Description"
          id="desc"
          name="updateDesc"
          value={updateData.updateDesc}
          onChange={handleChange}
          className="p-2 mt-4 rounded bg-zinc-700 text-zinc-300"
        ></textarea>
      </div>
      <div className="mt-4 flex h-[40px] justify-center">
        <input
          type="date"
          id="date"
          name="updateDate"
          value={updateData.updateDate}
          onChange={handleChange}
          className="pl-2 rounded bg-zinc-700 text-zinc-300 w-[180px]"
        />
        <select
          id="duration"
          name="updateDuration"
          value={updateData.updateDuration}
          onChange={handleChange}
          className="ml-3 pl-1 rounded bg-zinc-700 text-zinc-300 w-[125px]"
        >
          <option value="none" disabled hidden>
            duration
          </option>
          <option value="10">10 Mins</option>
          <option value="20">20 Mins</option>
          <option value="30">30 Mins</option>
          <option value="40">40 Mins</option>
          <option value="50">50 Mins</option>
          <option value="60">60 Mins</option>
        </select>
      </div>
      </div>
    <div className="flex justify-center items-center mt-12">
    <button onClick={handleSubmit} className="bg-zinc-600 rounded p-1 px-2 hover:bg-pink-600">Save Change</button>
    </div>
  </form> 
    </>
  )
}

export default EditActivityCard;
