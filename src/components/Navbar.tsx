import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuMobile from "./MenuMobile";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-6 bg-black relative z-50">
      <div className="container mx-auto flex justify-between font-[Epilogue] items-center">
        <h1 className="text-2xl font-bold text-white">TALLVILE</h1>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className="hidden md:flex space-x-4">
          <Link
            to="#"
            onClick={() => handleScroll("habilidades")}
            className="text-white hover:text-beige transition-colors"
          >
            Habilidades
          </Link>
          <Link
            to="#"
            onClick={() => handleScroll("projetos")}
            className="text-white hover:text-beige transition-colors"
          >
            Projetos
          </Link>
          <Link
            to="#"
            onClick={() => handleScroll("experiencia")}
            className="text-white hover:text-beige transition-colors"
          >
            Experiência
          </Link>
          <Link
            to="#"
            onClick={() => handleScroll("formacao")}
            className="text-white hover:text-beige transition-colors"
          >
            Formação
          </Link>
        </div>

        <MenuMobile isOpen={isOpen} handleScroll={handleScroll} />
      </div>
    </nav>
  );
};

export default Navbar;
