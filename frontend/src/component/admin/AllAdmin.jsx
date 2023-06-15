//input and tampilan produk
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pelanggan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/admin")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3002/api/admin/${id}`)
      .then((res) => {
        console.log(res);
        alert("Admin berhasil dihapus");
        window.location.reload();
        setData(data.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid">
      {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tabel Semua Testimoni</h1>
      </div> */}
      <div>
        <div className="card author-box card-primary">
          <div className="card-body">
            <div className="col-12 mb-3">
              <div className="">
                <h2>Tabel Admin</h2>
              </div>
            </div>
            <div class="container">
              <div>
                <div className="row">
                  <div className="col-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">nama</th>
                          <th scope="col">username</th>
                          <th scope="col">password</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.length > 0 ? (
                          data.map((pelanggan, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{pelanggan.nama}</td>
                              <td>{pelanggan.username}</td>
                              <td>{pelanggan.password}</td>
                              <td>
                                <Link
                                  to={`/admin/editadmin/${pelanggan.id}`}
                                  className="btn btn-primary mr-1 rounded text-white"
                                >
                                  <i className="far fa-eye mr-1" />
                                  Edit
                                </Link>
                                <button
                                  className="btn btn-danger mr-1 rounded text-white"
                                  onClick={() => handleDelete(pelanggan.id)}
                                >
                                  <i className="far fa-edit mr-1" />
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center">
                              Data Kosong
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pelanggan;
