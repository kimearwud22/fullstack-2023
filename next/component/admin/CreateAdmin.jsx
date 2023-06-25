//input and tampilan produk
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Admin = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      nama: nama,
      password: password,
    };
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3002/api/admin", data);
      console.log(res);
      alert("Admin berhasil ditambahkan");
      window.location.reload();
      setUsername("");
      setNama("");
      setPassword("");
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
      <div className="card card-primary ">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Admin</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="author-box-details">
              <div className="author-box-name">
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Nama Admin</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Admin"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Password</label>
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          placeholder="Isikan Password Anda"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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

export default Admin;
