import React, { useState }  from "react";


function Counter() {
    const [counter, setCounter] = useState(0);


    const incrementado = () => {
        console.log('Incrementar')

        setCounter(counter + 1 );
     
    
    }

  const decrementado = () => {
    setCounter(counter - 1 );

    console.log('Decrementar')


  }

    return (

        <div>

         <button onClick={incrementado}>Incrementar</button>
         <button onClick={decrementado}>Descrementar</button>
         <h3>Valor do Contador:{counter}</h3>

        </div>


    );

}

export default Counter;