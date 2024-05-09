import React from 'react';
import { NavLink, Outlet} from "react-router-dom";
const HostLayout = () => {
    return (
        <div >
           <nav className='hostnav'>
          <NavLink to="/host">Dashboard </NavLink>
       
          <NavLink to="/host/income">Income</NavLink>
       
          <NavLink to="/host/reviews">Reviews</NavLink>
        </nav>
        <Outlet />
        </div>
    );
}

export default HostLayout;
