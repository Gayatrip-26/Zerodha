import React from 'react';

function Awards(){
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media/largestBroker.svg" />
          </div>
          <div className="col-6 p-5 mt-5">
            <h1>Larger stock broker in india</h1>
            <p className='mb-5'>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in india daily by traiding and investing in:
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds Govt. Securities </p>
                  </li>
                </ul>
              </div>
            </div>
            <img  src='media/pressLogos.png' style={{width:"94%"}} / >
          </div>
        </div>
      </div>
    );
}
export default Awards;