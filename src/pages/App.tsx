import React, { useState } from 'react';
import Cronometro from '../components/Cronometro/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefas } from '../Types/tarefas';
import "./Style.scss"
function App() {
  const [tarefas, setTarefas ] = useState<Itarefas[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefas>();

  function selecionarTarefa(tarefaSelecionada: Itarefas){

     setSelecionado(tarefaSelecionada);
     setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa =>({
      ...tarefa,  selecionado: tarefa.id === tarefaSelecionada.id ? true : false
     })
      ))
  }
  function finalizarTarefa() {
    if(selecionado) {
        setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
}

  return (
    <div className="AppStyle">
     <Formulario setTarefas = {setTarefas} />
     <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa}/>
     <Cronometro 
     selecionado = {selecionado}
     finalizarTarefa ={finalizarTarefa}
      />
    </div>
  );
}

export default App;
