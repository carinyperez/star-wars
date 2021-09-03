import Film from "../../components/films/films.component";
import {useRouteMatch} from "react-router-dom";
import {useEffect, useState} from 'react'; 

const FilmPage = () => {
    return(
        <div>
            <Film></Film>
        </div>
    )
}

export default FilmPage; 
