import React from "react";

function Stats() {
  return (
    <div className="container  p-3">
      <div className="row">
        {/* Left-Text-section-start */}
        <div className="col-6 p-5">
          <h1 className="mb-2 fs-2">Trust with confidence</h1>
          {/* Short-description-1 */}
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₨3.5+ lakh crores
            worth of equity investments.
          </p>
          {/* Short-description-2 */}
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          {/* Short-description-3 */}
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          {/* Short-description-4 */}
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        {/* Left-Text-section-end */}

        {/* Right-Image-section-start */}
        <div className="col-6 p-5">
          <img
            src="Assets/images/ecosystem.png"
            alt=""
            style={{ width: "90%" }}
          />
          {/* Icons */}
          <div className="text-center mt-4">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        {/* Right-Image-section-start */}
      </div>
    </div>
  );
}

export default Stats;
