import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../AuthService";

import firebase from "../config/firebase";



//history関数を引数とするLoginという関数を宣言
//history関数は全てのページの推移が入っている。
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //// ユーザーのログイン情報がある場合はRoomにリダイレクト
  const user = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //ログインを実装するために、今回はauthオブジェクトのsignInWithEmailAndPasswordメソッドを使用
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // pushメソッドを使用することで、引数に指定したパスにリダイレクトを行う
      // pushをすると、新しいページの推移が入るので指定したURL情報が入る。
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        alert("パスワードが違ってます");
        console.log(err);
      });
  };
  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
        <div>
          <Link to={("/signup")}>サイン　アップ</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
