import { Itarefas } from "../../../Types/tarefas";
interface Props{
    tarefas: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
    selecionarTarefa: (tarefaSelecionada: Itarefas) => void
  }
  
  export default function Item(
    {
      tarefas,
      tempo,
      selecionado,
      completado,
      id,
      selecionarTarefa
    }: Props) {
    console.log('item atual: ', { tarefas, tempo, selecionado, completado, id })
    return (
      <li
        className={`item ${selecionado ? "itemSelecionado" : ''}`}
        onClick={() => selecionarTarefa(
          {
            tarefas,
            tempo,
            selecionado,
            completado,
            id
          }
          )}
        >
        <h3>{tarefas}</h3>
        <span>{tempo}</span>
      </li>
    )
  }