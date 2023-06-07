import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function EditProduk() {
    const {id} = useParams();
    const [nama, setNama] = useState([]);
    const [kd_produk, setKdProduk] = useState([]);
    const [harga, setHarga] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/produk/${id}`);
                setKdProduk(response.data[0].kd_produk);
                setNama(response.data[0].nama);
                setHarga(response.data[0].harga);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [id])

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const updateProduk = {
            kd_produk: kd_produk,
            nama: nama,
            harga: harga
        };

        try {
            const response = await axios.put(`http://localhost:3002/api/produk/${id}`, updateProduk);
            console.log(response.data);
            window.location= '/admin/produk'
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <div className="card card-primary ">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Update Product</h2>
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
    </div>
  )
}
