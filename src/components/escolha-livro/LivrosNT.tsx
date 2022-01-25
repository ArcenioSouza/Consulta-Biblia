import { ILivros } from "../../types/livros";
import ButtonLivro from "../button-livro/ButtonLivro";
import * as S from "./Styled";

interface Props {
   livros: ILivros[]
}

const LivrosNT = ({livros}: Props) => {

   return (
      <S.Container>         
         <div className="titulo">
            <h2>Livros para Leitura</h2>
            <h3>Novo Testamento</h3>
         </div>
         <div className="livros">
            { livros.map((livro: any, index) => {
               if(livro.testament === "NT"){
                  return <ButtonLivro key={index} id={livro.abbrev.pt} name={livro.name}/>
               }
            })}
         </div>           
      </S.Container>
   );
};

export default LivrosNT;
