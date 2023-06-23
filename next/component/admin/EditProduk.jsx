import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function EditProduk() {
    const [data, setData] = useState([]);
    const [nama_produk, setNamaProduk] = useState("");
    const [kd_produk, setKdProduk] = useState("");
    const [harga, setHarga] = useState("");
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/produk/${id}`);
                const json = await response.json();
                setData(json.data);
                setNamaProduk(json.data.nama_produk);
                setKdProduk(json.data.kd_produk);
                setHarga(json.data.harga);
            } catch (error) {
                console.log(error)
            }
        };
       fetchData();
    }, [id])

    useEffect(() => {
      document.title = `Update Produk ${nama_produk}`;
    },[nama_produk])

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const updateProduk = {
            kd_produk: kd_produk,
            nama_produk: nama_produk,
            harga: harga
        };

        try {
            const response = await axios.put(`http://localhost:3002/api/produk/${id}`, updateProduk);
            console.log(response.data);
            window.location= '/admin/produks'
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <h2>Update Produk {nama_produk}</h2>
        <div className="card card-primary ">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Update Product</h2>
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
                        value={nama_produk}
                        onChange={(e) => setNamaProduk(e.target.value)}
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
