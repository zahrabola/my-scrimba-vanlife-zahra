import React, { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      /// .then((data) => console.log(data));
      .then((data) => setVans(data.vans));
  }, []);

  ///console.log(vansData)

  const vanItems = vans.map(vandata => (
    <div key={vandata.id} className="vantile">
        <img src={vandata.imageUrl} />
        <div className="vaninfo">
            <h3>{vandata.name}</h3>
            <p>${vandata.price}<span>/day</span></p>
        </div>
        <i className={`vantype ${vandata.type} selected`}>{vandata.type}</i>
    </div>
))

  return (
    <div className="vancontainer">
        <div className="vanlist">
            {vanItems}
        </div>
    </div>
)
}
export default Vans;
