import './character.styles.scss'; 
import {useEffect, useState} from 'react'; 

const Character = ({data}) => {
  const findCharacter = (data) => {
      let result = data.find(el => el.name === 'Luke Skywalker'); 
      return result 
  }
  const [char,setChar] = useState(); 
  useEffect(() => {
    data && setChar(findCharacter(data));
  })
  return (
    <div>
        {char && 
          <div> 
            <p>{`Name: ${char.name}`}</p>
            <p>{`Hair Color: ${char.hair_color}`}</p>
            <p>{`Hair Color: ${char.eye_color}`}</p>
            <p>{`Birth year: ${char.birth_year}`}</p>
          </div>
        }
    </div>
  )
}

export default Character; 
