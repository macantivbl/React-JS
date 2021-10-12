import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)
    const [AumentarDisminuir, setAumentarDisminuir] = React.useState("")

    const aumentar=()=>{
        setAumentarDisminuir("Aumentando")
        setContador(contador + 1)
    }

    const Disminuir=()=>{
        setAumentarDisminuir("Disminuyendo")
        setContador(contador - 1)
    }

    return (
        <div>
            <h2>Contaodr</h2>
            <h3>nuestro numero {AumentarDisminuir} : {contador}</h3>
            <button type="button" className="btn btn-success" onClick={() => aumentar()}>Aumentar</button>
            <button type="button" className="btn btn-dark" onClick={() => Disminuir()}>Disminuir</button>
        </div>
    )
}

export default Contador
