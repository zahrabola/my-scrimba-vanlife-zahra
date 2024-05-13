import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  //search params - filter
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      /// .then((data) => console.log(data));
      .then((data) => setVans(data.vans));
  }, []);
  // console.log(vans)

  //filter
  const displayedVans = typeFilter
    ? vans.filter((vandata) => vandata.type === typeFilter)
    : vans;

  const vanItems = /*vans*/ displayedVans.map((vandata) => (
    <div key={vandata.id} className="vantile">
      <Link
        to={`/vans/${vandata.id}`}
        /*to={`${vandata.id}`} */
      >
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
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            className="van-type clearfilter"
            onClick={() => setSearchParams({})}
          >
            Clear Filter
          </button>
        ) : null}
      </div>
      <div className="vanlist">{vanItems}</div>
    </div>
  );
};
export default Vans;
