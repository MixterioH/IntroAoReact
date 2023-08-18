import './Banner.css'
import bannerimg from '../../imagens/banner.png'
function Banner(){
    return(
        <header className="banner">
        <img src={bannerimg} alt="O banner principal da página" />
        </header>
    )
}

export default Banner