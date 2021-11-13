import Link from "next/link";

const Button = (props) => {
  return (
    <Link href="#">
      <a className={props.className}>{props.label}</a>
    </Link>
  );
};

export default Button;
