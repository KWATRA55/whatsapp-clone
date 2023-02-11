import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'


function SidebarChat() {
  return (
    <div className='SidebarChat'>
        <Avatar/>
        <div className='sbChatInfo'>
            <h2 className='roomName'>
                RoomName
            </h2>
            <p>new message</p>
        </div>
    </div>
  )
}

export default SidebarChat