import React from 'react';

const Signup = () => {
    return (
        <div>
            <h1>サインアップ</h1>
            <form>
                <div>
                    <label htmlFor='email'>Eメール</label>
                    <input
                        name='email' 
                        type='email' 
                        id='email' 
                        placeholder='Email' 
                    />
                </div>
                <div>
                    <label htmlFor='password'>パスワード</label>
                    <input 
                        name='password' 
                        type='password' 
                        id='password' 
                        placeholder='Password' 
                    />
                </div>
                <button type='submit'>サインアップ</button>
            </form>
        </div>
    )
}

export default Signup