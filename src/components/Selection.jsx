import React from 'react';
import "../CSS/campaign.css";
import "../CSS/buy.css";
import "../CSS/selection.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Link } from 'react-router-dom';

function Selection() {

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
                <CalendarMonthIcon className='campicon yellow'/>
                <p>Campaign settings</p>
            </div>
            <div className='camp'>
                <CheckCircleRoundedIcon className='campicon'/>
                <p>Ready to go</p>
            </div>
        </div>
        <div className='camp-story'>
            <div className='camp-story1'>
                <h5>Campaign Settings</h5><p>(Step 3 of 4)</p>
            </div>
            <hr />
            <div>
                <div className='part part1'>
                    <div className='parrt1-head'> 1. Budget and dates info</div>
                    <div className='part1-timeline'>
                        <p>Budget Timeline</p>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round" data-on="ON" data-off="OFF"></span>
                        </label>
                    </div>
                    <div className='part1-date'>
                        <div className='part1-date1'>
                            <p>Start date </p>
                            <input type="date" />
                        </div>
                        <div className='part1-date1'>
                            <p>End date </p>
                            <input type="date" />
                        </div>
                    </div>
                    <div className='part1-range'>
                        <p>Enter campaign budget</p>
                        <input type="range" min="0" max="100000"/>                   
                     </div>
                </div>
                <div className='part part1 part2'>
                    <div className='parrt1-head'> 2. Location info</div>
                    <div className='part1-timeline'>
                        <p>Budget Timeline</p>
                        <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round" data-on="ON" data-off="OFF"></span>
                        </label>
                    </div>
                    <div className='part1-date'>
                        <div className='part1-date1 part2-date'>
                            <p>Select Location </p>
                            <input type="text" placeholder='Select a place name , address or coordinates'/>
                        </div>
                        {/* <div className='part1-date1'>
                            <p>End date </p>
                            <input type="date" />
                        </div> */}
                    </div>
                    <div className='part1-range'>
                        <p>Enter campaign budget</p>
                        <input type="range" min="0" max="100000"/>                   
                     </div>
                </div>
            </div>
        </div>
        <div className='continuebtn'>
            <Link to="/buys"><button>Continue</button></Link>
        </div>
    </div>
  )
}

export default Selection