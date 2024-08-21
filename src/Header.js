import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="/logo512.png" alt="react logo" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Lore</li>
                    <li>Ipsum</li>
                    <li>That Page</li>
                </ul>
            </nav>
        </header>
    )
}
