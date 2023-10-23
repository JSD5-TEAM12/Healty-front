import React, { useEffect, useState } from "react"
import { updated, read } from "../SelectActivity/ActivityFunc"
import { useActivityContext } from "../function"
import { useParams, useNavigate } from "react-router-dom"

const EditActivityCard = () => {
  const [showModal, setShowModal] = React.useState(false)
  const { currentActivity } = useActivityContext()
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({
    // user_id: "6532a6c0246ea32353b3565d",
    _id: "653413a309cdf2c27294a316",
    type: currentActivity,
    desc: '',
    date: '',
    duration: '',
  })

  useEffect(() => {
    loadData(params._id);
  }, [])

  const loadData = async (_id) => {
    read(_id)
      .then((res) => {
      setData(res.data);
    })
      .catch((err)=>console.log(err))
  }
//   console.log(data)

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    updated(params._id, data)
      .then((res) => {
        console.log(res)
        // setShowModal(false)
        navigate('/activities')
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <button
        className="bg-pink-600 text-black font-bold text-sm p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 
        mb-1 ease-linear transition-all duration-150 w-[20%] "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center text-black flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 
            outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm ">
              {/*content*/}
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full 
              bg-zinc-600 outline-none focus:outline-none bg-opacity-30 backdrop-blur"
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    Edit Activity Card
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-transparent bg-opacity-5">
                  <form onSubmit={handleSubmit}>
                    <div className="lg:w-[100%] flex flex-col justify-center items-center">
                      <div className="flex justify-center mt-4">
                        <input
                          className="rounded font-bold py-2 text-center text-2xl bg-zinc-500 text-black"
                          value={data.type}
                          onChange={e => handleChange(e)}
                        />
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
                          <option value="none" selected disabled hidden>
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
                      <div className="flex justify-center item-center w- mt-12 w-[68%] lg:w-[23%]"></div>
                    </div>
                   
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
                </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default EditActivityCard;
