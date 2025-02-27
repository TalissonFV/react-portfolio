// components/Habilidades.tsx
import { FaJsSquare, FaDatabase, FaNodeJs, FaVuejs, FaCoffee } from 'react-icons/fa';
import { SiTypescript, SiSharp, SiNeo4J, SiMongodb, SiFirebase, SiNestjs, SiExpress, SiNextdotjs, SiNuxtdotjs } from 'react-icons/si';

const Habilidades = () => {
  const habilidades = [
    {
      categoria: "Linguagens de Programação",
      itens: [
        { nome: "JavaScript", icone: <FaJsSquare className="w-5 h-5 inline-block mr-2" /> },
        { nome: "TypeScript", icone: <SiTypescript className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Java", icone: <FaCoffee className="w-5 h-5 inline-block mr-2" /> },
        { nome: "C#", icone: <SiSharp className="w-5 h-5 inline-block mr-2" /> },
      ]
    },
    {
      categoria: "Frameworks & Bibliotecas",
      itens: [
        { nome: "Vue.js", icone: <FaVuejs className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Node.js", icone: <FaNodeJs className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Nest.js", icone: <SiNestjs className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Next.js", icone: <SiNextdotjs className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Nuxt.js", icone: <SiNuxtdotjs className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Express", icone: <SiExpress className="w-5 h-5 inline-block mr-2" /> },
      ]
    },
    {
      categoria: "Banco de Dados",
      itens: [
        { nome: "Neo4j", icone: <SiNeo4J className="w-5 h-5 inline-block mr-2" /> },
        { nome: "MongoDB", icone: <SiMongodb className="w-5 h-5 inline-block mr-2" /> },
        { nome: "Firebase/Firestore", icone: <SiFirebase className="w-5 h-5 inline-block mr-2" /> },
        { nome: "SQL", icone: <FaDatabase className="w-5 h-5 inline-block mr-2" /> },
      ]
    },
  ]

  return (
    <section id="habilidades" className="section-spacing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-secondary">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {habilidades.map((habilidade, index) => (
            <div key={index} className="card-style">
              <h3 className="text-xl font-bold mb-4 text-primary">{habilidade.categoria}</h3>
              <ul className="space-y-2">
                {habilidade.itens.map((item, i) => (
                  <li key={i} className="text-dark flex items-center">
                    {item.icone}
                    <span>{item.nome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades
