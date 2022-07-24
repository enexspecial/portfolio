import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { NavMenus } from "./config";

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick=()=>setClick(!click);
    

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          {/* Menu */}
          <ul className="navbar__container__menu">
            {
                NavMenus.map((item, key)=>(
                    <li className="navbar__container__menu__item" key={key} >
                        <Link to={item.to} className="navbar__container__menu__item__links">{item.label}</Link>
                    </li>
                ))
            }
          </ul>
          <div className="nav-icon" onClick={handleClick}>
                {
                    click ? <HiX size={30}/> : <FaBars size={30}/>
                }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
