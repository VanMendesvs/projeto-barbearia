import React from "react"
import Cortes from "../../componentes/Main/careca.jpg"
import Barba from "../../componentes/Main/barba.jpeg"
import Infantil from "../../componentes/Main/corteinfantil.jpg"

function Main() {
        return(
            <main>
                <h1>SERVIÇOS</h1>
                <div>
                <section className="card1">
                <img className="cortes" src={Cortes} alt=""/> 
                <h3>Cortes</h3>
                <h3>R$ 50,00</h3>
                <button>AGENDE AGORA</button>
                </section>

                <section className="card2">
                <img className="barba" src={Barba} alt="Foto de Homem com Barba"/>
                <h3>Barba e Bigode</h3>
                <h3>R$ 40,00</h3>
                <button>AGENDE AGORA</button>
                </section>

                <section className="card3">
                    <img className="corteinfantil"src={Infantil} alt="Menino cortando cabelo"/>
                    <h3>Corte Infantil</h3>
                    <h3>R$ 50,00</h3>
                    <button>AGENDE AGORA</button>
                </section>
                </div>
            </main>
        )

}
export default Main