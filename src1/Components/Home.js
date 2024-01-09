import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { increaseBtn } from '../actions';
import { decreaseBtn } from '../actions';
const Home = () => {
  const [num,setNum]=useState(0);
  const state=useSelector((state)=>state.IncreaseDecrease);
  const dispatch=useDispatch();
  return (
    <>
      <div>
      <h1>{state}</h1>
      <input type="number" placeholder='Enter any number' value={num} onChange={(e)=>setNum(e.target.value)}/><br/>
        <button onClick={()=>dispatch(increaseBtn(num))}>Increase</button>
        <button onClick={()=>dispatch(decreaseBtn(num))}>Decrease</button>
      </div>
    </>
  )
}

export default Home