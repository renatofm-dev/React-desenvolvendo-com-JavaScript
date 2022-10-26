
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time/inde';


function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
