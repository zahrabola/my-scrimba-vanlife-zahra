import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      /// .then((data) => console.log(data));
      .then((data) => setVans(data.vans));
  }, []);
  // console.log(vans)

  const vanItems = vans.map((vandata) => (
    <div key={vandata.id} className="vantile">
      <Link to={`/vans/${vandata.id}`}>
        <img src={vandata.imageUrl} alt="img" />
        <div className="vaninfo">
          <h3>{vandata.name}</h3>
          <p>
            ${vandata.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${vandata.type} selected`}>{vandata.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="vancontainer">
      <h1>Explore our van options</h1>
      <div className="vanlist">{vanItems}</div>
    </div>
  );
};
export default Vans;