import './drop-down.styles.scss'; 
import { useState, useEffect} from 'react';
import Character from '../character/character/character.component'; 

const DropDown = () =>  {
    const [data, setData] = useState('');
    const [char,setChar] = useState('');
    const [films, setFilms] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        setChar(event.target.value); 
    }
    const apiRequest = () => {
        const url = '/api/characters';
        console.log(url);
        fetch(url).then(response => response.json())
        .then(response => setData(response.results)) 
        .catch(err => console.log(err))
    }

    const findCharacter = (data, char) => {
        let result = data.find(el => el.name === char); 
        return result 
    }

    const apiRequestFilms = (char) => {
        let responseArr = [];
        let value = findCharacter(data, char)
            for(const el of value.films) {
                const url = `${el}`; 
                fetch(url).then(response => response.json()).then(response => responseArr.push(response))
                .catch(err => console.error(err))
              }
            setFilms(responseArr);
    }
    useEffect(() => {
        apiRequest();
        char && apiRequestFilms(char); 
    }, [char])

    return (
        <div className='drop-down'> 
            <h1>Select a character 
                <br/>
            to find out more</h1>
            <select onChange={handleChange}>
                <option value='Luke Skywalker'>Luke</option>
                <option value='Obi-Wan Kenobi'>Obi</option>
                <option value='C-3PO'>C3p0</option>
                <option value='Darth Vader'>Darth Vader</option>
                <option value='Leia Organa'>Leia</option>
                <option value='R5-D4'>R5d4</option>
                <option value='R2-D2'>R2d2</option>
            </select>
            <Character data={data} char={char} films={films}/>
        </div>
    )
}

export default DropDown; 