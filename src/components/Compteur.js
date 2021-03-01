import {useState} from 'react';

function Compteur() {
  
  const [count, setCount] = useState(0); 

  return(
    <div>
      <p>THIS IS MY COMPTEUR :</p>
      <button onClick={() => setCount(count+1)}>click me</button>
      <p>{count}</p>
    </div>
  );
}

export default Compteur;