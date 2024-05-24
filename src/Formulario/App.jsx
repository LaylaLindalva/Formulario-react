import React from "react"

const App = () => {
    const [cep, setCep] = React.useState('')
    const [error, setError] = React.useState('')



    function validaCep(value){
        if(value.length === 0){
            setError("O campo não pode estar vazio")
            return false
    }else if (!/\d{5}-\d{3}/.test(value)) {
        setError("Digite um CEP válido!")
        return false
    }else {
    setError(null)
        return true

    }
}

function handleBlur({target}){
    validaCep(target.value)
}
function preventDefult(event){
event.preventDefult()
}

    return(
        <form onSubmit={preventDefult} >
            <label htmlFor="cep">CEP</label>
            <input type="text"
            style={error ? {borderColor: "red"} :{borderColor:"green"}}
            id="cep"
            onBlur={handleBlur}
            value={cep}
            onChange={({target})=>setCep(target.value)} 
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    )
}

export default App;