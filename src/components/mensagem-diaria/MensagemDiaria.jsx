import { Loading } from '../loading/Loading';
import * as S from './Styled'

const MensagemDiaria = ({verso}) => {   

   return (
      <S.Container>         
         <div>
            <h2>Mensagem para reflexão</h2>
         </div>
         <h1>{verso.book.name} {verso.chapter}, {verso.number}</h1>
         <p>{verso.text}</p>         
      </S.Container>      
   )
}

export default MensagemDiaria
