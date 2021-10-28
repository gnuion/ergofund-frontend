import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <Image
          src="/ergofund.svg"
          alt="An SVG of ergofund"
          height={55}
          width={180}
        />

        <li>
          <Link href="/">Explore</Link>
        </li>
        <li>
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
        <li>
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
