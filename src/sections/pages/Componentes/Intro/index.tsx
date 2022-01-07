import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-center flex-column align-items-center">
          <div className="col-12">
            <h1 className="fw-700 text-secondary text-center my-4">
              Design <span className="fw-400">System</span>
            </h1>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <p>
              Aqui você encontra alguns dos componentes presentes no Design
              System usado pela <strong>Mobister</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
