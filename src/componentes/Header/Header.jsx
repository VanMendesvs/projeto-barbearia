import React from "react";
import "../../App.css"
import Logo from "./barbearia.png"

function Header() {
    return (
        <header>
            <nav>
             <img src={Logo} alt="Logo da Barbearia" />

                <ul>
                    <li>Cortes</li>
                    <li>Valores</li>
                    <li>Unidades</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header