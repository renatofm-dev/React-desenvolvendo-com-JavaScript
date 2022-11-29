//import { useState } from 'react'
import './CampoTexto.css'
import '../Formulario/index'


interface CampoTextoProps {
        aoAlterado: (valor: string) => void
        placeholder: string
        label: string
        valor: string
        obrigatorio: boolean
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, valor, placeholder } : CampoTextoProps) => {

    // let valor = ''
    // const [valor, setValor] = useState('')


    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(event.target.value)
        // setValor(event.target.value)
        // console.log(valor)
    }
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder} 
            />
        </div>
    )

}

export default CampoTexto