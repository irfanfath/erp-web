import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "test_irfan" && password === "TestIrfan123") {
      navigate("/");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex bg-white rounded-lg shadow-lg w-3/4 md:p-10 sm:p-0">
        <div className="w-1/2 hidden md:flex items-center justify-center bg-blue-500 rounded-l-lg p-20">
          <img src={loginImage} alt="Login Illustration" className="w-3/4" />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-4 rounded-lg w-full mt-10"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;