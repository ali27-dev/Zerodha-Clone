import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left-Image-section-start */}
        <div className="col-6">
          <img
            src="Assets/images/education.svg"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
        {/* Left-Image-section-end */}

        {/* Right-Text-section-start */}
        <div className="col-6">
          <h1 className="fs-2 mb-3">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            Pakistan for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        {/* Right-Text-section-end */}
      </div>
    </div>
  );
}

export default Education;
