import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading-section-start */}
      <div className="row mt-5 p-5 border-top">
        <h1 className=" text-center">People</h1>
      </div>
      {/* Heading-section-end */}

      {/* About-section-start */}
      <div
        className="row text-muted mb-5"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="Assets/images/profile-pic.JPG"
            alt=""
            style={{
              width: "50%",
              borderRadius: "100%",
              border: "1px solid #999",
            }}
          />
          <h4 className="mt-3" style={{ fontSize: "24px" }}>
            Abid Ali
          </h4>
          <h6>Founder, CEO</h6>
        </div>
        <div
          className="col-6 p-5 "
          style={{ lineHeight: "1.5", fontSize: "1rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
      {/* About-section-end */}
    </div>
  );
}

export default Team;
