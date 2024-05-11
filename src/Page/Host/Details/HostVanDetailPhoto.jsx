import React from 'react';
import { useOutletContext } from "react-router-dom"
const HostVanDetailPhoto = () => {

    const [currentvandetail] = useOutletContext() 
    console.log(currentvandetail)
    return (
        <div className='contextinfo'>

        <img src={currentvandetail.imageUrl} className="hostvandetailimage" alt='detail' />
    
        </div>
    );
}

export default HostVanDetailPhoto;
