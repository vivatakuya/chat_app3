import React, { useState } from "react";

import firebase from "../config/firebase";

const Signup = () => {
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');
const [name, setName] = useState('')

  //デフォルトの動きを抑制させる
  const handleSubmit = (e) => {
    e.preventDefault();
    // firebaseの機能を使用したサインアップ機能
    firebase.auth().createUserWithEmailAndPassword(email, password)
    //処理が失敗した場合は、catchメソッドの関数が実行
    .then(({ user }) => {
      user.updateProfile({
          displayName: name
      })
  })
    .catch(err =>{
        console.log(err);
    })
  };
  return (
    <div>
      <h1>サインアップ</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Eメール</label>
          <input name="email" type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </div>
  );
};

export default Signup;
