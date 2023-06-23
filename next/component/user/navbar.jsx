import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* Navbar Start */}
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="img/icon-deal.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h1 className="m-0 text-primary">Studio-Mu</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="#booking" className="nav-item nav-link">
                Booking
              </a>
                <a
                  href="#type"
                  className="nav-item nav-link"
                >
                  Pilihan
                </a>
              <a href="/user/testimoni" className="nav-item nav-link">
                Testimoni
              </a>
            </div>
            <a href="/admin" className="btn btn-primary px-3 d-none d-lg-flex">
              Admin
            </a>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </div>
  );
}
