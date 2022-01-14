import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   height: 85vh;
   display: flex;
   font-family: var(--fontText);
   padding: 1%;

   .leitura{
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-family: var(--fontSubtitle);
      margin-right: 1%;
   }

   .versos{
      width: 100%;
      height: 100%;
      background-color: #fff;
      overflow-y: scroll;
      border: 1px solid;
      text-align: justify;
      padding: 1%;
   }

   .buttons{
      position: absolute;
      bottom: 50px;
      left: 30%;
   }

   .buttons button{
      padding: 5px;
      margin-right: 15px;
   }

   .informacoesLivro{
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-family: var(--fontSubtitle);
   }

   .informacoes{
      width: 100%;
      height: 50%;
      padding: 1%;
      border: 1px solid;
      font-family: var(--fontText);
      font-weight: bold;
   }

   .informacoes input{
      width: 70px;
      padding: 5px;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
      font-family: var(--fontText);
   }

   .informacoes button{
      padding: 5px;
      font-size: 16px;
      margin-left: 5px;
   }

   h1{
      font-size: 45px;
      margin: 2%;
   }

   p{
      font-size: 20px;
      text-align: justify;
      font-family: var(--fontText);
      margin-bottom: 10px;
   }

   span{
      font-weight: bold;
   }

   #loading{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`