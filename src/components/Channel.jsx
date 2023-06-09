import React from 'react'
import {HashtagIcon} from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setChannelInfo } from '../features/channelSlice'

function Channel({id, channelName}) {
    const dispatch = useDispatch()
    const history = useNavigate()

    const setChannel = () => {
        dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName,
        }))

        history(`/channels/${id}`)
    }

  return (
    <div className='font-medium flex items-center cursor-pointer hover:bg-[#383c43] p-1 rounded-md hover:text-white' onClick={setChannel}>
        <HashtagIcon className='h-5 mr-2' /> {channelName}
    </div>
  )
}

export default Channel