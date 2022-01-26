import Versos from "../versos/Versos";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { Loading } from "../loading/Loading";
import Informacoes from "../informacoes/Informacoes";
import { api } from "../../services/api";
import { ILeitura } from "../../types/leitura";

const TelaLeitura = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [leitura, setLeitura] = useState<ILeitura>();
   const [updateApi, setUpdateApi] = useState(false)

   useEffect(() => {
      setLeitura(JSON.parse(localStorage.getItem("clickLivro")));
      setIsLoading(false)
   }, [updateApi]);
   

   const handleProximoCapitulo = () => {
         const numeroCapitulo = leitura.chapter.number + 1

         api
            .get(`verses/nvi/${leitura.book.abbrev.pt}/${numeroCapitulo}`)
            .then(response => {
               localStorage.setItem('clickLivro', JSON.stringify(response.data))
               setUpdateApi(!updateApi)
            })
            .catch((erro) => {
               alert("Não exite capítulos posteriores a esse!!")
               console.error('Problema na requisição '+erro)               
            })               
   }

   const handleCapituloAnterior = () => {
      if(leitura.chapter.number > 1){
         const numeroCapitulo = leitura.chapter.number - 1

         api
         .get(`verses/nvi/${leitura.book.abbrev.pt}/${numeroCapitulo}`)
         .then(response => {
            localStorage.setItem('clickLivro', JSON.stringify(response.data))
            setUpdateApi(!updateApi)
         })
         .catch(erro => console.error('Problema na requisição '+erro)) 
      } else {
         alert("Não exite capítulos anteriores a esse!!")
      }
              
   }

   return (
      <S.Container>
         {isLoading ? (
            <div id="loading">
               <Loading type="spin" color="#000" />
            </div>
         ) : (
            <>
               <div className="leitura">
                  <h2>Livro: {leitura.book.name}</h2>
                  <div className="versos">
                     <h3>Capítulo: {leitura.chapter.number}</h3><br />
                     <Versos versos={leitura.verses} />
                     <div className="buttons">
                        <button onClick={() => handleCapituloAnterior()}>Capitulo Anterior</button>
                        <button onClick={() => handleProximoCapitulo()}>Próximo capitulo</button>
                     </div>                     
                  </div>
               </div>

               <div className="informacoesLivro">
                  <h2>Informações</h2>
                  <div className="informacoes">
                     <Informacoes info={leitura} setUpdateApi={setUpdateApi} updateApi={updateApi}/>
                  </div>
               </div>
            </>
         )}
      </S.Container>
   );
};

export default TelaLeitura;
