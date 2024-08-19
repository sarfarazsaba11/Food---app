import Image from "next/image";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li className=" text-black text-[20px] hover:text-accent  ">Home</li>
          <li className=" text-black text-[20px] hover:text-accent ">About</li>
          <li className=" text-black text-[20px] hover:text-accent ">Food</li>
          <li className=" text-black text-[20px] hover:text-accent ">Dish</li>
          <li className=" text-black text-[20px] hover:text-accent ">Contact</li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl hover:bg-black">
            SignUp
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;