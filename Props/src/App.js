import Comentario from "./Componentes/Comentario";
import Saludo from "./Componentes/Saludo";



function App() {

  var comeOBJ = {
    urlImagen : "https://picsum.photos/64",
    ComPersona: ['Vicente','Juan','Pedro','Ignacio'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  }

  return (
   <div className='container mt-5'>
     <h1>Props</h1>
      <Saludo persona='Vicente'/>
      <Saludo persona='Juan' edad={45}/>
      <Saludo persona='Pedro'/>
      <Saludo persona='Ignacio' edad={30}/>
      <hr />
      <h3>Caja de comentarios</h3>
      <Comentario 
        urlImagen = {comeOBJ.urlImagen}
        persona= {comeOBJ.ComPersona[0]}
        texto={comeOBJ.text}
      />
      <Comentario 
        urlImagen = {comeOBJ.urlImagen}
        persona= {comeOBJ.ComPersona[1]}
        texto={comeOBJ.text}
      />
      <Comentario 
        urlImagen = {comeOBJ.urlImagen}
        persona= {comeOBJ.ComPersona[2]}
        texto={comeOBJ.text}
      />
      <Comentario 
        urlImagen = {comeOBJ.urlImagen}
        persona= {comeOBJ.ComPersona[3]}
        texto={comeOBJ.text}
      />
      
   </div> 
  );
}

export default App;
