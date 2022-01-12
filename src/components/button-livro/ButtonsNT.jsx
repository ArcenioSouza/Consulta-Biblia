import ButtonLivro from "./ButtonLivro";

const ButtonsNT = ({livros}) => {
   
   return (
      <>
         {!!livros &&
            livros.map((livro, index) => {
               if(livro.testament === 'NT'){
                  return <ButtonLivro 
                  key={index}
                  id={livro.abbrev.pt} 
                  name={livro.name} />;
               }               
            })}
      </>
   );
};

export default ButtonsNT;
