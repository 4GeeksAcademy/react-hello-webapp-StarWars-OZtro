import React, {useContext} from "react";
import { Context} from  '../store/appContext';
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://toppng.com/uploads/preview/star-wars-logo-png-985-free-transparent-png-logos-ahold-star-wars-jedi-gels-fruit-flavored-snacks-6-11562891058yyocheksib.png" alt="Star Wars" width="70" height="70"  />
					</span>
				</Link>


				<div className="ml-auto">
					{/* <Link to="/demo"> */}
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites {store.favorites.length}
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{store.favorites.map((item) => {
									return (
										<li onClick={() => actions.deleteFav(item._id)}>{item.properties.name}</li>
									)
								})}
							</ul>
						</div>
					{/* </Link> */}
				</div>
			</div>

		</nav>
	);
};
