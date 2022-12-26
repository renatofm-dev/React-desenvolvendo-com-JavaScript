import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import './Time.css'
import Colaborador from '../Colaborador'
import React from 'react'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    const estilosCSS = {backgroundColor:props.corSecundaria}
    return (
        props.colaboradores.length > 0 ? //renderização condicional
        <section className='time' style={estilosCSS}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                <Colaborador 
                corDeFundo = {props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}
                />)}
            </div>
        </section>
        : <></>
    )

}

export default Time