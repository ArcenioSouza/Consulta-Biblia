const ButtonLivro = ({id, name, onclick}) => {
   return (
      <button id={id} onClick={onclick}>{name}</button>
   )
}

export default ButtonLivro
