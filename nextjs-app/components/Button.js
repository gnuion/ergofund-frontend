import Link from "next/link";
import buttonStyles from "../styles/Button.module.css";

const Button = () => {
  return (
    <Link href="#">
      <a class={buttonStyles.button}>Sign in</a>
    </Link>
  );
};

export default Button;
