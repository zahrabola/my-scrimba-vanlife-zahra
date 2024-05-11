import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanDetailInfo = () => {
    const [currentvandetail] = useOutletContext() 
    //console.log(currentvandetail)

 
    return (
        <div className='contextinfo'>
          <section className="hostvandetailinfo">
            <h5>Name: <span>{currentvandetail.name}</span></h5>
            <h5>Category: <span>{currentvandetail.type}</span></h5>
            <h5>Description: <span>{currentvandetail.description}</span></h5>
            <h5>Visibility: <span>Public</span></h5>
        </section>
        </div>
    );
}

export default HostVanDetailInfo;
   //const [count, setCount] = useOutletContext();
    ///const increment = () => setCount((c) => c + 1);
    
 /* <button onClick={increment}>{count}</button>;*/