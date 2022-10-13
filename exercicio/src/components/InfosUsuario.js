import React from "react";

export function InfosUsuario (props) {
    return (
        <div>
            <img src={props.usuario1.logo} width="100px" alt=""/>
            <p>{props.usuario1.autor}</p>
        </div>
    )
}