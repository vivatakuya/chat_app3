import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/firebase';
import { AuthContext } from '../AuthService'

const Room = ({ history }) => {
      const [messages, setMessages] = useState(null)
      const [value, setValue] = useState('')
      const user = useContext(AuthContext)

      //snapshotイベントは、対象のコレクション(今回はmessages)に変更があるたびに発生する
    useEffect(() => {
        firebase.firestore().collection('messages').orderBy('timestamp','desc')
            .onSnapshot((snapshot) => {
                // map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し
                // その結果からなる新しい配列を生成します
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                // 内部データ確かめよう
                console.log(messages);
                setMessages(messages);
            });
    }, [])


  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("messages")
  //     .orderBy("timestamp", "desc")
  //     //onsnapshotでリアルタイムで反映させる
  //     .onSnapshot((snapshot) => {
  //       const messages = snapshot.docs.map((doc) => {
  //         return doc.data();
  //       });
  //       console.log(messages);

  //       setMessages(messages);
  //     });
  // }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("messages")
      .add({
        name: user.email,
        context: value,
        timestamp: new Date(),
      })
      .then(function (doRef) {
        setValue("");
        console.log("Document written with ID: ", doRef.id);
      })
      .catch(function (error) {
        setValue("");
        console.error("Error adding document: ", error);
      });
  };

  return (
    //サインアウトは、firebase.auth().signOutメソッドを実行するのみ
    <>
      <h1>チャットルーム</h1>
      <ul>
        {/* messagesを取得する前に出力されることを抑止する。 */}
        {/* messagesのmapを一つづつ分解する。。 */}
        {messages && messages.map((messages) => <li> {messages.context} </li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* ログアウト機能追加 */}

        <button type="submit">送信</button>
      </form>

      <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
    </>
  );
};

export default Room;






