import { api } from "../../services/api"

interface Props {
   id: string,
   name: string,
}

const ButtonLivro = ({id, name}: Props) => {

   function lerLivro(){
      api.get(`verses/nvi/${id}/1`)
      .then(response => {
         localStorage.setItem('clickLivro', JSON.stringify(response.data))
      })
      .catch(e => console.log(e.message))

      setTimeout(() => {
         window.location.href = "http://localhost:3000/leitura"
      }, 500)
   }
   
   return (
      <button id={id} onClick={lerLivro}>{name}</button>
   )
}

export default ButtonLivro
