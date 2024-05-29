import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 

const FoodCard = ({food}) => {
     
    const {_id,foodName,quantity,supplier,photo,price}=food;
    return (
        <div>
            <div className="">
                <div className="card lg:w-80 bg-emerald-800 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={photo} alt="Shoes" className="rounded-xl w-56 h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Food Name: {foodName}</h2>
                        <p>Restaurant: {supplier}</p>
                        <p>Quantity:  {quantity}</p>
                        <p>Price: $ {price}</p>
                        <div className="card-actions">
                        <Link to={`/food/${_id}`}><button className="btn btn-outline text-white w-40 hover:bg-white">ORDER NOW</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    _id:PropTypes.string,
    foodName: PropTypes.string,
    quantity: PropTypes.string,
    supplier: PropTypes.string,
    food: PropTypes.object,
    photo:PropTypes.string,
    price:PropTypes.number
};

export default FoodCard;