import './films.styles.scss'; 
import {useRouteMatch} from "react-router-dom";
import {useEffect, useState} from 'react'; 
import Characters from '../characters/characters.component';
import {Link} from 'react-router-dom'; 
import background from '../../assets/background.jpeg'

const Film = () => {
    let match = useRouteMatch(); 
    const charList = ['Luke Skywalker','Obi-Wan Kenobi','C-3PO',
    'Darth Vader', 'Leia Organa', 'R5-D4', 'R2-D2']; 
    let filmTitle = match.url.slice(7, match.url.length); 
    return (
            <div className='film-comp'>
            <img src={background} alt='star-wars image'></img>
            <div className='char-list'> 
                    <h1>{filmTitle}</h1>
                    <p>Character List</p>
                    <div className='links'> 
                    {
                        charList.map(el => 
                        <Link  to={
                            {pathname:`/character/${el}`, state: {title:`${filmTitle}`}} 
                        }>{el}</Link>)
                    }
                    </div>
            </div>
        </div>            
    )
}

export default Film; 