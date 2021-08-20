import logo from './logo.svg';
import './App.css';
import obi from './assets/r5d4.glb'
import React, {useEffect, useState} from 'react'; 
import Character from './components/character/character.component'
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'; 
import Galaxy from './pages/galaxy/galaxy.component'; 


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
    // apiRequest(); 
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
         <Route exact path ='/' component={Homepage}></Route>
         <Route exact path ='/galaxy' component={Galaxy}></Route>
       </Switch>
        {/* <model-viewer src={obi} 
        alt="A 3D model of a robot" 
        auto-rotate="" camera-controls="" 
        background-color="#455A64"></model-viewer> */}
        {/* <model-viewer src={soldier} alt="A 3D model of a robot" auto-rotate="" camera-controls="" background-color="#455A64"></model-viewer> */}
        {/* <Character data={data}/> */}
      </header>
    </div>
  );
}
export default App;


//https://www.cgtrader.com/items/2872975/download-page
// https://products.aspose.app/3d/conversion/obj-to-glb