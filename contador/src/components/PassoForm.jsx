import React from 'react'

export default props => {
    return(
        <h2>
            <label htmlFor="PassoInput">Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                // o parametro event é o evento da tag
                // o sinal de + converte o value (que por padrão é string) para number
                onChange={event => props.setPasso(+event.target.value)}
            />
        </h2>
    )
}