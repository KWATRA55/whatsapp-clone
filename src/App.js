import Sidebar from './Sidebar.js'
import Chat from './Chat'
import './App.css'
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    axios.get('./messages/sync')
      .then(response => {
        console.log(response.log);
        setMessages(response.data);
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('e1217a2c45a7e571f259', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe("messages");
    channel.bind('inserted', (newMessage) => {
      
      setMessages([...messages, newMessage])
    }); 
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className='appBody'>
        <Sidebar />
        <Chat messages = {messages}/>
      </div>
    </div>
  );
}

export default App;
