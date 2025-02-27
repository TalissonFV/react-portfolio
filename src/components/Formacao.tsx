// components/Formacao.tsx
const Formacao = () => {
  const formacoes = [
    {
      instituicao: "Universidade Santa Cecília",
      curso: "Bacharel em Sistemas de Informação",
      periodo: "Concluído em 2019",
      logo: "https://imagens.unisanta.br/logos/logo.jpg",
      certificado: "https://www.e-diploma.com.br/Verificar/Autenticidade.aspx?id=394225|7D53C9A1E82784F0DA5B2704E0182A|8386"
    }
  ]

  return (
    <section id="formacao" className="section-spacing bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-secondary">Formação Acadêmica</h2>
        <div className="space-y-8">
          {formacoes.map((formacao, index) => (
            <div key={index} className="card-style flex items-center gap-6">
              <img
                src={formacao.logo}
                className="w-24 h-24 "
                alt={formacao.instituicao}
              />
              <a href={formacao.certificado}>
                <h3 className="text-xl font-bold mb-2 text-dark">{formacao.curso}</h3>
                <p className="font-semibold mb-2 text-primary">{formacao.instituicao}</p>
                <p className="text-gray-600">{formacao.periodo}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Formacao
