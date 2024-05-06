import React, { useEffect } from 'react';

const Vans = () => {
   
    useEffect(() => {
        fetch("/api/vans")
          .then((response) => response.json())
          .then(data => console.log(data))
      }, [])
    return (
        <div>
            vans page 
        </div>
    );
}

export default Vans;
