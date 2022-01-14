
import { Link } from 'react-router-dom'
import * as S from './Styled.jsx'

const Header = () => {
   return (
      <S.Container>
         <h1>Biblia Sagrada</h1>
         <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li>Anotações</li>
            <li>Colabore</li>
         </ul>
         <button>Cadastre-se</button>
      </S.Container>
   )
}

export default Header
