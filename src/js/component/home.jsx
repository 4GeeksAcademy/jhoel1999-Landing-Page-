import React from "react";

//include images into your bundle
import Card from "./card";
import Jumbotron  from "./jumbotron";
import NavBar from "./navbar";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<div className="container-fluid">
				<Jumbotron/>
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
				</div>
			</div>
			<Footer/>
		</div>

	);
};

export default Home;
