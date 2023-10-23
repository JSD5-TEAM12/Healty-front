import React, { useEffect, useState } from "react"
import { updated, read } from "../SelectActivity/ActivityFunc"
import { useActivityContext } from "../function"
import { useParams, useNavigate } from "react-router-dom"

const EditActivityCard = () => {
  const { currentActivity } = useActivityContext()
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({
    // user_id: "6532a6c0246ea32353b3565d",
    // _id: '',
    type: currentActivity,
    desc: '',
    date: '',
    duration: '',
  })

  useEffect(() => {
    loadData(params.id);
  }, [])


  const loadData = async (id) => {
    console.log(id)
    read(id)
      .then((res) => {
        setData(res.data)
    })
      .catch((err)=>console.log(err))
  }
//   console.log(data)

  const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    updated(params.id, data)
      .then((res) => {
        console.log(res)
        navigate('/activities')
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <form onSubmit={e => handleSubmit(e)}> 
  <div className="w-[100%] flex justify-center items-center">
    {/* <div className="lg:w-[30%] border border-white w-[60%] text-center mt-8">
      {currentPicture}
    </div> */}
  </div>
    <div className="lg:w-[100%] flex flex-col justify-center items-center">
      <div className="flex justify-center mt-4">
        <input className="rounded bg-pink-600 text-zinc-300 py-2 text-center text-xl" 
          value={data.type}
          readOnly/>
      </div>
      <div className="flex justify-center">
        <textarea
          rows="3"
          cols="44"
          placeholder="Description"
          id="desc"
          name="desc"
          value={data.desc}
          onChange={e => handleChange(e)}
          className="p-2 mt-4 rounded bg-zinc-700 text-zinc-300"
        ></textarea>
      </div>
      <div className="mt-4 flex h-[40px] justify-center">
        <input
          type="date"
          id="date"
          name="date"
          value={data.date}
          onChange={e => handleChange(e)}
          className="pl-2 rounded bg-zinc-700 text-zinc-300 w-[180px]"
        />
        <select
          id="duration"
          name="duration"
          value={data.duration}
          onChange={e => handleChange(e)}
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
      <div className="flex justify-center item-center w- mt-12 w-[68%] lg:w-[23%]">
      </div>
    </div>
    <button>Save Change</button>
  </form> 
    </>
  )
}

export default EditActivityCard;
