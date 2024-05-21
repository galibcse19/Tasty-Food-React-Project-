 

const Card = () => {
    return (
        <div className="pb-10 bg-emerald-950">
            <div className="text-3xl text-center py-10">
            Food delivery from Jashore’s <br /> best restaurants.
            </div>
            <div className="grid lg:grid-cols-3 gap-4 lg:mx-10">
                <div className="">
                <div className="card lg:w-80 bg-emerald-800 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/mbtz02J/berger.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Food Name: HOT DOG</h2>
                        <p>Restaurant: Cow Khor restaurant</p>
                        <p>Quantity: half-platter</p>
                        <p>Price: $ 120.00</p>
                        <div className="card-actions">
                        <button className="btn btn-outline text-white w-40">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="">
                <div className="card lg:w-80 bg-emerald-800 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/mbtz02J/berger.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Food Name: HOT DOG</h2>
                        <p>Restaurant: Cow Khor restaurant</p>
                        <p>Quantity: half-platter</p>
                        <p>Price: $ 120.00</p>
                        <div className="card-actions">
                         <button className="btn btn-outline text-white w-40">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="">
                <div className="card lg:w-80 bg-emerald-800 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/mbtz02J/berger.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Food Name: HOT DOG</h2>
                        <p>Restaurant: Cow Khor restaurant</p>
                        <p>Quantity: half-platter</p>
                        <p>Price: $ 120.00</p>
                        <div className="card-actions">
                         <button className="btn btn-outline text-white w-40">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;