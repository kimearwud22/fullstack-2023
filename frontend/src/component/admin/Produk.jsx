//input and tampilan produk
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Produk = () => {
    const [data, setData] = useState([]);
    const [kd_produk, setKdProduk] = useState('');
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            kd_produk: kd_produk,
            nama_produk: nama,
            harga: harga
        }
        console.log(data);
        try{
            const res = await axios.post('http://localhost:3002/api/produk', data);
            console.log(res);
            alert('Produk berhasil ditambahkan');
            window.location.reload();
            setKdProduk('');
            setNama('');
            setHarga('');
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3002/api/produk').then((res) => {
            setData(res.data.data);
        }).catch(error =>{
            console.log(error);
        })
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3002/api/produk/${id}`).then((res) => {
            console.log(res);
            alert('Produk berhasil dihapus');
            window.location.reload();
            setData(data.filter((item) => item._id !== id));
        }).catch(error => {
            console.log(error);
        })
    }
 

    

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
            <div className="author-box-left">
              {/* <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="m-2 author-box-picture"
                style={{ width: "150px", height: "150px" }}
              /> */}
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  //   onChange={handleImgChangge}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
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
                          <h2>
                            {prod.kd_produk}
                          </h2>
                          <p>
                            <span className="price">{prod.nama_produk}</span>
                          </p>
                          <span className="price">Rp.{prod.harga}</span>
                        </div>
                        <div>
                          <Link to={`/admin/editproduk/${prod.id}`} className="btn btn-success btn-sm">Edit</Link>
                          <Link
                            to={{patname: `/admin/editproduk/${prod.id}`, state: {
                              nama: prod.nama_produk, harga: prod.harga, kd_produk: prod.kd_produk
                            }}}
                          >
                            <button className="btn btn-success btn-sm mr-1">
                              Edit State
                            </button> 
                          </Link>
                          <button
                            className="btn btn-primary btn-sm"
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

export default Produk;
