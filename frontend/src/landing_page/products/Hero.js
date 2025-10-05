import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      {/* Header-section-start */}
      <div className="row text-center mt-5 p-5">
        <h1 className="">Technology</h1>
        <h4 className="text-muted mt-2">
          Sleek, modern and intuitive trading platforms
        </h4>
        <p className="text-muted mt-1 mb-5" style={{ fontSize: "14px" }}>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment Offerings <i className="ri-arrow-right-long-line"></i>
          </a>
        </p>
      </div>
      {/* Header-section-end */}
    </div>
  );
}

export default Hero;
