import { ILivros } from "../../types/livros";
import ButtonLivro from "../button-livro/ButtonLivro";
import * as S from "./Styled";

interface Props {
   livros: ILivros[]
}

const LivrosAT = ({livros}: Props) => {
   console.log(livros)
   return (
      <S.Container>         
         <div className="titulo">
            <h2>Livros para Leitura</h2>
            <h3>Antigo Testamento</h3>
         </div>
         <div className="livros">            
            { livros.map((livro: any) => {
               if(livro.testament === "VT"){
                  return <ButtonLivro id={livro.abbrev.pt} name={livro.name}/>
               }
            })}            
         </div>      
           
      </S.Container>
   );
};

export default LivrosAT;
