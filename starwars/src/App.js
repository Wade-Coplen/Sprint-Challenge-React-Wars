import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
	const [characters, setCharacters] = useState([]); 

	useEffect( () => {
    axios.get ('https://swapi.co/api/people/')
    .then(response => {
      console.log(response);	
      setCharacters(response.data);
    })
    .catch(err => console.log(err))
    } , [])



  return (
    
      <div className="App"> 
      
        <h1 className="Header">React Wars</h1>
        {chharacters.map(character => {   
          return 
            <div>{character.results.name} </div>
            
            <h2>{character.results.height} </h2>      
            <h3>{character.results.mass}</h3>
            <h3>{character.results.hair_color}</h3>
            <h3>{character.results.skin_color}</h3>
          
        })}           
      
            
    </div>  
      
    
  );
}

export default App;

