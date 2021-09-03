import {Link} from 'react-router-dom'; 
import {useEffect, useState} from 'react'; 
import CharInfo from '../char-info/char-info.component';

const Characters = ({data, title}) => {
    let [chars, setChars] = useState('');

    useEffect(() => {
        data && apiRequestChars();
    })

    const findChars = (data, title) => {
        console.log(data); 
        return data.find(el => el.title === title); 
    }

    const apiRequestChars = () => {
        let value = findChars(data, title); 
        setChars(value); 
    }
    return (
        <div>
            <h1>Characaters</h1>
            <CharInfo chars={chars}/>
        </div>
    )
}

export default Characters; 

