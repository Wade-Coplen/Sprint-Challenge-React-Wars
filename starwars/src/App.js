import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
const Card =  styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 1rem;
  margin-top: 50px;
  text-align: center;
  padding: 0px 75px;
  margin-right: 34px;
  box-shadow: 3px 3px 3px 2px black;
 
`;
const headTwo = {
  fontSize: "30px",
  
};
const headOne = {
  fontSize: "50px",
  
};

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
              <h1 style= {headOne} className="Header">React Wars</h1>           
                {characters.map(character => {
                return <Card className= "characterData">
                  <h2 style={headTwo}>{character.name}</h2>               
                    <p className= "height p">Height: {character.height}</p> 
                    <p className= "mass p">Mass: 
                    {character.mass}</p>                   
                    <p className= "hairColor p">Hair Color: {character.hair_color}</p>     
                    <p className= "skinColor p">Skin Color: {character.skin_color}</p>      
                  </Card>   
                })}
            </div>
          )      
}
export default App;

