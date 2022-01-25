import LivrosAT from '../../components/escolha-livro/LivrosAT';
import LivrosNT from '../../components/escolha-livro/LivrosNT';
import MensagemDiaria from '../../components/mensagem-diaria/MensagemDiaria';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/loading/Loading';


const Home = () => {

   const [isLoadingBook, setIsLoadingBook] = useState(true);
   const [isLoadingVerse, setIsLoadingVerse] = useState(true);
   const [livros, setLivros] = useState([]);
   const [mensagemDiaria, setMensagemDiaria] = useState()

   useEffect(() => {
      api.get("books").then(livrosResp => {
         setLivros(livrosResp.data)   
         setIsLoadingBook(false)    
      })
      api.get('verses/nvi/random').then(versoResp => {
         setMensagemDiaria(versoResp.data) 
         setIsLoadingVerse(false)        
      })
   }, [])  

   return (
      <>
         {isLoadingVerse ? 
            (<>
               <Loading type="spin" color="#000"/>
            </>)
            : 
            (<>
               <MensagemDiaria verso={mensagemDiaria}/>
            </>)
         }

         {isLoadingBook ? 
            (<>
               <Loading type="spin" color="#000"/>
            </>)
            : 
            (<>
               <LivrosAT livros={livros}/>
               <LivrosNT livros={livros}/>
            </>)
         }        
      </>
   )
}

export default Home
