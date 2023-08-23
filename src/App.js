import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form'
import Time from './componentes/Time';
import Card from './componentes/card';
import Footer from './componentes/footer';


function App() {

  const [form, setForm] = useState([])
  const [colaboradores, setColaboradores] = useState([])

  const handleAddColaborador = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  const times =[
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  console.log({colaboradores})

  return (
    <div className="App">

        <Banner />
        <Form 
          obrigatorio={true} 
          time={times.map(teste => [teste.nome])}
          addColaborador={handleAddColaborador} 
        />

        {times.map(time => 
          <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />)}

          <Footer />
    </div>    
  );
}

export default App;

// import {useState} from 'react'


// function App(){


//   const [leia, escreve] = useState('')

//   return(
//     <>
//     <input value={leia} onChange={(event) => escreve(event.target.value)}/>
//     <p>{leia}</p>
//     <input />
//     </>
//   )
// }

// export default App


// import { StyledButton } from './components-styled/Button_styled'
// import { Wrapper } from './components-styled/Wrapper_styled'

// function App() {
//   return(
//     <Wrapper>
//       <StyledButton>escrita</StyledButton>
//       <StyledButton corVermelha={'red'}>escrita</StyledButton>
//       <StyledButton>escrita</StyledButton>
//       <a href='#'>Aoba isso é um link</a>
//     </Wrapper>
//   )
// }

// export default App