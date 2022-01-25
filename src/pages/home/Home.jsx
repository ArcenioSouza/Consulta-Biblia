import LivrosAT from '../../components/escolha-livro/LivrosAT';
import LivrosNT from '../../components/escolha-livro/LivrosNT';
import MensagemDiaria from '../../components/mensagem-diaria/MensagemDiaria';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/loading/Loading';
import * as S from './Styled'


const Home = () => {

   const [livros, setLivros] = useState([]);
   const [mensagemDiaria, setMensagemDiaria] = useState()

   useEffect(() => {
      api.get("books").then(livrosResp => {
         setLivros(livrosResp.data)   
      })
      api.get('verses/nvi/random').then(versoResp => {
         setMensagemDiaria(versoResp.data)        
      })
   }, [])  

   return (
   <>
      { livros !== [] && mensagemDiaria !== undefined ?
         <>
            <MensagemDiaria verso={mensagemDiaria}/>   
            <LivrosAT livros={livros}/>
            <LivrosNT livros={livros}/>  
         </>
         :
         <S.Container>
            <Loading type="spin" color="#000"/>
         </S.Container>
      }                     
   </>
   )
}

export default Home
