import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-x-3 mt-6">
      <li>
        <FaFacebookF />
      </li>
      <li>
        <a
          href="https://www.instagram.com/sycodetech/"
          target="_blank"
          rel="noreferrer">
          <FaInstagram className="text-lg" />
        </a>
      </li>
      <li>
        <FaYoutube className="text-lg" />
      </li>
    </ul>
  );
};

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-gradient grid place-content-center">
        <link rel="icon" href="../icons/logo.ico" type="image/x-icon" />
        <Image
          alt="Logo-Sycode"
          src={"/icons/logo-light.svg"}
          width={210}
          height={270}
          className="Image"
        />
        <h2>Em Manutenção</h2>
      </main>
    </>
  );
}
