import React, { useState } from "react";

import firebase from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //ログインを実装するために、今回はauthオブジェクトのsignInWithEmailAndPasswordメソッドを使用
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
