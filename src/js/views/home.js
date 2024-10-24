import React, { useContext, useEffect, useState } from "react";
import { Context} from  '../store/appContext';
import  Card from "../component/card";
import "../../styles/home.css";



export const Home = () => {

const { store, actions } = useContext(Context)

	return (
		<>
			<div className="container">

				<h1 className="mb-5 text-danger">Characters</h1>
				<div className="d-flex carrouselChar">

				{store.characters.map(character => (
                        <Card  
                            title={character.properties.name}
							body={
								<div>
									<p>Gender: {character.properties.gender}</p>
									<p>Hair color: {character.properties.hair_color}</p>
									<p>Eye color: {character.properties.eye_color}</p>
								</div>
							}
                            id={character.uid}
                            type={"characters"}
                            key={character.uid}
							people={character}
                        />
                    ))}
					
					

				</div>


				<h1 className="my-5 text-danger">Planets</h1>
				<div className="d-flex carrouselPla">

				 {store.planets.map(planet => <Card
						title={planet.properties.name}
						body={
							<div>
								<p>Population: {planet.properties.population}</p>
								<p>Terrain: {planet.properties.terrain}</p>
							</div>
						}
						id={planet.uid}
						type={"planets"}
						key={planet.uid}
						people={planet}
					/>)}
					

				</div>


				<h1 className="my-5 text-danger">Vehicles</h1>
				<div className="d-flex carrouselVeh">

				 {store.vehicles.map(vehicle => <Card
						title={vehicle.properties.name}
						body={
							<div>
								<p>Cargo capacity: {vehicle.properties.cargo_capacity}</p>
								<p>Passengers: {vehicle.properties.passengers}</p>
							</div>
						}
						id={vehicle.uid}
						type={"vehicles"}
						key={vehicle.uid}
						people={vehicle}
					/>)}

				</div>




			</div>
		</>
	)
}