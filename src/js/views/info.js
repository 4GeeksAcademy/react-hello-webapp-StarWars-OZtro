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
            let result =  store.characters.find(item => item._id == params.id)
            setDetail(result)
        }else if(nature == "planets"){
            let result =  store.planets.find(item => item._id == params.id)
            setDetail(result)
        }else {
            let  result =  store.vehicles.find(item => item._id == params.id)
            setDetail(result)
        }
    }
useEffect(()=>{
    searchDetail(params.nature)
},[store.characters, store.planets, store.vehicles])
    return (
        <>
            {
                params.nature == "planets" ?
                    <div className="container">



                        <div className="card mb-3 card-info" style={{ maxwidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://fastly.picsum.photos/id/100/800/600.jpg?hmac=upSsGynGKBAVtztsXDY-0kMq9YHC8KDApVB1QT9a99Q" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-center">
                                        <h1 className="card-title">{detail?.properties?.name}</h1>
                                        <p className="card-text">It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy.....</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row mt-4 info-row text-danger">
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Name</p>
                                    <spam>informacion</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Birth<br /> Year</p>
                                    <spam>informacion</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Gender</p>
                                    <spam>informacion</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Height</p>
                                    <spam>informacion</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Skin<br /> Color</p>
                                    <spam>informacion</spam>
                                </div>
                                <div className="col-md-2 mt-4 text-center">
                                    <p>Eye<br /> Color</p>
                                    <spam>informacion</spam>
                                </div>

                            </div>

                        </div>

                    </div> :
                    params.nature == "characters" ?
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
                                        <spam>informacion</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Gender</p>
                                        <spam>informacion</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Height</p>
                                        <spam>informacion</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Skin<br /> Color</p>
                                        <spam>informacion</spam>
                                    </div>
                                    <div className="col-md-2 mt-4 text-center">
                                        <p>Eye<br /> Color</p>
                                        <spam>informacion</spam>
                                    </div>

                                </div>

                            </div>

                        </div> :
                        params.nature == "vehicles" ?
                            <div className="container">



                                <div className="card mb-3 card-info" style={{ maxwidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://fastly.picsum.photos/id/100/800/600.jpg?hmac=upSsGynGKBAVtztsXDY-0kMq9YHC8KDApVB1QT9a99Q" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center">
                                                <h1 className="card-title">{detail?.properties?.name}</h1>
                                                <p className="card-text">It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy.....</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row mt-4 info-row text-danger">
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Name</p>
                                            <spam>informacion</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Birth<br /> Year</p>
                                            <spam>informacion</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Gender</p>
                                            <spam>informacion</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Height</p>
                                            <spam>informacion</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Skin<br /> Color</p>
                                            <spam>informacion</spam>
                                        </div>
                                        <div className="col-md-2 mt-4 text-center">
                                            <p>Eye<br /> Color</p>
                                            <spam>informacion</spam>
                                        </div>

                                    </div>

                                </div>

                            </div> :
                            null
            }
        </>


    )
}