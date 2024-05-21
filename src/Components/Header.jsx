import { NavLink } from "react-router-dom";
 
const Header = () => {
    const links= 
    <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/card'}>Order Now</NavLink></li>
    <li><NavLink to={'/addFood'}>Add Food</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
    <li><NavLink to={'/signIN'}>Log In</NavLink></li>
    <li><NavLink to={'/signUp'}>Register</NavLink></li>
    </>
    return (
            <div className="navbar bg-emerald-950 py-4  ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">
                     {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tasty FOOD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end lg:mr-6">
                <NavLink to={'/card'}> <button className="btn btn-outline text-white">Order Now</button></NavLink>
            </div>
        </div>
    );
};

export default Header;