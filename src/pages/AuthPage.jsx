import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/AuthService";
import '../style/login.css';

export default function AuthPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
    role: 'USER'
  });
  const [isLogin, setLogin] = useState(false);

  const handleSubmit = async () => {
    try {

      if (isLogin) {

        const res = await loginUser({
          username: form.username,
          password: form.password
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("username", res.data.username);

        navigate("/");

      } else {

        await registerUser(form);

        // auto login will come in next step
        alert("Signup successful — Please Login");
        setLogin(true);
      }

    } catch (err) {
      alert("Invalid Credentials");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <input
          placeholder="Username"
          onChange={e => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        {!isLogin && (
          <select
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        )}

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Signup"}
        </button>

        <p onClick={() => setLogin(!isLogin)} className="toggle">
          {isLogin
            ? "New User? Signup Here"
            : "Already have account? Login"}
        </p>

      </div>
    </div>
  );
}