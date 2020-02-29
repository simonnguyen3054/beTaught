import React from "react";

function Home() {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            Professional network hub for cosmetologists.
          </h1>
          <p className="lead">
            Build profile, show works, and learn from others.
          </p>
          <div>
            <button>Sign In</button>
            <button className="btn-primary">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
