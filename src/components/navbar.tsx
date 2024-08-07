"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import NavbarToggleIcon from "@/assets/icons/navbar-toggle";
import { useState } from "react";

const navList = [
  {
    value: "HOME",
    link: "#home",
  },
  {
    value: "ABOUT",
    link: "#about",
  },
  {
    value: "SERVICES",
    link: "#services",
  },
  {
    value: "CONTACT",
    link: "#contact",
  },
];

export default function Navbar(): JSX.Element {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  return (
    <nav className="lg:py-8 py-4 lg:px-16 px-4 flex justify-between items-stretch fixed w-full bg-gradient-to-b from-black z-10">
      <div className="relative lg:h-24 h-12 lg:w-44 w-20">
        <Image
          className="z-10"
          src={Logo}
          alt="logo"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <ul className="md:flex hidden gap-8">
        {navList.map((item) => (
          <li
            className="text-2xl hover:underline underline-offset-8"
            key={item.link}
          >
            <a href={item.link}>{item.value}</a>
          </li>
        ))}
      </ul>

      <button className="lg:hidden inline" onClick={() => setIsListOpen(true)}>
        <NavbarToggleIcon />
      </button>

      {isListOpen ? (
        <ul className="fixed flex flex-col gap-8 bg-black h-screen w-full top-0 left-0 z-10 p-4">
          <div className=" flex justify-between w-full">
            <div className="relative lg:h-24 h-12 lg:w-44 w-20">
              <Image
                className="z-10"
                src={Logo}
                alt="logo"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <button className="font-mono text-3xl mr-2" onClick={() => setIsListOpen(false)}>x</button>
          </div>
          {navList.map((item) => (
            <li
              className="text-2xl hover:underline underline-offset-8"
              key={item.link}
            >
              <a href={item.link} onClick={() => setIsListOpen(false)}>{item.value}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
