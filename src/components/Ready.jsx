import React from 'react';
import "../CSS/campaign.css";
import "../CSS/buy.css";
import "../CSS/selection.css";
import "../CSS/ready.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Cupcake from "../images/cupcake.jpg"
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Ready() {
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
                <CheckCircleRoundedIcon className='campicon yellow'/>
                <p>Ready to go</p>
            </div>
        </div>
        <div className='camp-story'>
            <div className='camp-story1'>
                <h5>Ready to go</h5><p>(Step 4 of 4)</p>
            </div>
            <hr />
            <div className='ready'>
                <div className='ready-card'>
                    <div className='ready-card1'>
                        <div className='ready-img'> <img src={Cupcake} /></div>
                        <div className='ready-text'>
                            <h5>Mukund Cake Shop</h5>
                            <p>Sponsored</p>
                        </div>
                    </div>
                    <div className='ready-card2'>
                        <div className='readyp'>
                            <p>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</p>
                        </div>
                        <div className='readyimage'> <img src={Cupcake} /> </div>
                        <div className='readybtn'>
                            <p>Mukun Cake Shop</p>
                            <button> <ThumbUpIcon className='btnicon'/> Like</button>
                        </div>
                    </div>
                    <div className='ready-card3'>
                    <button >Change image </button>
                        <button>Edit text</button>
                    </div>
                </div>
                <div className='ready-card'>
                    <div className='ready-card1'>
                        <div className='ready-img'> <img src={Cupcake} /></div>
                        <div className='ready-text'>
                            <h5>Mukund Cake Shop</h5>
                            <p>Sponsored</p>
                        </div>
                    </div>
                    <div className='ready-card2'>
                        <div className='readyp'>
                            <p>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</p>
                        </div>
                        <div className='readyimage'> <img src={Cupcake} /> </div>
                        <div className='readybtn'>
                            <p>Mukun Cake Shop</p>
                            <button> <ThumbUpIcon className='btnicon'/> Like</button>
                        </div>
                    </div>
                    <div className='ready-card3'>
                    <button >Change image </button>
                        <button>Edit text</button>
                    </div>
                </div>
                <div className='ready-card'>
                    <div className='ready-card1'>
                        <div className='ready-img'> <img src={Cupcake} /></div>
                        <div className='ready-text'>
                            <h5>Mukund Cake Shop</h5>
                            <p>Sponsored</p>
                        </div>
                    </div>
                    <div className='ready-card2'>
                        <div className='readyp'>
                            <p>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</p>
                        </div>
                        <div className='readyimage'> <img src={Cupcake} /> </div>
                        <div className='readybtn'>
                            <p>Mukun Cake Shop</p>
                            <button> <ThumbUpIcon className='btnicon'/> Like</button>
                        </div>
                    </div>
                    <div className='ready-card3'>
                    <button>Change image</button>
                        <button>Edit text</button>
                    </div>
                </div>
                <div className='ready-card'>
                    <div className='ready-card1'>
                        <div className='ready-img'> <img src={Cupcake} /></div>
                        <div className='ready-text'>
                            <h5>Mukund Cake Shop</h5>
                            <p>Sponsored</p>
                        </div>
                    </div>
                    <div className='ready-card2'>
                        <div className='readyp'>
                            <p>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</p>
                        </div>
                        <div className='readyimage'> <img src={Cupcake} /> </div>
                        <div className='readybtn'>
                            <p>Mukun Cake Shop</p>
                            <button> <ThumbUpIcon className='btnicon'/> Like</button>
                        </div>
                    </div>
                    <div className='ready-card3'>
                    <button>Change image</button>
                        <button>Edit text</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='continuebtn'>
            <Link to="/deploy"><button>Start Campaign</button></Link>
        </div>
    </div>
  )
}

export default Ready