import React, { useEffect, useState } from "react";

const Vans = () => {

const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
     /// .then((data) => console.log(data));
     .then(data => setVansData(data.vansData))
  }, []);

console.log(vansData)

  return (
    <div>vans page</div>
)
  
};

export default Vans;
