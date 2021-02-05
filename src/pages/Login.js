 import React from 'react'

const Login = () => {
    return (
        <>
            <h1>ログイン</h1>        
            <form>
                <div>
                    <label htmlFor='email'>メールアドレス</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>パスワード</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password' 
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login