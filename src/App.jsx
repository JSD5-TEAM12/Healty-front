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


  useEffect(()=>{
    let abortController = new AbortController()

    const loadData = async ()=>{
      try{
        let response = await axios.get('https://healthy-9onk.onrender.com/');
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