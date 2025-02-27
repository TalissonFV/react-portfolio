import { Link } from "react-router-dom";

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
  imagem?: string;
}

const Projetos = () => {
  const projetos: Projeto[] = [
    {
      titulo: "Portfolio Designer - Gabi",
      descricao:
        "Pagina de portfolio de um designer. UI/UX criado por Gabi Gomes. Links para o trabalho dele no final da página.",
      tecnologias: [
        "Vue.js",
        "SCSS",
        "Vue Router",
        "Vuetify",
        "Vite",
        "FontAwesome",
      ],
      link: "https://portfolio-gabi-vue-atux.vercel.app/",
      imagem: "https://i.postimg.cc/9fJynbVg/logo.png",
    },
    {
      titulo: "SaaSify",
      descricao:
        "Um exemplo de SaaS construido para demonstração de habilidades. Possui integração para cadastro e login utilizando conta Google",
      tecnologias: [
        "Nuxt.js",
        "TypeScript",
        "MongoDB",
        "Pinia",
        "Google Cloud",
        "Firebase",
      ],
      link: "https://exemplo-saas-nuxt.vercel.app/",
      imagem: "https://i.postimg.cc/C53vKgvQ/logo2.png",
    },
    {
      titulo: "Sistema de Gestão de APIs",
      descricao:
        "Configuração e gestão de APIs utilizando Gravitee e monitoramento com Grafana.",
      tecnologias: ["Gravitee", "Grafana", "RabbitMQ", "Azure DevOps"],
      link: "#",
      imagem: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <section id="projetos" className="section-spacing">
      <div className="container mx-auto px-4 card-style bg-[#f09d51]">
        <h2 className="text-3xl font-bold mb-8 text-secondary">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="card-style hover:shadow-2xl transition-shadow transform hover:scale-105 flex flex-col bg-white"
            >
              {projeto.imagem && (
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              <div className="p-6 flex flex-grow flex-col">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {projeto.titulo}
                </h3>
                <p className="text-dark mb-4 flex-grow">{projeto.descricao}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-light text-dark bg-[#f09d51]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {projeto.link && (
                  <div className="mt-auto">
                    <Link
                      to={projeto.link}
                      className="inline-block px-8 py-3 bg-amber-500 text-black rounded-full shadow-lg transition-all transform hover:scale-105"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
