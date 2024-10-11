import './App.css';
import {useState} from "react";
function App() {
  const[vetor, setVetor] = useState( ["Rian", "Marina", "Rafael"] );  
  const [aluno, setAluno] = useState ("");
  function adicionar()
  {
    setVetor([...vetor, aluno]);
    setAluno("");
  }
  return (
    <div>
      <h1>Aula 04 - Estudo De Vetores</h1>
    <div className='conteudo'>
      <h3>Entrada De Dados</h3>
<form>
<p>
Digite o nome do Aluno <br />
<input type="text" value={aluno} onChange={(e)=> setAluno(e.target.value)} />

</p>
<p>
  <button type='button' onClick={adicionar}>Adicionar o nome na lista</button>
</p>
</form>
    </div>



      <div className ='conteudo'>
        <ul>
      {vetor.map( nome => (<li>{nome}</li>) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
