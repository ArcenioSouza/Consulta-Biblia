import { useEffect, useState } from "react";
import { Loading } from "../loading/Loading";
import { api, token } from "../../services/api";
import * as S from "./Styled";
import ButtonsAT from "../button-livro/ButtonsAT";

const LivrosAT = () => {
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
                  <h3>Antigo Testamento</h3>
               </div>
               <div className="livros">
                  <ButtonsAT livros={livros}/>
               </div>
            </>
         )}
      </S.Container>
   );
};

export default LivrosAT;
