import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="my-2 md:my-10  flex flex-col justify-center items-center mx-auto  space-y-4">
      <div className="flex flex-row space-x-4 ">
        <Link href="#">
          <AiFillFacebook size={40} />
        </Link>
        <Link href="#">
          <AiFillInstagram size={40} />
        </Link>
        <Link href="#">
          <AiFillTwitterSquare size={40} />
        </Link>
        <Link href="#">
          <AiFillYoutube size={40} />
        </Link>
      </div>
      <div className="flex flex-row justify-evenly text-center space-x-4">
        <Link href="#">Conditions of Use</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Press Room</Link>
      </div>
      <p className="text-lg font-semibold ">
        &copy;2023 MovieBox by Riches Metelewawon
      </p>
    </div>
  );
};

export default Footer;
