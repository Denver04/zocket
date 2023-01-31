import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import "../CSS/table.css"

function Table() {
  return (
    <div className='table0'>
        <div className='table1'>
            <div className='table11'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder='Search an item'></input>  
                <div>
                </div>
            </div>
            <div className='table12'>
                    <div className='table-select'>
                        <p>Platform:</p>
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Platform</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    <div className='table-select'>
                    <p>Status:</p>
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Platform</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    <div className='table-select'>
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Last 30 days</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
            </div>
        </div>
        <div className='table2'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                <th scope="col">On/Off</th>
                <th scope="col">Campaign</th>
                <th scope="col">Date Range</th>
                <th scope="col">Clicks</th>
                <th scope="col">Budget</th>
                <th scope="col">Location</th>
                <th scope="col">Platform</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td scope="row"><CheckBoxOutlineBlankIcon /></td>
                <td>Mark</td>
                <td>
                    <div className='td-camp'>
                        <p><b>Bluberry cake Campaign</b></p>
                        <p>Created on 14 july</p>
                    </div>
                </td>
                <td>25July 2020 - 21 May 2022</td>
                <td>540</td>
                <td>INR.3,400</td>
                <td>London</td>
                <td><FacebookOutlinedIcon style={{"color":"#4285F4"}}/></td>
                <td><button style={{"backgroundColor":"#E1FFE0" , "color":"green"}}>Live now</button></td>
                <td>
                    <div className='deleicon'>
                        <BorderColorIcon style={{"color":"#0F6EFF"}}/>
                        <DeleteIcon style={{"color":"#FC3F3F"}}/>
                    </div>
                </td>
                </tr>
                <tr>
                <td scope="row"><CheckBoxOutlineBlankIcon /></td>
                <td>Mark</td>
                <td>
                    <div className='td-camp'>
                        <p><b>Bluberry cake Campaign</b></p>
                        <p>Created on 14 july</p>
                    </div>
                </td>
                <td>25July 2020 - 21 May 2022</td>
                <td>409</td>
                <td>INR.3,400</td>
                <td>America</td>
                <td><YouTubeIcon style={{"color":"#E52D27"}}/></td>
                <td><button style={{background:"#FFDEDE" , "color":"red"}}>Exhausted</button></td>
                <td>
                    <div className='deleicon'>
                        <BorderColorIcon style={{"color":"#0F6EFF"}}/>
                        <DeleteIcon style={{"color":"#FC3F3F"}}/>
                    </div>
                </td>
                </tr>
                <tr>
                <td scope="row"><CheckBoxOutlineBlankIcon /></td>
                <td>Mark</td>
                <td>
                    <div className='td-camp'>
                        <p><b>Bluberry cake Campaign</b></p>
                        <p>Created on 14 july</p>
                    </div>
                </td>
                <td>25July 2020 - 21 May 2022</td>
                <td>300</td>
                <td>INR.3,400</td>
                <td>Mumbai</td>
                <td><GoogleIcon /></td>
                <td><button style={{backgroundColor:"#FFF8E0" , "color":"#D1A307"}}>Paused</button></td>
                <td>
                    <div className='deleicon'>
                        <BorderColorIcon style={{"color":"#0F6EFF"}}/>
                        <DeleteIcon style={{"color":"#FC3F3F"}}/>
                    </div>
                </td>
                </tr>
                <tr>
                <td scope="row"><CheckBoxOutlineBlankIcon /></td>
                <td>Mark</td>
                <td>
                    <div className='td-camp'>
                        <p><b>Bluberry cake Campaign</b></p>
                        <p>Created on 14 july</p>
                    </div>
                </td>
                <td>25July 2020 - 21 May 2022</td>
                <td>210</td>
                <td>INR.3,400</td>
                <td>Chennai</td>
                <td><YouTubeIcon style={{"color":"#E52D27"}}/></td>
                <td><button style={{"backgroundColor":"#E1FFE0" , "color":"green"}}>Live now</button></td>
                <td>
                    <div className='deleicon'>
                        <BorderColorIcon style={{"color":"#0F6EFF"}}/>
                        <DeleteIcon style={{"color":"#FC3F3F"}}/>
                    </div>
                </td>
                </tr>
                <tr>
                <td scope="row"><CheckBoxOutlineBlankIcon /></td>
                <td>Mark</td>
                <td>
                    <div className='td-camp'>
                        <p><b>Bluberry cake Campaign</b></p>
                        <p>Created on 14 july</p>
                    </div>
                </td>
                <td>25July 2020 - 21 May 2022</td>
                <td>210</td>
                <td>INR.3,400</td>
                <td>Chennai</td>
                <td><YouTubeIcon style={{"color":"#E52D27"}}/></td>
                <td><button style={{"backgroundColor":"#E1FFE0" , "color":"green"}}>Live now</button></td>
                <td>
                    <div className='deleicon'>
                        <BorderColorIcon style={{"color":"#0F6EFF"}}/>
                        <DeleteIcon style={{"color":"#FC3F3F"}}/>
                    </div>
                </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Table