import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

 

const Main = () => {
    return (
        <div>
            <div className="lg:w-3/4 mx-auto text-white">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;