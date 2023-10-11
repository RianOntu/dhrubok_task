import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='row'>
            <div className="col-4 col-md-4 col-lg-4">
            <Sidebar></Sidebar>
            </div>
            <div className="col-8 col-md-8 col-lg-8">
              <Outlet/>
            </div>
        </div>
    );
};

export default Home;