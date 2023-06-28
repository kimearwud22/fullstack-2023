import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    axios.post('http://localhost:3002/api/login', data).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('id', res.data.id);
      } else {
        alert('Username atau password salah');
      }
      alert("Login Success")
      router.push('/admin');
    });
  };
    
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center shadow">
                <h3 className="mb-5">Login</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="form1Example3"
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
