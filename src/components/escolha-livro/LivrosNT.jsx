import { useEffect, useState } from "react";
import { Loading } from "../loading/Loading";
import { api } from "../../services/api";
import * as S from "./Styled";
import ButtonsNT from "../button-livro/ButtonsNT";

const LivrosNT = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [livros, setLivros] = useState([]);

   useEffect(() => {
      setIsLoading(true);
      api.get("books")
         .then((response) => {
            setLivros(response.data);
            setIsLoading(false);
         })
         .catch((erro) =>
            console.error("Problema com a requisição " + erro.message)
         );
   }, []);

   return (
      <S.Container>
         {isLoading ? (
            <>
               <Loading type="spin" color="#000" />
            </>
         ) : (
            <>
               <div className="titulo">
                  <h2>Livros para Leitura</h2>
                  <h3>Novo Testamento</h3>
               </div>
               <div className="livros">
                  <ButtonsNT livros={livros}/>
               </div>
            </>
         )}
      </S.Container>
   );
};

export default LivrosNT;
