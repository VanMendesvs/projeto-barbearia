import React, { useState } from "react" //chamando o hook useState
import Cortes from "../../componentes/Main/careca.jpg" //importando imagens
import Barba from "../../componentes/Main/barba.jpeg"
import Infantil from "../../componentes/Main/corteinfantil.jpg"
import Carrinho from "../../componentes/Main/carrinho.png"

function Main() {

        const [numero,setNumero] = useState (0)
        //const [o objeto, função para mudar o estado o objeto] =useState(valor incial)

        const Adicionar =()=> {
            if (numero < 10)
                   setNumero(numero + 1)
            }
        
        return(
            <main>
                <div className="card1">
                <img className="cortes" src={Cortes} alt=""/> 
                <h3>50,00</h3>
                <button onClick={Adicionar}>AGENDAR<img src={Carrinho}alt=""/></button>
                <h3> {numero} </h3>
                </div>  

                <div className="card2">
                <img className="barba" src={Barba} alt="Foto de Homem com Barba"/>
                <h3>Barba e Bigode</h3>
                <h3>R$ 40,00</h3>
                <img src={Carrinho} alt="" onclick={Adicionar}/>
                <h3> {numero} </h3>
                </div>

                <div className="card3">
                    <img className="corteinfantil"src={Infantil} alt="Menino cortando cabelo"/>
                    <h3>Corte Infantil</h3>
                    <h3>R$ 50,00</h3>
                    <button>AGENDE AGORA</button>
                </div>
                
            </main>
        )

}
export default Main