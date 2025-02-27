import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const resumePath = "/Curriculo.pdf";
    const link = document.createElement("a");

    link.href = resumePath;
    link.download = "curriculo_talisson_vilela.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="bg-light py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2 flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHy6CMRaV7ZYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724957510891?e=1746057600&v=beta&t=IXLCyQQMZt8RhijIvgrxVg1UzRMKxxhfXYXyrMaNOV4"
            alt="Talisson Ferreira Vilela"
            className="mx-auto rounded-full max-w-[350px] max-h-[350px] shadow-lg"
          />
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/talissonfv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-amber-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/talissonfv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-amber-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/tallvile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-amber-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="md:order-1 text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-dark">
            Talisson Ferreira Vilela
          </h1>
          <h2 className="text-3xl mb-6 text-secondary">
            Desenvolvedor Web FullStack
          </h2>
          <p className="text-lg text-dark max-w-2xl">
            Sou um desenvolvedor web com 5 anos de experiência em
            JavaScript/TypeScript, especializado em Vue.js e Node.js e tenho
            conhecimento em React. Possuo experiência pessoal com frameworks
            fullstacks como Next e Nuxt. Sou comprometido com soluções
            escaláveis, performáticas e metodologias ágeis. Participei do time
            vencedor do Neo4j Graphies 2021 com a Qualicorp na categoria
            Excellence - Digital Transformation.
          </p>
          <div className="flex mt-4 items-center">
            <a href="mailto:talissonfv@gmail.com">
              <button className="bg-amber-500 text-black px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 mr-4">
                Contato
              </button>
            </a>
            <button
              onClick={handleDownloadResume}
              className="bg-black text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 mr-4"
            >
              Currículo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
