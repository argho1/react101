import React from "react"
import ReactDOM from "react-dom"
import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
import './index.css'




function Mypage() {
    return (
        <div>
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Mypage/>, document.getElementById('root'))