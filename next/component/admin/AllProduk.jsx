//input and tampilan produk
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const AllProduk = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/produk")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3002/api/produk/${id}`)
      .then((res) => {
        console.log(res);
        alert("Produk berhasil dihapus");
        window.location.reload();
        setData(data.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tabel Produk</h1>
      </div>
      <div>
        <div className="card author-box card-primary mt-2">
          <div className="card-body">
            <div className="colorlib-product">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                    <h2>All Produk</h2>
                    <hr className="sidebar-divider" />
                  </div>
                </div>
                <div className="row row-pb-md">
                  {data.length > 0 ? (
                    data.map((prod, index) => (
                      <div className="col-lg-3 mb-4 text-center" key={index}>
                        <div className="product-entry border">
                          <div className="desc">
                            <h2>{prod.kd_produk}</h2>
                            <p>
                              <span className="price">{prod.nama_produk}</span>
                            </p>
                            <span className="price">Rp.{prod.harga}</span>
                          </div>
                          <div>
                            <Link href={`/admin/editProduk?id=${prod.id}&kd_produk=${prod.kd_produk}&nama=${prod.nama_produk}&harga=${prod.harga}`}
                              className="btn btn-danger mr-2"
                            >
                              Edit
                            </Link>
                            {/* <Link
                              to={{
                                pathname: `/admin/editproduk/id=${prod.id}`,
                                state: {
                                  nama: prod.nama_produk,
                                  harga: prod.harga,
                                  kd_produk: prod.kd_produk,
                                },
                              }}
                            >
                              <button className="btn btn-success btn-sm mr-1">
                                Edit State
                              </button>
                            </Link> */}
                            <button
                              className="btn btn-primary btn-sm ml-2"
                              onClick={() => handleDelete(prod.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h3 className="text-center">Belum ada produk</h3>
                  )}
                  <div className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduk;
