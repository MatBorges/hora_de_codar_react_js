import jose from './Pessoa.module.css'

function Pessoa({nome, idade, cargo, foto}) {

    return(
        <div className={jose.card}>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Cargo: {cargo}</p>
        </div>
    )
    
}

export default Pessoa;