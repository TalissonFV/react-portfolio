import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  handleScroll: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, handleScroll }) => {
  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
    >
      <div className="flex flex-col items-center p-4 space-y-4">
        <Link
          to="#"
          onClick={() => handleScroll('habilidades')}
          className="text-white hover:text-beige transition-colors"
        >
          Habilidades
        </Link>
        <Link
          to="#"
          onClick={() => handleScroll('projetos')}
          className="text-white hover:text-beige transition-colors"
        >
          Projetos
        </Link>
        <Link
          to="#"
          onClick={() => handleScroll('experiencia')}
          className="text-white hover:text-beige transition-colors"
        >
          Experiência
        </Link>
        <Link
          to="#"
          onClick={() => handleScroll('formacao')}
          className="text-white hover:text-beige transition-colors"
        >
          Formação
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
