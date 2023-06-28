import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Testimoni = () => {
  const [data, setData] = useState([]);
  const [testi, setTesti] = useState([]);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [pelanggan, setPelanggan] = useState("");

  const allPelanggan = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/pelanggan");
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const allTesti = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/testimonimulti");
      console.log(res);
      setTesti(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allPelanggan();
    allTesti();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      judul: judul,
      isi: isi,
      id_pelanggan: pelanggan,
    };
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3002/api/testimoni", data);
      console.log(res);
      alert("Order berhasil ditambahkan");
      window.location.reload("/");
      setIsi("");
      setJudul("");
      setPelanggan("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <div id="testimoni">
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
                        <select
                          className="form-select border-0 form-control"
                          value={pelanggan}
                          onChange={(e) => setPelanggan(e.target.value)}
                        >
                          <option selected>Siapa Kamu</option>
                          {data.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.nama}
                            </option>
                          ))}
                        </select> 
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control border-0 py-3"
                          placeholder="Judul"
                          value={judul}
                          onChange={(e) => setJudul(e.target.value)}
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control border-0 py-3"
                          placeholder="Isi"
                          value={isi}
                          onChange={(e) => setIsi(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="btn btn-dark border-0 w-100 py-3"
                      type="submit"
                    >
                      Testi
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* buatkan cart testimoni */}
            <div className="row">
            {testi.map((item, index) => (
              <div className="col-md-3 mt-4" key={index}>
                <div className="card-sl">
                  <div className="card-heading">{item.judul}</div>
                  <div className="card-text">{item.isi}</div>
                  <div className="card-text">Author :{item.nama}</div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
