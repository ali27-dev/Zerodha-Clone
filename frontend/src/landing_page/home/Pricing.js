import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        {/* left-text-section-start */}
        <div className="col-4">
          <h1 className="fs-2 mb-3">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        {/* left-text-section-end */}

        {/* center-Empty-section-start */}
        <div className="col-2"></div>
        {/* center-Empty-section-end */}

        {/* Right-Boxes-section-start */}
        <div className="col-6">
          <div className="row text-center ">
            <div className="col border p-3">
              <h1 className="mb-3">₨0</h1>
              <p>
                {" "}
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">₨20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
        {/* Right-Boxes-section-end */}
      </div>
    </div>
  );
}

export default Pricing;
