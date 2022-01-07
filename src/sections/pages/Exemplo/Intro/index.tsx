import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="container">
        <div className="row d-flex justify-content-center flex-column align-items-center">
          <div className="col-12">
            <h1 className="fw-700 text-secondary text-center my-4">
              Exemplo <span className="fw-400">GraphQL</span>
            </h1>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <p>
              Esta é uma página exemplo utilizando requisição à API GraphQL.
            </p>
            <p>
              Os dados são da API da SpaceX |{" "}
              <a
                href="https://github.com/SpaceXLand/api"
                className="fw-700"
                target="_blank"
                rel="noreferrer"
              >
                Veja mais
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
