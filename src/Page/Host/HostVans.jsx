import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      /// .then((data) => console.log(data));
      .then((data) => setVans(data.vans));
  }, []);
  //  console.log(vans)

  const HostVansItems = vans.map((vandata) => (
    <Link
      to={`${vandata.id}`}
      key={vandata.id}
      className="hostvanwrapper"
    >
      <div className="hostvanitem" key={vandata.id}>
        <img src={vandata.imageUrl} alt={` ${vandata.name}`} />
        <div className="hostvaninfo">
          <h3>{vandata.name}</h3>
          <p>${vandata.price}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1 className="hostvantitle">Your Listed Vans</h1>
      <div className="hostvanlist">
        {
            vans.length > 0 ? (
                <section>{HostVansItems}</section>
            ) : (
                <h2>Loading .... </h2>
            )

        }
      
      </div>
    </div>
  );
};

export default HostVans;
