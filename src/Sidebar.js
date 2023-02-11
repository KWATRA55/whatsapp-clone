import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SearchOutlined} from '@mui/icons-material'
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className = 'sbHeader'>
            <Avatar src='https://avatars.githubusercontent.com/u/74172558?v=4' />
            <div className='sbHeaderRight'>
                <IconButton >
                    <DonutLargeIcon />
                </IconButton>
                <IconButton >
                    <ChatIcon />
                </IconButton>
                <IconButton >
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className='sbSearch'>
            <div className='sbSearchContainer'>
                <SearchOutlined />
                <input placeholder='Search or start new chat' type='text' />
            </div>
        </div>

        <div className='sbChats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar