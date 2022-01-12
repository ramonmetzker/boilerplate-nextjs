import React from "react";
import { Container } from "./styles";

const Main = () => {
  return (
    <Container className="container d-flex align-items-center flex-column justify-content-center">
      <div className="row">
        <div className="col-12 d-flex justify-content-center text-center">
          <h1 className="fw-700 fs-xxl">
            <a href="https://nextjs.org" className="text-dark">
              <span className="text-info">Next.js </span>Boilerplate
            </a>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center py-4">
          <p>
            Get started by editing{" "}
            <code className="rounded bg-light p-1 px-2 border text-black">
              src/pages/index.tsx
            </code>
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 col-lg-8">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-6 col-xxl-5">
              <a
                href="https://nextjs.org/docs"
                className="rounded border d-flex flex-column p-3 border text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="fs-5 fw-700">Documentation &rarr;</h2>
                <p className="mb-0">
                  Find in-depth information about Next.js features and API.
                </p>
              </a>
            </div>
            <div className="col-12 col-lg-6 col-xxl-5">
              <a
                href="https://github.com/ramonmetzker"
                className="rounded border d-flex flex-column p-3 border text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="fs-5 fw-700">Ramon&apos;s Github &rarr;</h2>
                <p className="mb-0">
                  Check out my Github profile and my other projects!
                </p>
              </a>
            </div>
            <div className="col-12 col-lg-6 col-xxl-5">
              <a
                href="https://nextjs.org/learn/basics/create-nextjs-app"
                className="rounded border d-flex flex-column p-3 border text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="fs-5 fw-700">Learn &rarr;</h2>
                <p className="mb-0">
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>
            </div>
            <div className="col-12 col-lg-6 col-xxl-5">
              <a
                href="https://vercel.com/solutions/nextjs"
                className="rounded border d-flex flex-column p-3 border text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="fs-5 fw-700">Deploy &rarr;</h2>
                <p className="mb-0">
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
