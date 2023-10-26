import React,{useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
// components below
import Intro from './Intro'
import Register from './components/Register/Register'
import GetStart from './components/GetStart/GetStart'
import Gender from './components/Register/Gender'
import Feed from './components/Feed/Feed'
import SelectActivity from './components/SelectActivity/SelectActivity'

const App = () => {
  const [dataUser , setDateUser] = useState("")
  const [error , setError] = useState("")
  const api = import.meta.env.VITE_APP_BACKEND_URL

  useEffect(()=>{
    let abortController = new AbortController()

    const loadData = async ()=>{
      try{
        let response = await axios.get(api);
        setDateUser(response.data)
        setError("")
      } catch (error) {
        setError("Something went wrong", error)
      }
    }
    loadData()
    return () => abortController.abort();
  })

  return (
    <div>
    <GetStart />
    </div>
  )
}

export default App