import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import "../CSS/Navbar.css"

function Navbar() {
  return (
    <div>
        <div>
            <div>
               
            </div>
            <div className='navbar'>
                <div className='navbar-icon'>
                    <HomeIcon className='icon'/>
                    <h6>Home</h6>
                </div>
                <div className='navbar-icon'>
                    <CampaignIcon className='icon'/>
                    <h6>Campaingns</h6>
                </div>
                <div className='navbar-icon'>
                    <AddShoppingCartIcon className='icon'/>
                    <h6>Products</h6>
                </div>
                <div className='navbar-icon'>
                    <SupportAgentIcon className='icon'/>
                    <h6>Customers</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar