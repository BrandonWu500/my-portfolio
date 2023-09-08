import About from '@/components/About';
import Hero from '@/components/Hero';

type Props = {};
const HomePage = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};
export default HomePage;
