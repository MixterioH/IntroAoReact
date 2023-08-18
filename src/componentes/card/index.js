import './card.css'
import eu from '../..//imagens/eu.jpg'

const Card = (props)=>{

    const handleVerifyImagem = (url) => {
        const splitedUrl = url.split('.')
        if(splitedUrl[1] === '.jpg') {
            return true
        } else {
            return
        }
    }

    return(
        <div className="card" style={{marginRight: props.margemDireita}}>
            <div className="card_cor-verde" style={{background: props.corPrimariaa}}></div>
            <div className='card_cor-branca'>            
                {props.colaborador.imagem !== ''
                    ? <img src={props.colaborador.imagem} alt={props.colaborador.nome}/>
                    : <img src={eu} alt='Hendel Berlim Bonini'/>}
                <h3>{props.colaborador.nome}</h3>
                <p>{props.colaborador.cargo}</p>
            </div>
        </div>
    )
}

export default Card