import logo from './logo.svg';
import './App.css';
import soldier from './assets/soldier.glb'
import obi from './assets/r2d2.glb'
import React, {useEffect, useState} from 'react'; 
import Character from './components/character/character.component'

function App() {
  const [data, setData] = useState(); 
  const apiRequest = () => {
    const url = '/api/characters';
    console.log(url);
    fetch(url).then(response => response.json())
    .then(response => setData(response.results)) 
    .catch(err => console.log(err))
  }
  useEffect(() =>  {
    apiRequest(); 
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars</h1>
        <model-viewer src={obi} 
        alt="A 3D model of a robot" 
        auto-rotate="" camera-controls="" 
        background-color="#455A64"></model-viewer>
        {/* <model-viewer src={soldier} alt="A 3D model of a robot" auto-rotate="" camera-controls="" background-color="#455A64"></model-viewer> */}
        <Character data={data}/>
      </header>
    </div>
  );
}
export default App;


//https://www.cgtrader.com/items/2872975/download-page
// https://products.aspose.app/3d/conversion/obj-to-glb