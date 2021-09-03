import Film from "../../components/films/films.component";
import {useRouteMatch} from "react-router-dom";
import {useEffect, useState} from 'react'; 

const FilmPage = () => {
    return(
        <div>
            <h1>Film Page</h1>
            <Film></Film>
        </div>
    )
}

export default FilmPage; 
