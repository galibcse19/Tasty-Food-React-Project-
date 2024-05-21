import { NavLink } from "react-router-dom";
import Card from "./Card";

 

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mbtz02J/berger.jpg)'}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-white ">Taste Me - If You FEEL Batter.</h1>
                <p className="mb-5 text-white">Peaches are juicy and delicious fruits known for their sweet flavor and velvety skin.They are typically orange or pinkish in color and are enjoyed fresh, canned, or in various dishes like pies, cobblers, and salads.</p>
                <NavLink to={'/card'}><button  className="btn text-xl bg-emerald-950 text-white px-16">Order Now</button></NavLink>
                </div>
            </div>
        </div>
        <div className="bg-emerald-950">
            <Card></Card>
        </div>
        </div>
    );
};

export default Home;