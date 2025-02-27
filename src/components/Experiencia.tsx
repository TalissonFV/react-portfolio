import React from 'react'

interface Experiencia {
  empresa: string
  cargo: string
  periodo: string
  detalhes: string[]
  logo: string
}

const Experiencia: React.FC = () => {
  const experiencias: Experiencia[] = [
    {
      empresa: "Qualicorp",
      cargo: "Desenvolvedor Web Fullstack Pleno",
      periodo: "Fev 2021 - Mai 2024",
      detalhes: [
        "Fui responsável pela manutenção e evolução de um módulo de ERP interno, desenvolvido com Vue.js no front-end e Node.js/Express no back-end, garantindo alta performance e escalabilidade",
        "Realizei integrações entre o módulo de ERP e sistemas de mercado utilizados por parceiros, assegurando interoperabilidade e sincronização de dados.",
        "Elaborei documentações técnicas detalhadas de APIs utilizando Swagger, facilitando a compreensão e utilização por outros desenvolvedores e equipes.",
        "Configurei pipelines de CI/CD utilizando Azure DevOps, otimizando processos de deploy e garantindo entregas contínuas e estáveis.",
        "Gerenciei ferramentas open source como Gravitee (para gestão de APIs), PM2 (para gerenciamento de processos em Node.js), RabbitMQ (para mensageria) e Grafana (para monitoramento e análise de métricas)."
      ],
      logo: 'https://logodownload.org/wp-content/uploads/2020/12/qualicorp-logo-5.png'
    },
    {
      empresa: "Talent Group (alocado na Qualicorp)",
      cargo: "Desenvolvedor Web Fullstack Trainee",
      periodo: "Abr 2020 - Fev 2021",
      detalhes: [
        "Participei ativamente do desenvolvimento de um novo módulo web para o ERP interno, utilizando Vue.js no front-end e Node.js no back-end. Implementei soluções que transformaram processos manuais e demorados (que levavam semanas) em tarefas automatizadas concluídas em minutos, garantindo uma experiência de usuário moderna, eficiente e altamente produtiva.",
        "Criei e mantive bancos de dados de grafos utilizando Neo4j, otimizando consultas e melhorando a performance de operações complexas.",
        "Desenvolvi APIs REST para integração de dados com parceiros e outros projetos internos, assegurando comunicação eficiente e segura entre sistemas.",
        "Implementei novas integrações entre o módulo do ERP e sistemas de parceiros, além de outros projetos internos, garantindo sincronização e consistência de dados.",
        "Participei de reuniões diárias e sprints, seguindo metodologias ágeis como Scrum, para garantir entregas contínuas e alinhadas com as necessidades do negócio."
      ],
      logo: 'https://www.talentgroup.com.br/wp-content/uploads/2021/10/logo-talent.jpg'
    },
    {
      empresa: "ManyContent",
      cargo: "Desenvolvedor Web Fullstack Estagiário",
      periodo: "Out 2018 - Dez 2019",
      detalhes: [
        "Participei de reuniões diárias e sprints, seguindo metodologias ágeis como Scrum, para garantir entregas contínuas e alinhadas com as necessidades do negócio.",
        "Responsável pela manutenção e desenvolvimento do banco de dados utilizando Firestore, assegurando a integridade e eficiência dos dados.",
        "Realizei a integração da plataforma web com APIs de redes sociais, ampliando as funcionalidades e melhorando a experiência do usuário.",
        "Atuei como responsável pelo suporte de 2º nível, resolvendo problemas técnicos e garantindo a continuidade das operações.",
        " Implementei a tradução e internacionalização da plataforma web utilizando i18n, possibilitando a adaptação do sistema para múltiplos idiomas e mercados."
      ],
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDEr2u_qJtmp9XN4fKTC0o59gz7QkjM-tUA&s'
    },
  ]

  return (
    <section id="experiencia" className="mb-16 m-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Experiência Profissional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiencias.map((exp, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                <img src={exp.logo}></img>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">{exp.cargo}</h3>
                <p className="text-sm font-semibold text-gray-700">{exp.empresa}</p>
                <p className="text-sm text-gray-500">{exp.periodo}</p>
              </div>
            </div>
            <ul className="list-disc pl-6 text-gray-800">
              {exp.detalhes.map((detalhe, i) => (
                <li key={i} className="mb-2">{detalhe}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiencia
