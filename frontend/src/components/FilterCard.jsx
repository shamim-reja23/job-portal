import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';


const filterData = [
  {
    filterType: "Location",
    array: ["Kolkata", "Delhi NCR", "Bangalore", "Hyderabad", "Mumbai"]
  },
  {
    filterType: "Position",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer", "DevOps", "UI/UX Designer"]
  },{
    filterType: "Salary",
    array: ["0-20k", "20k-50k", "50k-1lakh", "1lakh+"]
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
      {
          filterData.map((data, index) => (
            <div className='w-full bg-white rounded-md'>
              <h1 className='font-bold text-md'>{data.filterType}</h1>
              {
                data.array.map((item, idx) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
        
      
    </div>
  )
}

export default FilterCard;