import './Form.css'
import ListaSuspensa from './list/List'
import Button from './button/Button'
import './list/list.css'
import {useState} from 'react'



const Form = (props) => {
    const submit = (evento) =>{
        evento.preventDefault()
        console.log({form})
        
        props.addColaborador(form)
    }

    const [form, setForm] = useState({
        nome: '',
        cargo: '', 
        imagem: '',
        time: ''
    })

    return(
        <section className="form">
            <div className="container">
                <form onSubmit={submit}>
                    <span>Preencha os dados para criar o card do colaborador</span>

                    <label className='animate__bounceInDown'>Nome</label>
                    <input value={form.nome} onChange={(e) => {setForm({ ...form, nome: e.target.value })}} required={props.obrigatorio} placeholder="Digite seu nome" />

                    <label >Cargo</label>
                    <input value={form.cargo} onChange={(e) => {setForm({ ...form, cargo: e.target.value })}} required={props.obrigatorio} placeholder="Digite seu cargo"/>

                    <label>Imagem</label>
                    <input value={form.imagem} onChange={(e) => {setForm({ ...form, imagem: e.target.value })}} placeholder="Informe o endereço da imagem"/>

                    <label>Time</label>


                    <ListaSuspensa 
                        valor={form.time} 
                        setValor={[form, setForm]} 
                        obrigatorio={true} 
                        itens={props.time}
                    />
                    
                    <Button />      
                </form>
            </div>
        </section>
    )
}

export default Form