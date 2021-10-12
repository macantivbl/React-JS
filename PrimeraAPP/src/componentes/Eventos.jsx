import React,{Fragment, useState} from 'react'


const Eventos = () => {

    const [texto,setTexto] = useState('texto desde estado');

    const eventoClick = () =>{
        console.log('click')
        setTexto('cambiando el texto')
    }

    return (
        <Fragment>
            <hr />
            <h2>Eventos</h2>
            <h3>{texto}</h3>
            <button type="button" className="btn btn-success" onClick={eventoClick}>Click</button>
        </Fragment>
    )
}

export default Eventos
