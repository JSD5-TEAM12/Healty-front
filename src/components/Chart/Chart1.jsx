import React from 'react'
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: "Group A", value: 80 },
    { name: "Group B" , value: 20}
  
  ];
const COLORS = ["#EC4899", "#333"];


const Chart1 = () => {
    return (
      <div className=' w-screen flex flex-col mt-36 items-center index-chart'>
        <PieChart width={320} height={320} >
          <Pie
            data={data}
            cx={160}
            cy={160}
            innerRadius={100}
            outerRadius={150}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"  
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='absolute top-32 inset-0 text-center '>
          <p className='text-5xl '>156</p>
          <p>Calories</p>
        </div> 
      </div>
        
      ); 
}

export default Chart1