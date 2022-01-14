import { Link } from "react-router-dom";
import { api } from "../../services/api";
import ButtonLivro from "./ButtonLivro";

const ButtonsAT = ({livros}) => {

   const handleOnClick = (event) => {
      const abbrev = event.target.id

      api
         .get(`verses/nvi/${abbrev}/1`)
         .then(response => localStorage.setItem('clickLivro', JSON.stringify(response.data)))
         .catch(erro => console.error('Problema na requisição '+erro))
   }
   
   return (
      <>
         {!!livros &&
            livros.map((livro, index) => {
               if(livro.testament === 'VT'){
                  return <Link to="/leitura" key={index}>
                     <ButtonLivro 
                     id={livro.abbrev.pt} 
                     name={livro.name} 
                     onclick={handleOnClick}
                  />
                  </Link>;
               }               
            })}
      </>
   );
};

export default ButtonsAT;
