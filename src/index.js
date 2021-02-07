import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)

// レンダー終了タイミング確かめよう
console.log("index# render end");