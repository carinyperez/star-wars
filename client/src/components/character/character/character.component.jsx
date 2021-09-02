import './character.styles.scss'; 
import {useEffect, useState} from 'react'; 
import e from 'cors';

const Character = ({data, char, films}) => {
  const [value, setValue] = useState(''); 
  const [newImage, setImage] = useState(''); 
  const [result, setResult] = useState(''); 


  const findCharacter = (data, char) => {
    let result = data.find(el => el.name === char); 
    return result 
  }
  const transformChar = (char) => {
    let newChar = char.toLowerCase().replace(/\s/g, '_').replace(/-/g, '_') 
    import(`../../../assets/${newChar}.glb`).then(image => setImage(image.default));
  } 
  useEffect(() => {
    data && setValue(findCharacter(data, char));
    char && transformChar(char)
  })

  return (
    <div>
        {char && value && 
          <div className='characters'> 
            <model-viewer src={newImage} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#0000ffff"
            ></model-viewer>
            <div className='info'> 
              <h2>Character Information</h2>
              <p>{`Name: ${value.name}`}</p>
              <p>{`Hair Color: ${value.hair_color}`}</p>
              <p>{`Hair Color: ${value.eye_color}`}</p>
              <p>{`Birth year: ${value.birth_year}`}</p>
              <h2>Films</h2>
              {
                  films && films.map(el =>  <p>{el.title}</p>)
              }
            </div>
          </div>
        }
    </div>
  )
}

export default Character; 
