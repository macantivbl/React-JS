import React, { useState } from 'react'

const Listas = () => {
    const estadoInicial = [
        { id: 1, texto: "tarea1" },
        { id: 2, texto: "tarea2" },
        { id: 3, texto: "tarea3" },
    ]

    const [lista, setLista] = useState(estadoInicial)

    const array1 = ['Chile', 'Argentina']
    const array2 = ['Peru', 'Mexico']

    const Unir = [...array1, ...array2]
    console.log(Unir);

    const [TextoAumentar, setTextoUmentar] = useState(4)
    const agregarElemento = () => {
        
            setLista([
                ...lista,
                {id: TextoAumentar, texto: "tarea"+TextoAumentar}
            ])
            setTextoUmentar(TextoAumentar+1)
        }

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item) => (
                    <h4 key={item.id}>{item.texto}</h4>
                ))

            }
            <button type="button" className="btn btn-primary" onClick={()=> agregarElemento()}>Agregar</button>
        </div>
    )
}

export default Listas
