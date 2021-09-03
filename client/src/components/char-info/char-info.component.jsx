import {useEffect, useState} from 'react'; 
import {useRouteMatch, useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';
import './char-info.styles.scss'; 
import image from '../../assets/background.jpeg';

const CharInfo = ({chars}) => {
    let [list, setList] = useState('');
    let match = useRouteMatch(); 
    let character = match.params.chracterId; 

    let baseUrl = 'https://swapi.dev/api/people';
    const dataList = {
        'Luke Skywalker': `${baseUrl}/1/`, 
        'Obi-Wan Kenobi': `${baseUrl}/10/`, 
        'C-3PO': `${baseUrl}/2/`,
        'Darth Vader': `${baseUrl}/4/`, 
        'Leia Organa': `${baseUrl}/5/`, 
        'R5-D4': `${baseUrl}/8/`, 
        'R2-D2': `${baseUrl}/3/`
    }
    const getChars = (chars) => {
        const slicedData = chars.characters.find(el => el == dataList[character]); 
        const apiCall = dataList[character]; 
        if(!slicedData) {
            return undefined
        } else {
            fetch(apiCall).then(response => response.json()).then(response => setList(response))
            .catch(err => console.error(err))
        }
    }

    useEffect(() => {
        chars && getChars(chars)
    }, [chars])

    return(
        <div className='char-info'>
            <img src={image} alt='Star-Wars image'></img> 
            {
                list &&
                <div className='char-links'>
                    <h1>Character Information</h1>
                    <p>{`Name: ${list.name}`}</p>
                    <p>{`Hair Color: ${list.hair_color}`}</p>
                    <p>{`Hair Color: ${list.eye_color}`}</p>
                    <p>{`Birth year: ${list.birth_year}`}</p>
                    <Link to= '/galaxy'>Go back to character list</Link>
                </div>
            }
        </div>
    )
}

export default CharInfo;