import { useContext } from "react"
import { LogicaJogoMemoriaContext } from "../contexts/LogicaJogoMemoria"

export const useJogoMemoria = () => {
  const contexto = useContext(LogicaJogoMemoriaContext);
  return contexto;
}