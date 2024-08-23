import { socialLinks } from "@/lib/constant";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((link, i) => (
        <Link key={i} href={link.path} className={iconStyles}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
