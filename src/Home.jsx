import React from 'react'

import './style.css'

// Create the function
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }
  
  
function Home() {
    return (
        <>
            <h1>Lógico que eu aceito!</h1>
            <h2>Caso queira remover o convite, clique botão abaixo:</h2>
            <button id='runaway-btn'>Clique aqui 👀</button>
            {AddLibrary(
                './function.js')
            }
        </>
    )
}

export default Home