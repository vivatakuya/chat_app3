import React, { useState } from "react";

import firebase from "../config/firebase";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  //デフォルトの動きを抑制させる
  const handleSubmit = (e) => {
    e.preventDefault();
    // firebaseの機能を使用したサインアップ機能
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //処理が失敗した場合は、catchメソッドの関数が実行
      .then(() => {
        history.push("/login");
        })
      .catch((err) => {
        setPassword("");
        setEmail("");
        alert("間違い");
        console.log(err);
      });
  };
  return (
    <div>
      <h1>サインアップ</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Eメール</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            // getElementByIdで取得するID
            id="password"
            // 初期値'password'を入れる
            placeholder="Password"
            value={password}
            //  入力された時に、state変数にセット
            //  ※onchangeは入力欄や選択肢が変更された時に発生するイベント
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">サインアップ</button>
      </form>
    </div>
  );
};

export default Signup;
