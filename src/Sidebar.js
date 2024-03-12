import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton, Avatar } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
    
      <div className='sidebar__header'>
        <Avatar src='data:image/jpeg;base64,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'/>
        <div className='sidebar__headerRight'>
          <IconButton>
           <DonutLargeIcon/> 
          </IconButton>
          <IconButton>
           <ChatIcon/>
          </IconButton>
          <IconButton>
           <MoreVertIcon/>
          </IconButton> 
        </div> 
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined/>
          <input type='text' placeholder='Search'/>
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

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