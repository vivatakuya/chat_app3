import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";

const Room = () => {
  const [messages, setMessages] = useState(null);
  const [value, setValue] = useState("");

  useEffect=(()=>{
    firebase.firestore().collection('messages')
//onsnapshotでリアルタイムで反映させる
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
  })
},[])

const handleSubmit = () => {
  firebase.firestore().collection('messages').add({
      content: value,
      
  })
}

  
  return (
    //サインアウトは、firebase.auth().signOutメソッドを実行するのみ
    <>
      <h1>チャットルーム</h1>
      <ul>
        <li>sample user : sample message</li>
      </ul>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <button type="submit">送信</button>
      </form>

      <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
    </>
  );
};

export default Room;
