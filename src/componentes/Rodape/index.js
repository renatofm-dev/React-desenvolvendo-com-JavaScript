import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target="_blank" >
                            <img src='/imagens/fb.png' alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target="__blank">
                            <img src='imagens/tw.png' alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target="__blank">
                            <img src='imagens/ig.png' alt='' />
                        </a>
                    </li>
                </ul>
            </section>

            <section className='logo'>
                <img src='imagens/logo.png' alt='logo'/>
            </section>
             
             <section className='text'>
                <p>Desenvolvido por Alura.</p>
             </section>
        </footer>
    )
}

export default Rodape