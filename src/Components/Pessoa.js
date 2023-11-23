import PropTypes from "prop-types"
import style from "./Pessoa.Components.css"

function Pessoa({nome ,img, idade, profissao}) {
    return(
        <div className="Fundo">
            <p>Seu nome é {nome}</p>
            <p>Você tem {idade} anos</p>
            <img src={img} alt={nome} />
            <p>Sua profissão é {profissao}</p>
        </div>
    )
}
//tipos de valores obrigatorios
Pessoa.propTypes = {
    nome: PropTypes.string.isRequired,  //texto obrigatorio
    idade: PropTypes.number             //número
}








//valores padrão em caso de omissão
Pessoa.defaultProps = {
    img: "https://placehold.co/400",
    profissao: "Desempregado"
}

export default Pessoa