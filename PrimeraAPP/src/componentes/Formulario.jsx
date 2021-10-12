import React from 'react'

const Formulario = () => {

    const [fruta,setFruta] = React.useState('')
    const [descripcion,setDescripcion] = React.useState('')
    const [lista,setLista] = React.useState([])

    const guardarDatos = (e) =>{
        e.preventDefault()
        

        if (!fruta.trim()) {
            alert("El campo fruta esta vacio")
            return
        }

        if (!descripcion.trim()) {
            alert("El campo descripcion esta vacio")
            return
        }

        console.log('Procesando datos....' + fruta +' '+ descripcion);

        setLista([
            ...lista,
            {nombrefruta: fruta,
            nombredescripcion: descripcion
            }
        ])
        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div id='formulario'>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input type="text" 
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={e=>
                        setFruta(e.target.value)
                    }
                />
                <input type="text" 
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    onChange={e=>
                        setDescripcion(e.target.value)
                    }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>

            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombrefruta} - {item.nombredescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
