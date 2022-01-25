interface Props {
   id: string,
   name: string,
}

const ButtonLivro = ({id, name}: Props) => {
   
   return (
      <button id={id}>{name}</button>
   )
}

export default ButtonLivro
