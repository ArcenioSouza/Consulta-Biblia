import { api } from "../../../services/api";
import ButtonLivro from "../ButtonLivro";
import { Link } from "react-router-dom";
import { ILivros } from "../../../types/livros";
import { IEvento } from "../../../types/evento";

interface Props {
   livros: ILivros[]
}

const ButtonsNT = ({livros}: Props) => {

   const handleOnClick = (event: IEvento) => {
      const abbrev = event.target.id
      console.log(abbrev)

      api
         .get(`verses/nvi/${abbrev}/1`)
         .then(response => localStorage.setItem('clickLivro', JSON.stringify(response.data)))
         .catch(erro => console.error('Problema na requisição '+erro))
   }
   
   return (
      <>
         {!!livros &&
            livros.map((livro, index) => {
               if(livro.testament === 'NT'){
                  return <Link to="/leitura" key={index}>
                  <ButtonLivro 
                  id={livro.abbrev.pt} 
                  name={livro.name} 
                  onclick={() => handleOnClick}
               />
               </Link>;
               }               
            })}
      </>
   );
};

export default ButtonsNT;
