import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Link from "next/link";

const AllAdmin = () => {
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

  console.log(data);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/api/admin/${id}`)
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
                        {data.length > 0 ? (data.map((pelanggan, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{pelanggan.nama}</td>
                              <td>{pelanggan.username}</td>
                              <td>{pelanggan.password}</td>
                              <td>
                              <button className='btn btn-success mr-3 rounded text-white'>
                              <Link href={`/admin/editAdmin?id=${pelanggan.id}&username=${pelanggan.username}&nama=${pelanggan.nama}&passwrod=${pelanggan.password}`}
                            >
                              Edit
                            </Link>
                              </button>
                                <button
                                  className="btn btn-danger ml-3 rounded text-white"
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
}

export default AllAdmin;

