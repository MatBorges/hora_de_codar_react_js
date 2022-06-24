function Evento() {
    
    function alerta() {
        alert(`Ocê crico aqui`)
    }

    return(
        <>
            <p>Clique no botão</p>
            <button onClick={alerta}>Aqui</button>
        </>
    )
    
}

export default Evento
