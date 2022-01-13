import Verso from "./Verso"


const Versos = ({versos}) => {
   return (
      <>
         {!!versos &&
            versos.map((verso, index) => {
               return <Verso key={index} number={verso.number} text={verso.text}/>
            })
         }
      </>
   )
}

export default Versos
