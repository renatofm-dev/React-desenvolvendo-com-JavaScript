import './Banner.css'

import React from 'react'

interface BannerProps {
    enderecoImagem: string;
    textoAlt?: string;
}

function Banner({ enderecoImagem, textoAlt }:BannerProps)  {

    return (
        <header className='banner'>
    {/* <img src="/imagens/banner.png" alt="Banner principal do organograma"></img> */}
    <img src={enderecoImagem} alt={textoAlt}></img>
        </header>
    )

}

export default Banner