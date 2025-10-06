import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      {/* Header-section-start */}
      <div className="row text-center border-bottom mb-5">
        <h1 className="mt-5">Pricing</h1>
        <h3 className="mt-3 text-muted fs-5 mb-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      {/* Header-section-end */}

      {/* Pricing-Image-section-start */}
      <div className="row ">
        <div className="col-4 mt-5">
          <img src="Assets/images/pricing0.svg" alt="" />
          <h2 className="text-center">Free equity delivery</h2>
          <p className="text-center text-muted mt-3">
            0 brokerage. All equity delivery investments (NSE, BSE), are
            absolutely free — ₹
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="Assets/images/intradayTrades.svg" alt="" />
          <h2 className="text-center">Intraday and F&O trades</h2>
          <p className="text-center text-muted ">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="Assets/images/pricingEquity.svg" alt="" />
          <h2 className="text-center">Free direct MF</h2>
          <p className="text-center text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      {/* Pricing-Image-section-end */}
    </div>
  );
}

export default Hero;
