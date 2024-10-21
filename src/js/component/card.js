import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context} from  '../store/appContext';
import "../../styles/card.css"; 

export default function Card({ title, body, id, type, people }) {
	const { store, actions } = useContext(Context)

	function imageError(e){
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	}

	return (

		<div className="card me-3" style={{ minWidth: '24rem', marginBottom: '1rem' }}>

			<img onError={imageError} src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="StarWarslogo" />

			<div className="card-body">
				<h5 className="card-title">{title}</h5>

				<div className="card-text">{body}</div>

				
				<div className="d-flex justify-content-between">

						<Link to={`/${type}/${id}`}>
						<button type="button" className="btn btn-outline-primary">Learn more!</button>
						</Link>

						<button onClick={() => actions.addFavorite(people)} type="button" className="btn btn-outline-warning">
							<i className="fa-regular fa-heart"></i>
						</button>
				</div>

				
			</div>
		</div> 
		
    )
};
