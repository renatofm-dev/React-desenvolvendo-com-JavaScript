import { useState } from 'react'
import './CampoTexto.css'
import '../Formulario/index'
const CampoTexto = (props) => {

    // let valor = ''
    // const [valor, setValor] = useState('')

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
        // setValor(event.target.value)
        // console.log(valor)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )

}

export default CampoTexto