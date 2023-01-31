import React from 'react';
import "../CSS/campaign.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function Adcompaign() {
  return (
    <div>
        <div className='campaign'>
            <h3>Your Ad campaign</h3>
            <p>Launch your ad in just 4 easy steps</p>
        </div>
        <div className='lightbulb'>
            <div className='camp'>
                <LightbulbIcon className='campicon'/>
                <p>What you want to do</p>
            </div>
            <div className='camp'>
                <InventoryIcon className='campicon'/>
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
                <h5>What you want to do?</h5><p>(Step 1 of 4)</p>
            </div>
            <hr />
            <div className='card-head'>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <CalendarMonthIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads us calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
            </div>
        </div>
        <button>Continue</button>
    </div>
  )
}

export default Adcompaign