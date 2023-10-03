import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-x-3 mt-6">
      <li>
        <FaFacebookF />
      </li>
      <li>
        <a href="https://www.instagram.com/sycodetech/" target="_blank">
          <FaInstagram className="text-lg" />
        </a>
      </li>
      <li>
        <FaYoutube className="text-lg" />
      </li>
    </ul>
  );
};
