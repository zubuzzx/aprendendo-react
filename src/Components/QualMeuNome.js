import {useState} from "react"
function QualMeuNome(){

   const[nome, mudaNome] = useState();
   
    return(
        <div>
            <label htmlfor="nome">Nome: </label>
            <input onKeyUp={(e) => mudaNome(e.target.value)} type="text" id="nome" name="nome"></input>
            <br />
            <p>Seu nome é: {nome}</p>
        </div>
    )
}

export default QualMeuNome