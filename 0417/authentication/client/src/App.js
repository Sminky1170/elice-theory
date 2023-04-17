import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((request) => request.text())
      .then((data) => setMessage(data));
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/auth/signup", {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((request) => request.text())
      .then((data) => setMessage(data));
  };

  return (
    <div>
      <label>
        유저네임:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <div>{message}</div>
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default App;
