import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context} from  '../store/appContext';
import "../../styles/info.css";

export const Info = () => {
    const params = useParams()
    const {store, actions} = useContext(Context)
    const [detail, setDetail] = useState({})

    function searchDetail (nature) {
        
        if(nature == "characters"){
           console.log("Aqui entramos") 
            let result =  store.characters.find(item => item._uid == params.uid)
            setDetail(result)
        }else if(nature == "planets"){
            let result =  store.planets.find(item => item._uid == params.uid)
            setDetail(result)
        }else {
            let  result =  store.vehicles.find(item => item._uid == params.uid)
            setDetail(result)
        }
    }
useEffect(()=>{
    searchDetail(params.nature)
},[store.characters, store.planets, store.vehicles])


    return (
        <>
            {
                params.nature == "planets" ?   /// PLANETAS
                    <div className="container">



                        <div className="card mb-3 card-info" style={{ maxwidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://fastly.picsum.photos/id/100/800/600.jpg?hmac=upSsGynGKBAVtztsXDY-0kMq9YHC8KDApVB1QT9a99Q" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-center">
                                        <h1 className="card-title">{detail?.properties?.name}</h1>
                                        <p className="card-text">{detail?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row mt-4 info-row text-danger">
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Name</p>
                                    <spam>{detail?.properties?.name}</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Diameter</p>
                                    <spam>{detail?.properties?.diameter}</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Climate</p>
                                    <spam>{detail?.properties?.climate}</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Gravity</p>
                                    <spam>{detail?.properties?.gravity}</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Terrain</p>
                                    <spam>{detail?.properties?.terrain}</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Surface<br /> Water</p>
                                    <spam>{detail?.properties?.surface_water}</spam>
                                </div>

                            </div>

                        </div>

                    </div> :
                    params.nature == "characters" ?   /// PERSONAJES
                        <div className="container">



                            <div className="card mb-3 card-info" style={{ maxwidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://fastly.picsum.photos/id/100/800/600.jpg?hmac=upSsGynGKBAVtztsXDY-0kMq9YHC8KDApVB1QT9a99Q" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body text-center">
                                            <h1 className="card-title">{detail?.properties?.name}</h1>
                                            <p className="card-text">{detail?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row mt-4 info-row text-danger">
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Name</p>
                                        <spam>{detail?.properties?.name}</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Birth<br /> Year</p>
                                        <spam>{detail?.properties?.birth_year}</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Gender</p>
                                        <spam>{detail?.properties?.gender}</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Height</p>
                                        <spam>{detail?.properties?.height}</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Skin<br /> Color</p>
                                        <spam>{detail?.properties?.skin_color}</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Eye<br /> Color</p>
                                        <spam>{detail?.properties?.eye_color}</spam>
                                    </div>

                                </div>

                            </div>

                        </div> :
                        params.nature == "vehicles" ?    /// VEHICULOS
                            <div className="container">



                                <div className="card mb-3 card-info" style={{ maxwidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://fastly.picsum.photos/id/100/800/600.jpg?hmac=upSsGynGKBAVtztsXDY-0kMq9YHC8KDApVB1QT9a99Q" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center">
                                                <h1 className="card-title">{detail?.properties?.name}</h1>
                                                <p className="card-text">{detail?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row mt-4 info-row text-danger">
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Model</p>
                                            <spam>{detail?.properties?.model}</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Manufacturer</p>
                                            <spam>{detail?.properties?.manufacturer}</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Crew</p>
                                            <spam>{detail?.properties?.crew}</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Consumables</p>
                                            <spam>{detail?.properties?.consumables}</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Max Atmosphering<br /> Speed</p>
                                            <spam>{detail?.properties?.max_atmosphering_speed}</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Cost in<br /> Credits</p>
                                            <spam>{detail?.properties?.cost_in_credits}</spam>
                                        </div>

                                    </div>

                                </div>

                            </div> :
                            null
            }
        </>


    )
}