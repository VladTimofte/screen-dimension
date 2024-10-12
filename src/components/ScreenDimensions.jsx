import React, { useEffect, useState } from "react";

function ScreenDimenions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth, // Valoare initiala cand se randeaza (incarca) componenta
    height: window.innerHeight, // Valoare initiala cand se randeaza (incarca) componenta
  });

  const [anyValue, setAnyValue] = useState('')

  const handleResize = () => {
    // Functie pentru a seta variabila dimensions in functie de dimensiunile ecranului (browser-ului)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    console.log('Valoarea a fost schimbata: ', anyValue)
  
  }, [anyValue])
  

  useEffect(() => {
    // PRIMA PARTE
    // Se executa initial la randarea componentei in DOM (adica in browser)
    window.addEventListener('resize', handleResize) 
  
    return () => {
        // A DOUA PARTE
        // Se executa imediat dupa ce componenta nostra (ScreenDimenions), a fost scoasa din DOM (browser)
      window.removeEventListener('resize', handleResize) 
    }
    // A TREIA PARTE
  }, []) //In interiorul parantezelor rotunde, pot exista deendinte. Adica variabile de care useEffect-ul depinde. 
  // Prin urmare, daca in useEffect-ul de mai sus am avea o variabila (ex. un useState), 
  // atunci oridecate ori acea variabila si-ar schimba steate-ul (adica valoarea), s-ar executa si codul din prima partea a useEffect-ului
  

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>Dimensiunile ecranului</h1>
        <p>
            Latime: {dimensions.width}px
            <br/>
            Inaltime: {dimensions.height}px
        </p>
        <button onClick={() => setAnyValue(`Hello, world: ${Math.floor(Math.random() * 100)}`)}>Click Here</button>
    </div>
  )
}

export default ScreenDimenions;
