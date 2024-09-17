import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="px-36 py-[38px]">
        <Link href="/" className="inline-flex">
          <Image src={logo} alt="logo" />
        </Link>
      </header>
      <hr />
    </>
  );
}
