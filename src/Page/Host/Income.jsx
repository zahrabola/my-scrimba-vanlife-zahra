import React from 'react';
import graph from "../../Assets/graph.png";

const Income = () => {

    const transactionsData = [
        { amount: 720, date: "Jan 3, '24", id: "1" },
        { amount: 560, date: "Feb 12, '24", id: "2" },
        { amount: 980, date: "May 3, '24", id: "3" },
    ]
    
    return (
        <div>
            <section className='hostincome'>
            <h1>Income</h1> 
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>

            <img
                className="graph"
                src={graph}
                alt="Income graph"
            />
            <div className='infoheader'>
            <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="renderdash">
            {
                transactionsData.map((tdata) => (
                    <div key={tdata.id} className='transaction'>
                        <h3>${tdata.amount}</h3>
                        <p>{tdata.date}</p>
                    </div>
                ))
            }
            </div>
            </section>
          
        </div>
    );
}

export default Income;
