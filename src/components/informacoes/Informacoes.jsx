import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./Styled";

const Informacoes = ({info, setUpdateApi, updateApi}) => {
   const [infoLivro, setInfoLivro] = useState({})

   useEffect(() => {
      api
         .get(`books/${info.book.abbrev.pt}`)
         .then(response => setInfoLivro(response.data))
         .catch(erro => console.error('Problema na requisição '+erro))
   }, [updateApi])

   const handleMudarCapitulo = () => {
      const numeroCapitulo = document.querySelector('#capitulo').value

      api
         .get(`verses/nvi/${infoLivro.abbrev.pt}/${numeroCapitulo}`)
         .then(response => {
            localStorage.setItem('clickLivro', JSON.stringify(response.data))
            setUpdateApi(!updateApi)
         })
         .catch(erro => console.error('Problema na requisição '+erro))         
   }


   return (
      <S.Container>
         <p>Livro: {infoLivro.name}</p>
         <p>{infoLivro.testament == "NT" ? "Novo Testamento" : "Antigo Testamento"}</p>
         <p>Grupo: {infoLivro.group}</p>
         <p>Capitulos: {infoLivro.chapters}</p>
         <p>Autor: {infoLivro.author}</p>
         <br />
         <label htmlFor="capitulo">Mudar Capitulo</label><br />
         <input type="number" name="inputCapitulo" id="capitulo" min="1" max={infoLivro.chapters}/>
         <button onClick={() => handleMudarCapitulo()}>Mudar</button>
      </S.Container>
   )
}

export default Informacoes
