import LivrosAT from '../../components/escolha-livro/LivrosAT';
import LivrosNT from '../../components/escolha-livro/LivrosNT';
import Header from '../../components/header/Header';
import MensagemDiaria from '../../components/mensagem-diaria/MensagemDiaria';

const Home = () => {
   return (
      <>
         <Header/>
         <MensagemDiaria/>
         <LivrosAT/>
         <LivrosNT/>
      </>
   )
}

export default Home
