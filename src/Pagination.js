import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Input from './Input';

import './App.css';


function Pagination({totalPage}) {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px"}}>
      <ArrowBackIosIcon style={{fontSize:"14px", fontWeight: 900}} />
      <span className='text-bold'>Previous</span>
      <Input className='input-custom' defaultValue={2} /> / <span className='total-page'>{totalPage || 10}</span>
      <span className='text-bold'>Next</span>
      <ArrowForwardIosIcon style={{fontSize:"14px", fontWeight: 900}} />
    </div>
  )
}

export default Pagination;