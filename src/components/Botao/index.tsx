import React from "react";
import "./Style.scss"

class Botao extends React.Component <{texto: string,  type?: "button" | "submit" | "reset" | undefined}> {
  render() {

    const {type = "button"} = this.props

    return(
    <button type = {type} className="botao">
       {this.props.texto}
      </button>
    ) 
  }
}

export default Botao;
