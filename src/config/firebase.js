import firebase from 'firebase';
//Firebase Authenticationを使用するために、firebase/authを読み込み
import 'firebase/auth'

const firebaseConfig ={
      apiKey: "AIzaSyB2nxYJPu8u-7ecJReve4IRuHPgnA4rlmQ",
        authDomain: "chat-app-ba5af.firebaseapp.com",
        projectId: "chat-app-ba5af",
        storageBucket: "chat-app-ba5af.appspot.com",
        messagingSenderId: "687011421545",
        appId: "1:687011421545:web:538cba376aa817fa3eb1f8"
      

}

//firebaseの初期化
firebase.initializeApp(firebaseConfig)

export default firebase;