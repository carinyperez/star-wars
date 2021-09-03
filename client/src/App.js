import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'; 
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'; 
import Galaxy from './pages/galaxy/galaxy.component';
import FilmPage from './pages/filmpage/film.component'; 
import CharacterPage from './pages/characterpage/character.com ponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
         <Route exact path ='/' component={Homepage}></Route>
         <Route exact path ='/galaxy' component={Galaxy}></Route>
         <Route exact path="/films">
            <FilmPage />
         </Route>
          <Route path="/films/:topicId">
            <FilmPage />
          </Route>
          <Route exact path="/charcater">
            <CharacterPage />
         </Route>
          <Route path="/character/:chracterId">
            <CharacterPage />
          </Route>
       </Switch>
      </header>
    </div>
  );
}
export default App;


//https://www.cgtrader.com/items/2872975/download-page
// https://products.aspose.app/3d/conversion/obj-to-glb