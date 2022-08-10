import React, { useState } from "react"
import { Itarefas } from "../../Types/tarefas"
import Item from "./Item/Item"
import "./Style.scss"

interface Props {
    tarefas: Itarefas[],
    selecionarTarefa: (tarefaSelecionada: Itarefas) => void 
  }
  
  
  function Lista({ tarefas, selecionarTarefa }: Props) {
    return (
      <aside className="listaTarefas">
        <h2> Estudos do dia </h2>
        <ul>
          {tarefas.map(item => (
            <Item
              selecionarTarefa={selecionarTarefa}
              key={item.id}
              {...item}
            />
          ))}
        </ul>
      </aside>
    )
  }

export default Lista