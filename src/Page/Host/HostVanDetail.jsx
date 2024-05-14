import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { getHostVans } from "../../Data/Api"

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentvandetail, setCurrentVanDetail] = useState(null);
  ///const [count, setCount] = React.useState(0);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

 /* useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      //.then((data) => console.log(data));
      .then((data) => setCurrentVanDetail(data.vans));
  }, [id]);
  */
  useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getHostVans(id)
            setCurrentVanDetail(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadVans()
}, [id])

if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>There was an error: {error.message}</h1>
}



  return (
    <section>
      <div>
        <Link to=".." relative="path" className="backbtn">
          &larr; <span>Back to all vans</span>
        </Link>
      </div>
      {
        currentvandetail &&
     
      <div className="detailcontainer">
        <div className="hostdetailcontainer">
          <div className="hostvandetail">
          <img src={currentvandetail.imageUrl} alt="prop" />
            <div className="hostvandetailinfo">
              <i className={`van-type van-type-${currentvandetail.type}`}>
                {currentvandetail.type}
              </i>
              <div className="hostvandetailinfotext">
                <h2>{currentvandetail.name}</h2>
                <h3>{currentvandetail.price}/day</h3>
              </div>
            </div>
          </div>
            {/*Nested Routes - options  */}
            <nav className="hostvandetailnav">
            <NavLink
            to="."
            end
            relative="path"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
           Detail
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
            </nav>
            {/*<Outlet context={[count, setCount]} /> */}
            <Outlet context={[currentvandetail]} />
        </div>
      </div>
       }
    </section>
  );
};

export default HostVanDetail;

