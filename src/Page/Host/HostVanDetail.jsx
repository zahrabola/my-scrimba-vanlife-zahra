import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentvandetail, setCurrentVanDetail] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      //.then((data) => console.log(data));
      .then((data) => setCurrentVanDetail(data.vans));
  }, [id]);

  if (!currentvandetail) {
    return <h1>Loading..... </h1>;
  }
  return (
    <div class="detailcontainer">
    <div class="hostdetailcontainer">
      <div className="hostvandetail">
      <img src={currentvandetail.imageUrl} alt="img" />
      <div className="hostvandetailinfo">
                        <i
                            className={`van-type van-type-${currentvandetail.type}`}
                        >
                            {currentvandetail.type}
                        </i>
                      
       
        <h2>{currentvandetail.name}</h2>
        <p>{currentvandetail.price}</p>
        <p>{currentvandetail.type}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HostVanDetail;
