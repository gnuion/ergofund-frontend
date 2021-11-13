import Link from "next/link";
import Button from "./Button";
import heroStyles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.overlay}>
        <div>
          <div className={heroStyles.title}>
            Welcome to the revolution of funding
          </div>
          <div className={heroStyles.description}>
            Directly donate to your favorite projects
          </div>
        </div>

        <div className={heroStyles.links}>
          <Button className={heroStyles.button} label="Explore" />
          <span className={heroStyles.seperator}>or</span>
          <Link href="#">
            <a className={heroStyles.link}>start a project</a>
          </Link>
        </div>
      </div>
      <div>
        <p>Hero Image here</p>
      </div>
    </div>
  );
};

export default Hero;
