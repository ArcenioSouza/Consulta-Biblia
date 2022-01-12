import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   height: 30vh;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 2%;
   font-family: var(--fontText);
   border-bottom: 2px solid;

   .titulo{
      width: 20%;
      text-align: center;
   }

   .livros{
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      font-family: var(--fontSubtitle);

      button{
         margin: 6px;
         padding: 10px;
         border: 1px solid;
         border-radius: 10px;
      }

      button:hover{
         cursor: pointer;
      }
   }
`