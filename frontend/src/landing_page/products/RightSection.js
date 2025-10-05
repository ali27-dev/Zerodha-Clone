import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row ">
        {/* Left-div-start */}
        <div className="col-6 p-5 mt-5" style={{}}>
          <h1 className="mb-4">{productName}</h1>
          <p>{productDesription}</p>
          {/* Two-links-text */}

          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i className="ri-arrow-right-long-line"></i>
          </a>
        </div>
        {/* Left-div-end */}

        {/* Right-div-start */}
        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>
        {/* Right-div-end */}
      </div>
    </div>
  );
}

export default RightSection;
