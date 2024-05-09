import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const HostVanDetail = () => {

    const {id}= useParams()
    const [currentvandetail, setCurrentVanDetail] = useState(null)


    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then((response) => response.json())
         .then((data) => console.log(data));
         //.then((data) => setCurrentVanDetail(data.vans));
    }, []) 


    return (
        <div>
            HostVanDetail
        </div>
    );
}

export default HostVanDetail;
