import galaxy from '../../assets/galaxy.jpeg';
import stars from '../../assets/stars.jpeg';
import './galaxy.styles.scss'; 
import {useState, useEffect} from 'react';
import Character from '../../components/character/character.component.jsx'

const Galaxy = () => {
    const [data, setData] = useState(); 
    const [image, setImage] = useState(stars);
    const [text, setText]  = useState(''); 

    const switchImage = () => {
        setText(''); 
        setImage(galaxy);
    }

    const apiRequest = () => {
      const url = '/api/characters';
      console.log(url);
      fetch(url).then(response => response.json())
      .then(response => setData(response.results)) 
      .catch(err => console.log(err))
    }

    useEffect(() => {
        setText('A long time ago, in a galaxy far, far away ...')
        setInterval(switchImage, 5000);
        setInterval(apiRequest, 5000);
    }, [])
    return (
        <div className='galaxy'>
            <h1>{text}</h1>
            <img className='stars-image' src={image} alt='stars'></img>
            <Character data={data}/>
        </div>
    )
}
export default Galaxy; 