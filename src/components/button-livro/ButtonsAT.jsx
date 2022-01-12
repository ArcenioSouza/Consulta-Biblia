import ButtonLivro from "./ButtonLivro";

const ButtonsAT = ({livros}) => {
   
   return (
      <>
         {!!livros &&
            livros.map((livro, index) => {
               if(livro.testament === 'VT'){
                  return <ButtonLivro 
                  key={index}
                  id={livro.abbrev.pt} 
                  name={livro.name} />;
               }               
            })}
      </>
   );
};

export default ButtonsAT;
