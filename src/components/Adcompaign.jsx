import React from 'react';
import "../CSS/campaign.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import SecurityUpdateRoundedIcon from '@mui/icons-material/SecurityUpdateRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';

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
                    <PhoneCallbackRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get leads as calls</h2>
                        <p>Reach broad audience and get leads through calls</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <MessageRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get Leads as Facebook messages</h2>
                        <p>Get more FB messages from Leads</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <PersonAddAltRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Increase page followers</h2>
                        <p>Encourage customers to follow your page</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <PeopleRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get Customer Leads</h2>
                        <p>Encourage customers to take action</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <EventNoteRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Increase the catalogue sales</h2>
                        <p>Drive the sales of your catalogue and get more leads</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <RemoveRedEyeRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get more youtube views</h2>
                        <p>Increase organic views by obtaining user attention </p>
                    </div>
                </div>
                <div className='camp-card'>
                    <SendRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Get more website traffic</h2>
                        <p>Get the right people to visit your website</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <LocalConvenienceStoreRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Increase Live store traffic</h2>
                        <p>Drive visits to local stores, restaurants & Dealerships</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <SecurityUpdateRoundedIcon className='card-icon'/>
                    <div className='card'>
                        <h2>Increase your App installs</h2>
                        <p>Get more installs, interactions for your app</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='continuebtn'>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default Adcompaign