import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header></header>
      <div className="container">
        <aside>
          <button className="toggle">|||</button>
          <h1 className='underline'>Menu</h1>
          <button  style={{marginLeft:"30px",backgroundColor:"#1A1D23",outline:"none",border:"none",color:'white'}} onClick={() => setIsOpen(!isOpen)}>React</button>
      {isOpen && (
        <div style={{marginLeft:"50px"}}>
          <a style={{padding:"10px",textDecoration:"none"}} href="/counter">Counter</a><br />
          <a style={{padding:"10px",textDecoration:"none"}} href="/form">Form</a><br />
          <a style={{padding:"10px",textDecoration:"none"}} href="/list">List</a><br />
        </div>
      )}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
