import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCard = () => {
  return (
    <div>
        <div>
            <h1>Company Name</h1>
            <p>India</p>
        </div>
        <div>
            <h1>Job Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, non!</p>
        </div>
        <div>
            <Badge className='text-blue-700 text-bold' variant='outline'>12 Positions</Badge>
            <Badge className='text-red-800 text-bold' variant='outline'>Part Time</Badge>
            <Badge className='text-red-900 text-bold' variant='outline'>12 LPA</Badge>

        </div>
    </div>
  )
}

export default LatestJobCard