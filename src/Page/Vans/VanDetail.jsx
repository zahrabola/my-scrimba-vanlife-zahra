import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../Data/Api"

const VanDetail = () => {
  const params = useParams();
  const location = useLocation()
  console.log(location)

  const [vandetail, setVanDetail] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  //console.log(params)

 /* useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      ///.then((data) => console.log(data));
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);
  */

  useEffect(() => {
    async function loadVans() {
        setLoading(true)
        try {
            const data = await getVans(params.id)
            setVanDetail(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }
    loadVans()
}, [params.id])

if (loading) {
  return <h1>Loading...</h1>
}

if (error) {
  return <h1>There was an error: {error.message}</h1>
}


  const search = location.state?.search || ""

  const type = location.state?.type || "all"

  return (
    <section>
      <div>
        <Link to={`..${search}`} relative="path" className="backbtn">
          &larr; <span>Back to {type} vans</span>
        </Link>
      </div>

      <div className="detailcontainer">
        <div className="vancontainer">
          {vandetail ? (
            <div className="vantile">
              <img src={vandetail.imageUrl} alt="img" />
              <div className="vandetailbtn">
                <i className={`van-type ${vandetail.type} selected`}>
                  {vandetail.type}
                </i>
              </div>
              <h2>{vandetail.name}</h2>
              <p className="vanprice">
                <span>${vandetail.price}</span>/day
              </p>
              <div className="vandetaildesc">
                <p>{vandetail.description}</p>
              </div>
              <button className="linkbutton">Rent this van</button>
            </div>
          ) : (
            <h1>Loading..... </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default VanDetail;
