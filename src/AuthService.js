import React,  { useEffect, useState } from 'react';
import firebase from './config/firebase';

//Providerとして振る舞う
const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthChecked,setIsAuthChecked] =useState(false);

//副作用とは、1. 引数以外の要因で結果が変わってしまう関数  2. 関数の外に影響を与えてしまう関数
    useEffect(()=>{
        console.log("AuthProvider# useEffect");
        //ユーザーのログイン時、ログアウト時に必ず呼び出されるメソッド
    firebase.auth().onAuthStateChanged(user => {
        setUser(user);
        setIsAuthChecked(true);
    })
    //空の配列を与えた場合には、初回描写時にのみ実行
    },[]);

    return (
        
        // 実行順の確かめ。
        console.log("AuthProvider# return"),
        // contextを使用し、user情報を別のコンポーネントに引き継ぐ
        // App.jsの AuthProvider で囲んでいる子要素を'children'で取得できる。
        // 認証終了のチェックを入れることでリロード問題を解決
        <>
        {isAuthChecked &&(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
        )}
        </>
        
    )


}
export 
{AuthContext, 
    AuthProvider 
}