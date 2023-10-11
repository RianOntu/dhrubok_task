import React, { useState } from 'react';

const Counter = () => {
  const [count,setCount]=useState(0);
  const handleIncrement=()=>{
   setCount(count=>count+1)
  }

    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={handleIncrement}>Count</button>
        </div>
    );
};

export default Counter;