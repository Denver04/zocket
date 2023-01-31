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
                        <h2>Bluberry cake with raw toppings</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Chocolate truffle cake</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Browine cake with fluffy cream</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Ferro rocher cake</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Custurd mixed with fruit cake</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Best raw topping choco cake</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Green cup cakes</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Strawberry cakes with blueberry</h2>
                        <p>Rs: 2,290</p>
                    </div>
                </div>
                <div className='camp-card'>
                    <div className='cardimage'><img src={CupCake} className="card-image"/></div>
                    <div className='card'>
                        <h2>Blueberry topping cakes</h2>
                        <p>Rs: 2,290</p>
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