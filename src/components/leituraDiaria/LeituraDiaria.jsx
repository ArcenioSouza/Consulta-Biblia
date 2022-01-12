import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import * as S from './Styled'

const LeituraDiaria = () => {

   const [versoDiario, setVersoDiario] = useState()

   useEffect(() => {
      api
         .get('verses/nvi/random')
         .then((response) => {
            console.log(response.data)
            setVersoDiario(response.data)
         })
         .catch(erro => console.error("Requisição com erro "+erro))
   }, [])

   console.log(versoDiario)

   return (
      <S.Container>
         <h1>{versoDiario.book.name} {versoDiario.chapter}, {versoDiario.number}</h1>
         <p>{versoDiario.text}</p>
      </S.Container>
   )
}

export default LeituraDiaria
