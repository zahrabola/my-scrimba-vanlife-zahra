import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()

    const [vandetail, setVanDetail] = useState(null)

    //console.log(params)


    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then((response) => response.json())
         ///.then((data) => console.log(data));
         .then((data) => setVanDetail(data.vans));
    }, [params.id])



    return (
        <div class="detailcontainer">
   
  <div className='vancontainer'>
           
           { vandetail ? (
            <div className='vantile'>
               <img src={vandetail.imageUrl} alt='img' />
               <div className='vandetailbtn'>
                    <i className={`van-type ${vandetail.type} selected`}>{vandetail.type}</i>
                    </div>
                    <h2>{vandetail.name}</h2>
                    <p className="vanprice"><span>${vandetail.price}</span>/day</p>
                    <div className='vandetaildesc'>
                    <p >{vandetail.description}</p>
                    </div>
                    <button className="linkbutton">Rent this van</button>
                </div>



           ): <h1>Loading </h1>}
        </div>
        </div>
      
    );
}

export default VanDetail;