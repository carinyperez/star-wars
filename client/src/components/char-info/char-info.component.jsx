import {useEffect, useState} from 'react'; 
import {useRouteMatch, useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';


// const hashingFunction = () => {
//     let character = match.params.chracterId; 
//     let charSplit = character.split(' '); 
//     console.log(charSplit)
// }

// hashingFunction();

 
// use title to find list of char based on url 
const CharInfo = ({chars}) => {
    let [list, setList] = useState('');
    let match = useRouteMatch(); 
    let character = match.params.chracterId; 
    const dataList = {
        'Luke Skywalker': 1, 
        'Obi-Wan Kenobi': 2, 
        'C-3PO': 2,
        'Darth Vader': 4, 
        'Leia Organa': 5, 
        'R5-D4': 8, 
        'R2-D2': 3
    }
    console.log(character); 
    const getChars = (chars) => {
        console.log(chars);
        const slicedData = chars.characters.slice(0,10);
        const apiCall = slicedData.find(el => 
        el === `https://swapi.dev/api/people/${dataList[character]}/`)
        fetch(apiCall).then(response => response.json()).then(response => setList(response))
        .catch(err => console.error(err))
    
    }

    useEffect(() => {
        chars && getChars(chars)
    }, [chars])

    return(
        <div>
        {
            list && 
            <div>
            <h1>Char Info</h1>
            <p>{`Name: ${list.name}`}</p>
            <p>{`Hair Color: ${list.hair_color}`}</p>
            <p>{`Hair Color: ${list.eye_color}`}</p>
            <p>{`Birth year: ${list.birth_year}`}</p>
        </div>
        }
        <Link to= '/galaxy'>Go back to character list</Link>
        </div>
    )
}

export default CharInfo;