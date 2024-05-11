import React from 'react';
import { useOutletContext } from "react-router-dom"
const HostVanDetailPrice = () => {
    const [currentvandetail] = useOutletContext() 
    //console.log(currentvandetail)

    return (
        <div className='contextinfo'>
          <section className="hostvandetailinfo">
            <h3 className="host-van-price">${currentvandetail.price}<span>/day</span></h3>
        </section>
        </div>
    );
}

export default HostVanDetailPrice;
