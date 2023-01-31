import React from 'react';
import { Button } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import "../CSS/main.css"

function Main() {
  return (
    <div>
        <div className='main'>
            <div className='main1'>
                <p>Free trial ends in 2 days</p>
                <Button variant="text">Buy Now</Button>
            </div>
            <div className='main2'>
                <StoreIcon className='main-icon'/>
                <NotificationsIcon className='main-icon'/>
                <AccountCircleIcon className='main-icon'/>
                <p>Abhisek</p>
                <DashboardIcon className='main-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Main