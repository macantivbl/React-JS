import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h1>Saludos {props.persona}</h1>
            {
                props.edad ? <h4>edad: {props.edad}</h4> : null
            }
        </div>
    )
}

export default Saludo
