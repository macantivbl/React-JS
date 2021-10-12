import React from "react";
import { nanoid } from 'nanoid'

function App() {
  const [tarea, setTarea] = React.useState("")
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null)

  const agregarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      
      setError('Agrege una tarea....')
      return
    }
    console.log(tarea);
    setTareas([
      ...tareas,
      { id: nanoid(5), NombreTarea: tarea }
    ])
    setTarea('')
    setError(null)
  }

  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }

  const cancelar = () => {
    setModoEdicion(false)
    setTarea('')
    setId('')
  }

  const editarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      alert("Elemento vacio")
    }
    const arrayEditado = tareas.map(
      item => item.id === id ? { id, NombreTarea: tarea } : item)
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }
  const editar = item => {
    setModoEdicion(true)
    setTarea(item.NombreTarea)
    setId(item.id)
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD APP</h1>
      <hr />
      <div className="row">

        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
              tareas.length === 0 ? (
                <li className="list-group-item list-group-item-warning">No hay tareas</li>
              ) : (
                tareas.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.NombreTarea}</span>

                    <button onClick={() => eliminarTarea(item.id)}
                      className="btn btn-sm btn-danger float-right mx-2"
                    >Eliminar</button>

                    <button
                      className="btn btn-sm btn-warning float-right"
                      onClick={() => editar(item)}
                    >Editar</button>
                  </li>
                ))
              )
            }


          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
            }
          </h4>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            {
              error ? <div className="alert alert-danger" role="alert">
                Agrege una tarea
              </div> : null
            }

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            {
              modoEdicion ? ([
                <button className="btn btn-warning btn-block" type="submit">Editar</button>,
                <button onClick={() => cancelar()} className="btn btn-danger btn-block" type="submit">Cancelar</button>
              ]
              ) : (
                <button className="btn btn-dark btn-block" type="submit">Agregar</button>
              )
            }

          </form>
        </div>

      </div>
    </div>

  );
}

export default App;
