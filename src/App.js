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
  background-image: linear-gradient(-90deg, #b3643a, rgba(255,0,0,0) );
  
`;
const headTwo = {
  fontSize: "30px",
  
};
const headOne = {
  fontSize: "50px",
  
};

const ReactWars = styled.div`
  font-size: 2rem;
`;
const ParagraphStyle = styled.p`
font-weight: bold;
`;
// const headingTwoDiv = {
// border: "1px solid black",
// padding: 0 
// };
//--------------------------------------------------------
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
                    <ParagraphStyle  className= "height p">Height: {character.height}</ParagraphStyle > 
                    <ParagraphStyle className= "mass p">Mass: 
                    {character.mass}</ParagraphStyle>                   
                    <ParagraphStyle className= "hairColor p">Hair Color: {character.hair_color}</ParagraphStyle>     
                    <ParagraphStyle className= "skinColor p">Skin Color: {character.skin_color}</ParagraphStyle>      
                  </Card>   
                })}
            </div>
          )      
}
export default App;

