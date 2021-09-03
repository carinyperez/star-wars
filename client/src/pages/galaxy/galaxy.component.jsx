import galaxy from '../../assets/galaxy.jpeg';
import stars from '../../assets/stars.jpeg';
import './galaxy.styles.scss'; 
import {useState, useEffect} from 'react';
import Character from '../../components/character/character/character.component.jsx'; 
import DropDown from '../../components/drop-down/drop-down.component';

const Galaxy = () => { 
    const [image, setImage] = useState(stars);
    const [text, setText]  = useState('');
    const switchImage = () => {
        setText('')
        setImage(galaxy);
    }
    useEffect(() => {
        setText('A long time ago, in a galaxy far, far away ...');
        setInterval(switchImage, 5000);
    }, [])
    return (
        <div className='galaxy'>
            <h1>{text}</h1>
            <img className='stars-image' src={image} alt='stars'></img>
            {
                !text && 
                <div className='select'> 
                    <DropDown class='drop-down'/>
                </div>
            }
        </div>
    )
}
export default Galaxy; 