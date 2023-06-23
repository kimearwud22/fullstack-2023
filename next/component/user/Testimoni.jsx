import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Testimoni = () => {

    const [data, setData] = useState([]);
    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');
    const [pelanggan, setPelanggan] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
          judul: judul,
          isi: isi,
          pelanggan: pelanggan,
      }
      console.log(data);
      try{
          const res = await axios.post('http://localhost:3002/api/testimoni', data);
          console.log(res);
          alert('Order berhasil ditambahkan');
          window.location.reload('/');
          setIsi('');
          setJudul('');
          setPelanggan('');
      }catch(error){
          console.log(error);
      }
  }
    return (
        <div>
            <div className="container-fluid">
            <div id="booking">
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
                      placeholder="Pelanggan"
                      value={pelanggan}
                      onChange={(e) => setPelanggan(e.target.value)}
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
                      placeholder="Judul"
                      value={judul}
                      onChange={(e)=> setJudul(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Isi"
                      value={isi}
                      onChange={(e)=> setIsi(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-dark border-0 w-100 py-3" type="submit">
                  Testi
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
        </div>
            </div>
        </div>
    );
}

export default Testimoni;
