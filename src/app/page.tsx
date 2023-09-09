import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

type Props = {};
const HomePage = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};
export default HomePage;
