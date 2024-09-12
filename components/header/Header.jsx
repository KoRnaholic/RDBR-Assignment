import Image from "next/image";
import logo from "../../public/icons/logo.svg";

export default function Header() {
  return (
    <>
      <header className="px-40 py-10">
        <Image src={logo} />
      </header>
      <hr />
    </>
  );
}
