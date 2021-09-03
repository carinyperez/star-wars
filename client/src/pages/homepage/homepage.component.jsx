import './homepage.styles.scss'; 
import background from '../../assets/background.jpeg'; 

const Homepage = (props) => {
    const {history} = props; 
    const handleClick = ()  => { 
        history.push('/galaxy');  
    }
    return (
        <div className='homepage'>
            <img src={background} alt='star-wars image'></img>
            <div className='footer'>
                <h1>STAR WARS</h1> 
                <p>AN INTERACTIVE GALACTIC EXPERIENCE</p>
                <button onClick={() => handleClick()} >EXPLORE THE GALAXY</button>
            </div>
        </div>
    )
}

export default Homepage; 