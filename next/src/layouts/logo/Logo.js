import LogoDark from "../../../public/img/icon-deal.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={LogoDark} alt="logo" /> <h4>Studio-Mu</h4>
      </a>
    </Link>
  );
};

export default Logo;
