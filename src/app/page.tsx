import About from '@/components/About';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

type Props = {};
const HomePage = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
export default HomePage;
