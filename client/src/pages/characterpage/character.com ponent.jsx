import Characters from "../../components/characters/characters.component";
import {useRouteMatch, useHistory} from "react-router-dom";
import {useEffect, useState} from 'react'; 

const CharacterPage = () => {
    let history = useHistory(); 
    let title = history.location.state.title;

    let [data, setData] = useState('');
    
    useEffect(() => {
        apiFilmRequest(); 
    }, [])

    const apiFilmRequest = () => {
        const url = '/api/films';
        console.log(url);
        fetch(url).then(response => response.json())
        .then(response => setData(response.results)) 
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Characters data={data} title={title}></Characters>
            Charcater Page 
        </div>
    )
}

export default CharacterPage;