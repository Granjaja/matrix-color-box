'use client'

import React from 'react'
import { useState } from "react";




const matrix = () => {
    const [boxes, setBoxes] = useState(Array(9).fill(null).map(() => ({ color: 'blue', clicked: false })));
    const[clickedOrder, setClickedOrder] = useState<number[]>([]);

const handleClick = (index: number) => (_event: React.MouseEvent<HTMLDivElement>) =>{

    if(boxes[index].clicked) return;
    
    
    const updatedBoxes = [...boxes];
    updatedBoxes[index] = {...updatedBoxes[index], clicked:true, color: 'green'};
    setBoxes(updatedBoxes);
    

    setClickedOrder([...clickedOrder, index])
    
    
    if (clickedOrder.length + 1 === 9) {
        changeToOrangeSequence([...clickedOrder, index]);
      }
}

const changeToOrangeSequence = (indices:number[]) => {
    let delay = 0; 
    indices.forEach((index) => {
      setTimeout(() => {
        setBoxes((prevBoxes) =>{
            const updatedBoxes = [...prevBoxes];
            updatedBoxes[index] = {...updatedBoxes[index], color: 'orange'};
            return updatedBoxes
        });
      }, delay);
      delay += 500; 
    });
  };

  return (
    
    <div className='justify-items-center'>
      <div className='grid grid-cols-3 gap-1 m-5'>
      {boxes.map((box, index) => (
        <div 
        key={index} 
        className={` h-20 w-20 ${box.color === 'green'? 'bg-green-500' : box.color ==='orange'? 'bg-orange-500': 'bg-sky-500'}  `}
        onClick={handleClick(index)}
        
        />
      ))}
      </div>
      
      
    </div>
    
    
  )
}

export default matrix








 
