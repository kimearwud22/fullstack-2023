//input and tampilan produk
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Produk = () => {
  const [data, setData] = useState([]);
  const [kd_produk, setKdProduk] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      kd_produk: kd_produk,
      nama_produk: nama,
      harga: harga,
    };
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3002/api/produk", data);
      console.log(res);
      alert("Produk berhasil ditambahkan");
      window.location.reload();
      setKdProduk("");
      setNama("");
      setHarga("");
    } catch (error) {
      console.log(error);
    }
  };


  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:3002/api/produk/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       alert("Produk berhasil dihapus");
  //       window.location.reload();
  //       setData(data.filter((item) => item._id !== id));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tabel Produk</h1>
      </div>
      <div className="card card-primary ">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="author-box-details">
              <div className="author-box-name">
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label>Kode Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Produk"
                        value={kd_produk}
                        onChange={(e) => setKdProduk(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Nama Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Produk"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Harga</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <span className="form-control form-control-sm text-dark">
                            Rp
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          placeholder="Harga Produk"
                          value={harga}
                          onChange={(e) => setHarga(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="form-control form-control-sm text-dark">
                            .00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success" type="submit">
                    <i className="fas fa-plus fa-fw "></i> Tambah
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Produk;
