import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
	const [characters, setCharacters] = useState([]); 

	useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response);	
      setCharacters(response.data.results);      
    })
    .catch(err => console.log(err))
    } , [])
     
    return (
          <div className="App">
            <h1 className="Header">React Wars</h1>           
              {characters.map(character => {
              return <div className= "characterData">
                <h2>{character.name}</h2>                
                  <p className= "height p">Height: {character.height}</p> 
                  <p className= "mass p">Mass: {character.mass}</p>                   
                  <p className= "hairColor p">Hair Color: {character.hair_color}</p>     
                  <p className= "skinColor p">Skin Color: {character.skin_color}</p>      
              </div>   
              })}
          </div>
    )      
}
export default App;

