import React from 'react';
import Contador from './componentes/Contador';
import Eventos from './componentes/Eventos';
import Formulario from './componentes/Formulario';
import Listas from './componentes/Listas';
import Parrafo from './componentes/Parrafo';
import Variables from './componentes/Variables';

function App() {
  return (
    <div className="container md-50">
      <h1>Hola mundo</h1>
      <Parrafo />
      <Variables />
      <Eventos />
      <Contador/>
      <Listas/>
      <Formulario/>
    </div>
  );
}

export default App;
