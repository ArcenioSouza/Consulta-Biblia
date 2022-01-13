import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';

const Leitura = () => {

   const [leitura, setLeitura] = useState()

   useEffect(() => {
      setLeitura(
         JSON.parse(localStorage.getItem('clickLivro'))
      )
      console.log(leitura)
   }, [])

   return (
      <>
         <Header/>
      </>
   )
}

export default Leitura
