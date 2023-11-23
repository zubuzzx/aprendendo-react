import PropTypes from "prop-types";

function MeApresente({nome}){
    return(
        <div>
            <h1>Olá {nome}</h1>
            <p>{nome} Você é incrivel</p>
            <p>Parabens {nome} por ser assim</p>
        </div>
    )
}
//valores padrão em caso de omissão
MeApresente.defaultProps = {
    nome: "Sem nome"
}

export default MeApresente;