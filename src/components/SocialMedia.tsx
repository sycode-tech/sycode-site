import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-x-3 mt-6">
      <li>
        <FaFacebookF />
      </li>
      <li>
        <FaInstagram className="text-lg" />
      </li>
      <li>
        <FaYoutube className="text-lg" />
      </li>
    </ul>
  );
};
