import React from "react";
import { FullScreen, Italic } from "./styles";

const Main = () => {
  return (
    <FullScreen className="container d-flex align-items-center flex-column justify-content-center">
      <div className="row">
        <div className="col-12 d-flex justify-content-center text-center">
          <h1 className="fw-700 fs-xxl">
            <Italic>Mobister </Italic>
            <a href="https://nextjs.org" className="text-primary">
              Next.js Boilerplate
            </a>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center py-4">
          <p>
            Comece editando{" "}
            <code className="rounded bg-gray-5 p-1 border">
              src/pages/index.tsx
            </code>
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-6">
              <a
                href="https://nextjs.org/docs"
                className="rounded border d-flex flex-column text-center p-2 border-primary text-primary"
              >
                <h2 className="fs-5 fw-700">Documentação Next &rarr;</h2>
                <p className="mb-0">
                  Leia mais sobre o Next.js na documentação oficial.
                </p>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a
                href="https://nextjs.org/docs"
                className="rounded border d-flex flex-column text-center p-2 border-primary text-primary"
              >
                <h2 className="fs-5 fw-700">Documentação Mobister &rarr;</h2>
                <p className="mb-0">
                  Leia a documentação e guia para o boilerplate.
                </p>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a
                href="https://nextjs.org/learn"
                className="rounded border d-flex flex-column text-center p-2 border-primary text-primary"
              >
                <h2 className="fs-5 fw-700">Aprenda &rarr;</h2>
                <p className="mb-0">
                  Aprenda mais sobre o Next.js com um quiz interativo.
                </p>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <a
                href="https://nextjs.org/docs"
                className="rounded border d-flex flex-column text-center p-2 border-primary text-primary"
              >
                <h2 className="fs-5 fw-700">Componentes &rarr;</h2>
                <p className="mb-0">
                  Entenda o design system usado neste boilerplate.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};

export default Main;
