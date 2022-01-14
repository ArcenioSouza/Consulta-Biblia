import LivrosAT from '../../components/escolha-livro/LivrosAT';
import LivrosNT from '../../components/escolha-livro/LivrosNT';
import MensagemDiaria from '../../components/mensagem-diaria/MensagemDiaria';

const Home = () => {

   return (
      <>
         <MensagemDiaria/>
         <LivrosAT/>
         <LivrosNT/>
      </>
   )
}

export default Home
