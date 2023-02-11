import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import {SearchOutlined, AttachFile, InsertEmoticonSharp} from '@mui/icons-material'
import axios from './axios';



function Chat({messages}) {
    const [input, setInput] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message : input,
            name : "ADMIN",
            timestamp : "Just Now",
            received : true
        })
        setInput("")
    }

  return (
    <div className='chat'>
        
        <div className='chatHeader'> 
            <Avatar/>
            <div className='chatHeaderInfo'>
                <h3>Group name</h3>
                <p>Last seen at ....</p>
            </div>
            <div className='chatHeaderRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className='chatBody'>
        {messages.map((message) => (
            <p className= {`chatMessage ${message.received && `chatReceiver`}`}>
            <span className='chatName'>{message.name}</span>
                {message.message}
            <span className='chatTimeStamp'>{message.timestamp}</span>
        </p>
        ))}     
        </div>


        <div className='chatFooter'>
            <IconButton>
                <InsertEmoticonSharp />
            </IconButton>
            <form>
                <input value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder='Type a message' type='text'></input>
                <button onClick={sendMessage} type='submit'>Send</button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Chat