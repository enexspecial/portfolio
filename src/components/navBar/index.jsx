import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { navMenus } from "./config";


const NavBar = () =>{
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30}/>
                    </Link>
                    {/* Menu */}
                    <ul className="navbar__container__menu">
                        {
                            navMenus.map((item, key)=>{
                                <li className="navbar__container__menu__item">
                                    <Link>
                                        {item.label}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;