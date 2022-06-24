import styles from "./Form.module.css";

function Form({value}) {    

    function efetuarCadastro() {
        alert('Cadastrado com Sucesso!!')
    }

    return(
        <>
            <form className={styles.displayFlex} onSubmit={efetuarCadastro}>
                <input className={styles.ipt} type='text' placeholder='Login' />
                <input type='password' placeholder='Password' />
                <input type="submit" value={value} />
            </form>
        </>
    )    
}

export default Form