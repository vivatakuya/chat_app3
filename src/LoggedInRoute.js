import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'

//ユーザーの中身を確かめるメソッドを使用
const userDisplay = (user) => {
  if (user == null) {
    console.log("LoggedInRoute# user : null");
  } else {
    console.log("LoggedInRoute# user : " + Object.values(user));
  }
};

const LoggedInRoute = ({ component: Component, ...rest }) => {
  //Providerによって与えられた値を使用する際は、useContextフックを使用
  const user = useContext(AuthContext);

  // ユーザー情報が入っていればcomponentに入っているのをそのまま表示
  // 入っていなければloginページにリダイレクト
  return (
    userDisplay(user),
    
      //LoggedInRouteはRouteコンポーネントをベースとして、ログイン状態によって異なる処理を行うよう拡張したものです。そのため、Routeコンポーネントでラップする必要
      <Route
        {...rest}
        render={(props) =>
            //JSXを用いてコンポーネントを呼び出す際は、先頭の文字をuppercaseにしなければエラーが発生
          user ? <Component {...props} /> : <Redirect to={"/login"} />
        }
      />
    
  );
};

export default LoggedInRoute;
