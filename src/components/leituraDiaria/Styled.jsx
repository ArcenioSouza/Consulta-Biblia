import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   height: 30vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 5%;
   font-family: var(--fontText);
   background-color: #d9d9d9;

   h1{
      font-size: 50px;
      margin-bottom: 2%;
   }

   p{
      font-size: 25px;
   }
`