import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ActivityCard from './ActivityCard'
import EditActivityCard from './EditActivityCard'

const Activity = () => {
  return (
    <>
    <div>Activity</div>
    <BrowserRouter>
        <Routes>
            <Route path='/activities' element={<ActivityCard />}/>
            <Route path='/activities/edit/:id' element={<EditActivityCard />}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Activity