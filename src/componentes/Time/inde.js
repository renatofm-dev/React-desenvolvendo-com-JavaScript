import './Time.css'

const Time = (props) => {
    const estilosCSS = {backgroundColor:props.corSecundaria}
    return (
        <section className='time' style={estilosCSS}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>

    )

}

export default Time