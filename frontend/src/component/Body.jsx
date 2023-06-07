import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Body = () => {
  const [data, setData] = useState([]);
    const [alamat, setAlamat] = useState('');
    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [durasi, setDurasi] = useState('');
    const [keterangan, setKeterangan] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
          nama: nama,
          alamat: alamat,
          nohp: nohp,
          durasi: durasi,
          keterangan: keterangan
      }
      console.log(data);
      try{
          const res = await axios.post('http://localhost:3002/api/pelanggan', data);
          console.log(res);
          alert('Order berhasil ditambahkan');
          window.location.reload('/');
          setNama('');
          setAlamat('');
          setNohp('');
          setDurasi('');
          setKeterangan('');
      }catch(error){
          console.log(error);
      }
  }
  return (
    <div>
      <div>
        {/* Header Start */}
        <div className="container-fluid header bg-white p-0">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
              <h1 className="display-5 animated fadeIn mb-4">
                Find A <span className="text-primary">Perfect Home</span> To
                Live With Your Family
              </h1>
              <p className="animated fadeIn mb-4 pb-2">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                elitr.
              </p>
              <a
                href
                className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
              >
                Get Started
              </a>
            </div>
            <div className="col-md-6 animated fadeIn">
              <div className="owl-carousel header-carousel">
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/carousel-1.jpg" />
                </div>
                {/* <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/carousel-2.jpg" alt />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Search Start */}
        <div
          className="container-fluid bg-primary mb-5 wow fadeIn"
          data-wow-delay="0.1s"
          style={{ padding: 35 }}
        >
          <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Alamat"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Nomor Telephone"
                      value={nohp}
                      onChange={(e) => setNohp(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    {/* <select className="form-select border-0 py-1">
                      <option selected>Pilih Durasi</option>
                      <option value={1}>Property Type 1</option>
                      <option value={2}>Property Type 2</option>
                      <option value={3}>Property Type 3</option>
                    </select> */}
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Durasi"
                      value={durasi}
                        onChange={(e) => setDurasi(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Keterangan"
                      value={keterangan}
                        onChange={(e) => setKeterangan(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-dark border-0 w-100 py-3" type="submit">
                  Booking
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
        {/* Search End */}
        {/* Category Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="mb-3">Property Types</h1>
              <p>
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                sed rebum vero dolor duo.
              </p>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-apartment.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Apartment</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-villa.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Villa</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-house.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Home</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-housing.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Office</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-building.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Building</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-neighborhood.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Townhouse</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-condominium.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Shop</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a
                  className="cat-item d-block bg-light text-center rounded p-3"
                  href
                >
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img
                        className="img-fluid"
                        src="img/icon-luxury.png"
                        alt="Icon"
                      />
                    </div>
                    <h6>Garage</h6>
                    <span>123 Properties</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Category End */}
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" src="img/about.jpg" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3" />
                  Tempor erat elitr rebum at clita
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3" />
                  Aliqu diam amet diam et eos
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3" />
                  Clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-primary py-3 px-5 mt-3" href>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
    </div>
  );
};

export default Body;
