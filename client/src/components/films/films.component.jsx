import './films.styles.scss'; 
import {useRouteMatch} from "react-router-dom";
import {useEffect, useState} from 'react'; 
import Characters from '../characters/characters.component';
import CharacterPage from '../../pages/characterpage/character.com ponent'; 
import {Link} from 'react-router-dom'; 


const Film = () => {
    let match = useRouteMatch(); 

    const charList = ['Luke Skywalker','Obi-Wan Kenobi','C-3PO',
    'Darth Vader', 'Leia Organa', 'R5-D4', 'R2-D2']; 

    let filmTitle = match.url.slice(7, match.url.length); 

    return (
        <div> 
           <h1>Film</h1>
           {
                charList.map(el => <Link  to={
                    {pathname:`/character/${el}`, state: {title:`${filmTitle}`}} 
                }>{el}</Link>)
            }
        </div>
    )
}

export default Film; 