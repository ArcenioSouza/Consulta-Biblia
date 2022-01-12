import { useState, useEffect } from 'react'
import { Loading } from '../loading/Loading';
import { api } from '../../services/api'
import * as S from './Styled'

const MensagemDiaria = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [mensagemDiaria, setMensagemDiaria] = useState(
      {
         book: {
            abbrev: {
               pt: "",
               en: ""
            },
            name: "",
            author: "",
            group: "",
            version: ""
         },
         chapter: '',
         number: '',
         text: ""
      }
   )

   useEffect(() => {
      setIsLoading(true)
      api
         .get('verses/nvi/random')
         .then((response) => {
            setMensagemDiaria(response.data)
            setIsLoading(false)
         })
         .catch(erro => console.error("Requisição com erro "+erro))
   }, [])

   return (
      <S.Container>
         { isLoading ? 
            (<>
               <Loading type="spin" color="#000"/>
            </>)
            : 
            (<>
               <div>
                  <h2>Mensagem para reflexão</h2>
               </div>
               <h1>{mensagemDiaria.book.name} {mensagemDiaria.chapter}, {mensagemDiaria.number}</h1>
               <p>{mensagemDiaria.text}</p>
            </>)
         }
         
      </S.Container>      
   )
}

export default MensagemDiaria
