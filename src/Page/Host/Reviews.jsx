import React from "react";
import { BsStarFill } from "react-icons/bs";
import rating from "../../Assets/rating.png";

const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];
  return (
    <div>
      <section className="hostreviews">
        <div className="toptext">
          <h2>Your reviews</h2>
          <p>
            Last <span>30 days</span>
          </p>
        </div>

        <img className="graph" src={rating} alt="Income graph" />
        <h3>Reviews (2)</h3>

        {reviewsData.map((rdata) => (
          <div key={rdata.id}>
            <div className="review">
              {[...Array(rdata.rating)].map((_, i) => (
                <BsStarFill className="reviewstar" key={i} />
              ))}
              <div className="info">
                <p className="name">{rdata.name}</p>
                <p className="date">{rdata.date}</p>
              </div>
              <p>{rdata.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reviews;

