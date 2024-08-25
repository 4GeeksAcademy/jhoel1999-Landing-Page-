import  React  from "react";
import Img from "../img/rigo-baby.jpg";

function Card() {
    return (
        <div className="card text-center mt-2">
            <img src={Img} className="card-img-top" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
}


export default Card