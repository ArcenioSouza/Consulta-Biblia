import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   height: 7vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 5%;
   border-bottom: 2px solid;

   h1{
      font-family: var(--fontTitle);
      font-size: 50px;
   }
   
   ul{
      display: flex;
      list-style: none;
      font-family: var(--fontText);
      font-size: 18px;
   }

   li{
      margin-right: 20px;
      text-transform: uppercase;
   }

   li:hover{
      text-decoration: underline;
      cursor: pointer;
   }

   button{
      font-family: var(--fontText);
      font-size: 16px;
      width: 150px;
      padding: 10px;
      border: 1px solid;
      border-radius: 8px;
   }
`