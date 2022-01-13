import ButtonLivro from "./ButtonLivro";

const ButtonsNT = ({livros}) => {

   const handleOnClick = (event) => {
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
                  return <ButtonLivro 
                  key={index}
                  id={livro.abbrev.pt} 
                  name={livro.name} 
                  onclick={handleOnClick}
                  />;
               }               
            })}
      </>
   );
};

export default ButtonsNT;
