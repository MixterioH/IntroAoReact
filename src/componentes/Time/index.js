import './time.css'
import Card from '../card/'

const Time = (props) =>{
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h2>{props.nome}</h2>
            <div className='line' style={{backgroundColor: props.corPrimaria}}></div>
            <div className='time_card'>

                {props.colaboradores.map(colaborador => {
                    return <Card 
                        corPrimariaa={props.corPrimaria} 
                        colaborador={colaborador}
                    />
                })}
            </div>
            
        </section>
        : ''
    )
}


export default Time