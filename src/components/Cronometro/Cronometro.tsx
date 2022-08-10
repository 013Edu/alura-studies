import { useState } from "react"
import { tempoParaSegundos } from "../../common/utilits/date"
import { Itarefas } from "../../Types/tarefas"
import Botao from "../Botao"
import Relogio from "./Relogio/Relogio"
import "./Style.scss"

interface Props{
    selecionado: Itarefas | undefined
}

export default function Cronometro({selecionado}:Props){
const [tempo, setTempo] = useState<number>()
if(selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
}
    return(
        <div className={"cronometro"}>
        <p className={"titulo"}> Escolha um card e inicie o cronômetro </p>
        Tempo: {tempo}
     <div className={"relogioWrapper"}>
        <Relogio />
        </div>
       <Botao texto = "Começar" />
   </div>
    )
}