import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="www.linkedin.com/in/lovely-kumari-22a137263" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Lovely1506" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/lovely_butter.fly?igsh=cnpma3Z3eW8ya2hs" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
