import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function EditAdmin() {
    const [nama, setNama] = useState([]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const router = useRouter()
    const {id} = router.query;

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`http://localhost:3002/api/admin/${id}`);
              const json = await response.json();
              setData(json.data);
              setNama(json.data.nama);
              setUsername(json.data.username);
              setPassword(json.data.password);
          } catch (error) {
              console.log(error)
          }
      };
     fetchData();
  }, [id])

  useEffect(() => {
    document.title = `Update Produk ${nama}`;
  },[nama])

  const handleSubmit = async (e)=> {
      e.preventDefault();
      const updateAdmin = {
          nama: nama,
          username: username,
          password: password
      };

      try {
          const response = await axios.put(`http://localhost:3002/api/admin/${id}`, updateAdmin);
          console.log(response.data);
          alert('admin berhasil diupdate')
          window.location= '/admin'
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <div className="container-fluid">
      <div className="card card-primary ">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Update Admin</h2>
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
