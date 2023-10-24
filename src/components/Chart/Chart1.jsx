import React from 'react'
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: "Group A", value: 80 },
    { name: "Group B" , value: 20}
  
  ];
const COLORS = ["#00C49F", "#000000"];


const Chart1 = () => {
    return (
      <div className='h-screen w-screen flex flex-col mt-28 items-center index-chart'>
        <PieChart width={500} height={500} >
          <Pie
            data={data}
            cx={250}
            cy={250}
            innerRadius={150}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"  
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='absolute top-56 inset-0 text-center'>
          <p className='text-5xl '>156</p>
          <p>Calories</p>
        </div> 
      </div>
        
      ); 
}

export default Chart1