import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-primary sticky-top">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-3">
            <Link href="/">
              <a>
                <p className="mb-0 text-white fs-5 fw-700">
                  Boilerplate Next.js
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
