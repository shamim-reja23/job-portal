import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

export const JobCard = ({job}) => {
    const navigate = useNavigate();

    const daysAgoFunc = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDiff = currentTime - createdAt;
        return Math.floor(timeDiff/(1000*60*60*24))
    }
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>{daysAgoFunc(job?.createdAt) == 0 ? "Today" : `${daysAgoFunc(job?.createdAt)} days ago`}</p>
            <Button variant='outline' className="rounded-full" size='icon'><Bookmark/></Button>
        </div>
        
        <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant='outline' size='icon'>
                <Avatar>
                    <AvatarImage src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"/>
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>{job?.location}</p>
            </div>
        </div>
        <div>
            <h1 className='text-lg font-black my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant='outline'>{job?.position} Positions</Badge>
            <Badge className={'text-red-700 font-bold'} variant='outline'>{job?.jobType}</Badge>
            <Badge className={'text-purple-700 font-bold'} variant='outline'>{job?.salary} LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button onClick={() => navigate(`/description/${job?._id}`)} variant='outline' className="p-4 cursor-pointer">Details</Button>
            <Button className="bg-[#6a38c2] hover:bg-[#5b30a6] p-4 cursor-pointer">Apply Now</Button>
        </div>
    </div>
  )
}
