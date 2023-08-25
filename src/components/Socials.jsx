import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
import { nanoid } from "nanoid";

export const socialData = [
  { id: nanoid(), links: "https://www.facebook.com/", name: <ImFacebook /> },
  { id: nanoid(), links: "https://twitter.com/", name: <ImTwitter /> },
  { id: nanoid(), links: "https://www.pinterest.com/", name: <ImPinterest /> },
  { id: nanoid(), links: "https://www.instagram.com/", name: <ImInstagram /> },
  { id: nanoid(), links: "https://www.youtube.com/", name: <ImYoutube /> },
];

const Socials = () => {
  return (
    <div className="hidden lg:flex ml-24">
      <ul className="flex gap-x-4">
        {socialData.map((items) => {
          return (
            <li key={items.id}>
              <a href={items.links} target="_blank">
                {items.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
