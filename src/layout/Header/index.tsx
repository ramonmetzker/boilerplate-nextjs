import Link from "next/link";
import React from "react";
import { Italic } from "../../sections/pages/Home/Main/styles";

const Header = () => {
  return (
    <header className="bg-primary sticky-top">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-3">
            <Link href="/">
              <a>
                <p className="mb-0 text-white fs-5">
                  <Italic>Mobister</Italic>
                  <span className="fw-700"> BoilerplateNext.js</span>
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
