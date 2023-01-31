import React from 'react';
import "../CSS/create.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Table from './Table';

function Create() {
  return (
    <div className='topcreate'>
    <div className='create'>
        <div className='create-head'>
            <h3>Your Campaigns</h3>
            <p>Check the list of campigns you created </p>
        </div>
        <div>
            <button className='create-btn'>
                <AddCircleOutlineIcon className='btn-icon'/>
                <p>Create new campaign</p>
            </button>
        </div>
    </div>
        <Table />
    </div>
  )
}

export default Create