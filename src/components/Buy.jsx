import React from 'react';
import "../CSS/campaign.css";
import "../CSS/buy.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CupCake from "../images/cupcake.jpg";
import { Link } from 'react-router-dom';

function Buy() {
  return (
    <div>
        <div className='campaign'>
            <h3>Your Ad campaign</h3>
            <p>Launch your ad in just 4 easy steps</p>
        </div>
        <div className='lightbulb'>
            <div className='camp'>
                <LightbulbIcon className='campicon yellow'/>
                <p>What you want to do</p>
            </div>
            <div className='camp'>
                <InventoryIcon className='campicon yellow'/>
                <p>Choose product</p>
            </div>
            <div className='camp'>
                <CalendarMonthIcon className='campicon'/>
                <p>Campaign settings</p>
            </div>
            <div className='camp'>
                <CheckCircleRoundedIcon className='campicon'/>
                <p>Ready to go</p>
            </div>
        </div>
        <div className='camp-story'>
            <div className='camp-story1'>
                <h5>Choose the Product </h5><p>(Step 2 of 4)</p>
            </div>
            <hr />
            <div className='card-head'>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='continuebtn'>
            <Link to="/date"><button>Continue</button></Link>
        </div>
    </div>
  )
}

export default Buy