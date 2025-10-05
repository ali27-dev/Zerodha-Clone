import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left-div-start */}
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        {/* Left-div-end */}
        {/* Right-div-start */}
        <div className="col-6 mt-5 p-5">
          <h1 className="mb-4">{productName}</h1>
          <p>{productDescription}</p>
          {/* Two-links-text */}
          <div className="">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              try Demo <i className="ri-arrow-right-long-line"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "6rem" }}
            >
              Learn More <i className="ri-arrow-right-long-line"></i>
            </a>
          </div>
          {/* Two-links-Image */}
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="Assets/images/googlePlayBadge.svg" alt="" />
            </a>
            <a
              href={appStore}
              style={{ textDecoration: "none", marginLeft: "3rem" }}
            >
              <img src="Assets/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
        {/* Right-div-end */}
      </div>
    </div>
  );
}

export default LeftSection;
