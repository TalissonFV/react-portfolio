import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-black">
      <div className="container mx-auto text-center text-white">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:talissonfv@gmail.com" className="hover:text-gray-300">
            Email
          </a>
          <a
            href="https://github.com/talissonfv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <span>Tel: +55 (13) 99687-7399</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} TallVile. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
