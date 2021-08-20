import './character.styles.scss'; 
import {useEffect, useState} from 'react'; 
import luke from '../../assets/luke.glb'; 
import c3po from '../../assets/c3po.glb'; 
import darthVader from '../../assets/darth-vader.glb'; 
import leia from '../../assets/leia.glb'; 
import obi from '../../assets/obi.glb'; 
import r2d2 from '../../assets/r2d2.glb';
import r5d4 from '../../assets/r2d2.glb';

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
          <div className='characters'> 
            <h1>Click on each character 
              <br/> to find out more about them </h1>
            <br/>
            <model-viewer src={luke} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#0000ffff"></model-viewer>
            <model-viewer src={c3po} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#455A64"></model-viewer>
            <model-viewer src={darthVader} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#455A64"></model-viewer>
            <model-viewer src={leia} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#455A64"></model-viewer>
            <model-viewer src={obi} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#455A64"></model-viewer>
            <model-viewer src={r2d2} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#455A64"></model-viewer>
            <model-viewer src={r5d4} 
            alt="A 3D model of star wars" 
            auto-rotate="" camera-controls="" 
            background-color="#455A64"></model-viewer>
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
