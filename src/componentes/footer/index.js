import './footer.css'
import FooterLogo from '../../imagens/logo.png'
import FooterIcon1 from '../../imagens/fb.png'
import FooterIcon2 from '../../imagens/ig.png'
import FooterIcon3 from '../../imagens/tw.png'

const Footer = () =>{
    return(
        <footer>
            <div className='footer'>
                <div className='footer_fundo'>
                    <div className='icons'>
                        <img src={FooterIcon1} />
                        <img src={FooterIcon2} />
                        <img src={FooterIcon3} />
                    </div>
                    <img src={FooterLogo} />
                    <span className=''>Desenvolvido por Hendel</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer