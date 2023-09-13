'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { useRef } from 'react';

type Props = {};
const HomePage = (props: Props) => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden pt-24 lg:snap-y lg:snap-mandatory xl:scrollbar xl:scrollbar-track-neutral-900/80 xl:scrollbar-thumb-neutral-50/30">
      <Hero scrollToRef={scrollToRef} />
      <div ref={scrollToRef}>
        <About />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
export default HomePage;
