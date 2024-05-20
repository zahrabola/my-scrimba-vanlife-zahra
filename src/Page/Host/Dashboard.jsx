import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../Data/Api";

const Dashboard = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      /// console.log(vans)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanDashboardItem(vans) {
    const hostVanDashItem = vans.map((vandashdetail) => (
     
      <div className="hostvanwdash" key={vandashdetail.id}>
             <div className="hostvansingle hostvanitem" key={vandashdetail.id}>
        <img src={vandashdetail.imageUrl} alt={` ${vandashdetail.name}`} />
        <div className="hostvaninfo">
          <h3>{vandashdetail.name}</h3>
          <p>${vandashdetail.price}/ day</p>
        </div>
        <Link to={`vans/${vandashdetail.id}`}>View</Link>
      </div>
        </div>
     
    ));

    return (
      <div className="hostvanslist">
        <section>{hostVanDashItem} </section>
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div >
      <section className="hostdashearnings">
        <div className="dsashinfo">
          <h1>Welcome</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="hostdashreviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Reviews</Link>
      </section>
      <section className="hostdashvans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>

        {
            loading && !vans ? <h1>Loading ... </h1> : (
                <div className="renderdash">
                    {renderVanDashboardItem(vans)}
                </div>
            )
        }
      </section>
    </div>
  );
};

export default Dashboard;
