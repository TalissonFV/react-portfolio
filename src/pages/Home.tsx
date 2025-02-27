import Hero from "../components/Hero";
import Experiencia from "../components/Experiencia";
import Formacao from "../components/Formacao";
import Habilidades from "../components/Habilidades";
import Projetos from "../components/Projetos";

const Home = () => {
  return (
    <div>
      <Hero />
      <Habilidades />
      <Projetos />
      <Formacao />
      <Experiencia />
    </div>
  );
};

export default Home;
