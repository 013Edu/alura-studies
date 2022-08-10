import React from "react"
import Botao from "../Botao"
import "./Style.scss"
import { v4 as uuidv4 } from 'uuid'; 
import { Itarefas } from "../../Types/tarefas";

class Formulario extends React.Component<{
    setTarefas:React.Dispatch<React.SetStateAction<Itarefas>>
}>{
 
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(antigas => [...antigas,{...this.state, completado: false, selecionado: false, id: uuidv4()}])
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(){
        return(
            <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
                <div className="inputContainer">
                    <label htmlFor="tarefa" >
                        Adicione seus estudos
                    </label>
                  <input 
                  type ="text" 
                  name="tarefa" 
                  id="tarefa" 
                  value={this.state.tarefa}
                  onChange ={evento => this.setState({...this.state, tarefa: evento.target.value})}
                  placeholder="Digite aqui seus estudos" 
                  required 
                  /> 
                </div>
                <div className="inputContainer">
                <label htmlFor="tempo" >
                       Tempo
                    </label>
                  <input 
                  type ="time" 
                  name="tempo" 
                  id="tempo" 
                  value={this.state.tempo}
                  onChange = {evento => this.setState({...this.state, tempo: evento.target.value})}
                  step= "1" 
                  min= "00:00:00" 
                  max = "01:30:00" 
                  required 
                  /> 
                </div>
                <Botao type ="submit" texto = "Adicionar" />
            </form>
        )
    }
}

export default Formulario