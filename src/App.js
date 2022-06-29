import React from 'react'//para utilizar as tags html, jsx
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAle from './components/basicos/NumeroAle'
import Modelo from './components/Modelo'
import './app.css'
import Nome from'./components/basicos/Nome'
import Formulario from './components/basicos/Formulario'

export default function App(props) {
    return (
        <div className='app'>
      
            <h1>Fundamentos do React</h1>

            <div className='cards'>

<Modelo titulo="formulario" color="yellow">
<Formulario/>
</Modelo>

            <Modelo titulo="utilizando useStates" color="#d2691e">
                <Nome/>
            </Modelo>

            <Modelo titulo="Primeiro componente"color="pink"> <Primeiro /> </Modelo>

            <Modelo titulo="Utilizando Parâmetros"color="green"><ComParametro titulo="Frio em Sp" subtitulo="Neve" /></Modelo>

            <Modelo titulo="Utilizando Parâmetros" color="red"><ComParametro titulo="Calor no Rio de Janeiro" subtitulo="Chuva de verão" /></Modelo>

            <Modelo titulo="Utilizando Parâmetros"color="LigthBlue"><ComParametro titulo="Start A22" subtitulo="lindos" /></Modelo>

            <Modelo titulo="Utilizando Fragmento"color="yellow"><Fragmento /></Modelo>

            <Modelo titulo="Números aleatórios"color="purple"><NumeroAle min={1}  max={80}/></Modelo>

            <Modelo titulo="Números aleatórios"color="gray"><NumeroAle min={10}  max={80}/></Modelo>

            <Modelo titulo="Números aleatórios"color="orange"><NumeroAle min={30}  max={80}/></Modelo>

            <Modelo titulo="Números aleatórios"color="gold"><NumeroAle min={50}  max={80}/></Modelo>
          







            </div>

            </div>


       
    )
}