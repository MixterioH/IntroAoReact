import React from "react"

const ListaSuspensa = (props) =>{
    const [form, setForm] = props.setValor

    return(
        <select value={props.valor} onChange={(e) => {setForm({ ...form, time: e.target.value })}} required={props.obrigatorio} className="lista">
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
        </select>
    )
}

export default ListaSuspensa