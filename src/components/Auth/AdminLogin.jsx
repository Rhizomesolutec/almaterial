import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../hooks/useAuth";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const ok = loginAdmin(username.trim(), password);
    if (ok) {
      navigate("/admin/services");
      window.location.reload();
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <form onSubmit={submit} className="p-6 border rounded w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <div className="mb-3">
          <label className="block text-sm">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-2 py-1"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-2 py-1"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            Login
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Use username <strong>admin</strong> and password{" "}
          <strong>admin</strong>
        </p>
      </form>
    </section>
  );
};

export default AdminLogin;
