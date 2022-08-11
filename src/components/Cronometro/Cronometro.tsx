import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utilits/date"
import { Itarefas } from "../../Types/tarefas"
import Botao from "../Botao"
import Relogio from "./Relogio/Relogio"
import "./Style.scss"

interface Props{
    selecionado: Itarefas | undefined
    finalizarTarefa: ()=> void
}

export default function Cronometro({selecionado, finalizarTarefa}:Props){
const [tempo, setTempo] = useState<number>()

useEffect(()=>{
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
},[selecionado]);

function regressiva(contador: number = 0){
    setTimeout(()=>{
        if(contador > 0){

             setTempo(contador -1) 
           return regressiva(contador -1)
        }
          finalizarTarefa()
    },1000)
}

    return(
        <div className={"cronometro"}>
        <p className={"titulo"}> Escolha um card e inicie o cronômetro </p>
     <div className={"relogioWrapper"}>
        <Relogio tempo = {tempo} />
        </div>
       <Botao onClick ={()=> regressiva(tempo)} texto = "Começar" />
   </div>
    )
}