import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

 //search params - filter
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = (searchParams.get("type"))
  console.log(typeFilter)

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      /// .then((data) => console.log(data));
      .then((data) => setVans(data.vans));
  }, []);
  // console.log(vans)

 //filter
 const displayedVans = typeFilter
 ? vans.filter(vandata => vandata.type === typeFilter) : vans


  const vanItems = /*vans*/ displayedVans.map((vandata) => (
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
      <div className="vanlistfilterbtns">
        <Link className="van-type simple" to="?type=simple">Simple</Link>
        <Link className="van-type luxury" to="?type=luxury">Luxury</Link>
        <Link className="van-type rugged" to="?type=rugged">Rugged</Link>
        <Link className="van-type clearfilter" to=".">Clear Filter</Link>

      </div>
      <div className="vanlist">{vanItems}</div>
    </div>
  );
};
export default Vans;
