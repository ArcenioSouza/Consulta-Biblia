interface Props {
   id: string,
   name: string,
   onclick: () => void
}

const ButtonLivro = ({id, name, onclick}: Props) => {
   return (
      <button id={id} onClick={onclick}>{name}</button>
   )
}

export default ButtonLivro
