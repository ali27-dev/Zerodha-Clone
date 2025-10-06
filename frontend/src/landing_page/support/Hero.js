import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      {/* HeaderPannel-start */}
      <div className="" id="supportWrapper_top">
        <h4 className="mt-5">Suppoort Portal</h4>
        <a href="#" className="mt-5">
          Track Tickets
        </a>
      </div>
      {/* HeaderPannel-end */}

      <div className="row p-5 mb-5" id="supportWrapper_bottom">
        <div className="col-6 mb-5">
          <h1 className="fs-3 mb-3">
            Search for an answer or browser help to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="mb-3"
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 feature">
          <h1 className="fs-3 mb-3">Features</h1>
          <ol>
            <li className="mb-3">
              {" "}
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
