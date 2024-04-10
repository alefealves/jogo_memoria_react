import { useEffect } from "react";
import { LogicaJogoMemoriaContextProvider } from "../contexts/LogicaJogoMemoria";
import { useJogoMemoria } from "../hooks/useJogoMemoria";
import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";

export const JogoMemoria = () => {
  return (
    <LogicaJogoMemoriaContextProvider>
      <JogoMemoriaConteudo />
    </LogicaJogoMemoriaContextProvider>
  )
}

export const JogoMemoriaConteudo = () => {
  const { cartas, iniciarJogo } = useJogoMemoria();

  useEffect(() => {
    iniciarJogo();
  }, []);

  return (
    <div className="jogo-memoria">
      <div className="jogo-memoria__conteudo">
        <h1>Jogo Memória</h1>
        <Placar />
        {cartas?.length === 0 ? (
          <p>Carregando cartas...</p>
        ) : (
          <div className="cartas">
            {cartas.map((props) => (
              <Carta key={props.id} {...props} />
            ))}
          </div>
        )}
      </div>
      <Resultado />
    </div>
  )
}