import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   height: 30vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 2%;
   font-family: var(--fontText);
   border-bottom: 2px solid;

   div{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      font-family: var(--fontSubtitle);
   }

   h1{
      font-size: 45px;
      margin: 2%;
   }

   p{
      font-size: 25px;
      text-align: center;
   }
`