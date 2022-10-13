import React from "react";
import {InfosUsuario} from "./InfosUsuario";

export function CardVideo (props) {
  // const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
    return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={props.info.imagem} alt="" />
              <h4>{props.info.titulo}</h4>
              <InfosUsuario usuario1={props.usuario}/>
    </div>
)}