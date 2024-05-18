import Image from 'next/image';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <FontAwesomeIcon
            icon={faBars}
            color="black"
            size="xl"
            className="navigationDrawer"
          />
          <Image src="/Logo.png" alt="Logo" width={25} height={25} />
        </div>
        <div className="brand-name">
          <h1>LOGO</h1>
        </div>
        <div className="search-options">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faHeart}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            color="black"
            className="option-icons"
          />
          <FontAwesomeIcon
            icon={faUser}
            color="black"
            className="option-icons hide"
          />
          <select
            name="language-drop-down"
            id="language-drop-down"
            className="hide"
          >
            <option value="ENG">ENG</option>
            <option value="HIN">HIN</option>
          </select>
        </div>
      </div>
      <div className="lowerNavbar">
        <Link href="" className="navLinks">
          SHOP
        </Link>
        <Link href="" className="navLinks">
          SKILLS
        </Link>
        <Link href="" className="navLinks">
          STORIES
        </Link>
        <Link href="" className="navLinks">
          ABOUT
        </Link>
        <Link href="" className="navLinks">
          CONTACT US
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
