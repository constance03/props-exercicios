import React from "react";
import "./App.css";
import {CardVideo} from "./components/CardVideo";


export default function App() {

  const infoVideo = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "Título do vídeo"
  }

  const infoUsuario = {
    logo: "https://ih1.redbubble.net/image.2164764570.4339/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
    autor: "Autor: Stella de Oculos"
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          <CardVideo info={infoVideo} usuario={infoUsuario}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

