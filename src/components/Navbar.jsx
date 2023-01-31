import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import "../CSS/Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div>
            <div>
               
            </div>
            <div className='navbar'>
                <div className='navbar-icon'>
                    <Link to='/' className='link'>
                        <HomeIcon className='icon'/>
                        <h6>Home</h6>
                    </Link>
                </div>
                <div className='navbar-icon'>
                    <Link to='/campaign' className='link'>
                        <CampaignIcon className='icon'/>
                        <h6>Campaign</h6>
                    </Link>
                </div>
                <div className='navbar-icon'>
                    <Link to='/campaign' className='link'>
                        <AddShoppingCartIcon className='icon'/>
                        <h6>Products</h6>
                    </Link>
                </div>
                <div className='navbar-icon'>
                    <Link to='/campaign' className='link'>
                        <PeopleAltRoundedIcon className='icon'/>
                        <h6>Customers</h6>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar