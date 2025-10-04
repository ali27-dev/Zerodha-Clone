import React from "react";
import { Link } from "react-router-dom";

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
            I’m Abid Ali, a passionate MERN Stack Developer with a strong
            command of JavaScript and a growing expertise in Artificial
            Intelligence integration for modern web applications. I specialize
            in building fast, scalable, and user-focused digital experiences
            using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p>
            I have a diverse skill set that includes web development, UI/UX
            design, and MERN-Stack programming. My expertise allows me to create
            dynamic and responsive web applications that provide an exceptional
            user experience.
          </p>
          <p>I’m a sports enthusiast who loves playing and watching cricket.</p>
          <p className="">
            Connect on{" "}
            <Link
              to="https://www.linkedin.com/feed/"
              target="_blanck"
              className="fs-4 text-muted"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              <i class="ri-linkedin-box-fill"></i>
            </Link>
            <Link
              to="https://github.com/ali27-dev"
              target="_blanck"
              className="fs-4 text-muted"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              <i class="ri-github-fill"></i>
            </Link>{" "}
            <Link
              to="https://ali27-dev-protfolio-website.netlify.app/"
              target="_blanck"
              className="fs-4 text-muted"
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              <i class="ri-account-box-fill"></i>
            </Link>
          </p>
        </div>
      </div>
      {/* About-section-end */}
    </div>
  );
}

export default Team;
