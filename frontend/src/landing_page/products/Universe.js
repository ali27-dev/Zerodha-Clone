import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        {/* bottom-images-start */}
        {/* 1-image-div */}
        <div className="col-4 p-3 mt-5">
          <img src="Assets/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        {/* 2-image-div */}
        <div className="col-4 p-3 mt-5">
          <img
            src="Assets/images/streakLogo.png"
            style={{ width: "50%" }}
            className="mb-3"
          />
          <p className="text-small text-muted">Alog & strategy platform</p>
        </div>
        {/* 3-image-div */}
        <div className="col-4 p-3 mt-5">
          <img
            src="Assets/images/sensibullLogo.svg"
            style={{ width: "50%" }}
            className="mb-3"
          />
          <p className="text-small text-muted">Options tranding platform</p>
        </div>
        {/* 4-image-div */}
        <div className="col-4 p-3 mt-5">
          <img
            src="Assets/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
            className="mb-3"
          />
          <p className="text-small text-muted">Asset managment</p>
        </div>
        {/* 5-image-div */}
        <div className="col-4 p-3 mt-5">
          <img
            src="Assets/images/goldenpiLogo.png"
            style={{ width: "50%" }}
            className="mb-3"
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        {/* 6-image-div */}
        <div className="col-4 p-3 mt-5">
          <img
            src="Assets/images/dittoLogo.png"
            style={{ width: "40%" }}
            className="mb-3"
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
        {/* bottom-images-end */}

        {/* Button-div-start */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
        {/* Button-div-end */}
      </div>
    </div>
  );
}

export default Universe;
