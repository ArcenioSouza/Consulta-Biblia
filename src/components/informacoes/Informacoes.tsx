import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ILeitura } from "../../types/leitura";
import { ILivros } from "../../types/livros";
import { Loading } from "../loading/Loading";
import * as S from "./Styled";

interface Props {
   info: ILeitura,
   setUpdateApi: React.Dispatch<React.SetStateAction<boolean>>,
   updateApi: boolean
}

const Informacoes = ({info, setUpdateApi, updateApi}: Props) => {
   const [infoLivro, setInfoLivro] = useState<ILivros>()
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      api
         .get(`books/${info.book.abbrev.pt}`)
         .then(response => {
            setInfoLivro(response.data)
            setIsLoading(false)
         })
         .catch(erro => console.error('Problema na requisição '+erro))
   }, [updateApi])

   function handleMudarCapitulo(): void {
      const numeroCapitulo = (document.querySelector('#capitulo') as HTMLInputElement).value

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
         {isLoading ? (
            <div id="loading">
               <Loading type="spin" color="#000" />
            </div>
         ) : (
            <>
               <p>Livro: {infoLivro.name}</p>
               <p>{infoLivro.testament === "NT" ? "Novo Testamento" : "Antigo Testamento"}</p>
               <p>Grupo: {infoLivro.group}</p>
               <p>Capitulos: {infoLivro.chapters}</p>
               <p>Autor: {infoLivro.author}</p>
               <br />
               <label htmlFor="capitulo">Mudar Capitulo</label><br />
               <input type="number" name="inputCapitulo" id="capitulo" min="1" max={infoLivro.chapters}/>
               <button onClick={() => handleMudarCapitulo()}>Mudar</button>
            </>
         )}
      </S.Container>
   )
}

export default Informacoes
