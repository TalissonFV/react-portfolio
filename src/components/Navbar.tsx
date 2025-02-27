import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="p-6 bg-black">
      <div className="container mx-auto flex justify-between font-[Epilogue] items-center">
        <h1 className="text-2xl font-bold text-white">TALLVILE</h1>
        <div className="space-x-4">
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
          <Link
            to="#"
            onClick={() => handleScroll("habilidades")}
            className="text-white hover:text-beige transition-colors"
          >
            Habilidades
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
