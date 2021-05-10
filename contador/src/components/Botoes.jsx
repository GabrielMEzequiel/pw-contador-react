import React from 'react'

export default props => {
    return(
        <div>
            <button onclick={props.setInc} >+</button>
            <button onclick={props.setDec} >-</button>
        </div>
    )
}