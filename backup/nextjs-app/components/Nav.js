import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import SearchLogo from "../public/icons/search.svg";
import ChevronDown from "../public/icons/chevron down.svg";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <img src="/ergofund.svg" className={navStyles.logo} />
      <ul>
        <li>
          <Link href="/">Explore</Link>
          <ChevronDown className="icon" />
        </li>
        <div
          style={{
            width: "2px",
            margin: "0 10px",
            height: "25px",
            backgroundColor: "#000",
          }}
        />
        <li>
          <SearchLogo className="icon" />
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Project"
          />
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#">Start a project</Link>
        </li>
        <div
          style={{
            width: "2px",
            margin: "0 10px",
            height: "25px",
            backgroundColor: "#000",
          }}
        />
        <li>
          <Button className={navStyles.button} label="Sign in" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
