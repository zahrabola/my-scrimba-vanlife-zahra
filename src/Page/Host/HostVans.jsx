import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../Data/Api"


const HostVans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

 /* useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      /// .then((data) => console.log(data));
      .then((data) => setVans(data.vans));
  }, []);
  //  console.log(vans)
  */

  useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getHostVans()
            setVans(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }
    loadVans()
}, [])
  //  console.log(vans)

  const HostVansItems = vans.map((vandata) => (
    <Link
      to={`${vandata.id}`}
      /* to={`/host/vans/${vandata.id}`} */
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

  if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>There was an error: {error.message}</h1>
}

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
