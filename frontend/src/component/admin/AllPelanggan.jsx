//input and tampilan produk
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pelanggan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/pelanggan")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                            <h2>Tabel Pelanggan</h2>
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
                                                <th scope="col">alamat</th>
                                                <th scope="col">nomor HP</th>
                                                <th scope="col">Durasi</th>
                                                <th scope="col">Keterangan</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.length > 0 ? data.map((pelanggan, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{pelanggan.nama}</td>
                                                <td>{pelanggan.alamat}</td>
                                                <td>{pelanggan.nohp}</td>
                                                <td>{pelanggan.durasi}Jam</td>
                                                <td>{pelanggan.keterangan}</td>
                                                <td>
                                                    <Link href="/admin/pemesanan/detail" className="btn btn-primary mr-1 rounded text-white"><i className="far fa-eye mr-1" />Detail</Link>
                                                </td>
                                            </tr>
                                            )) : (
                                                <tr> 
                                                    <td colSpan="5" className="text-center">Data Kosong</td>
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
