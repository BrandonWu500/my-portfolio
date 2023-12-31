'use client';

import { useRef } from 'react';

import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import Projects from '@/src/components/Projects';
import Skills from '@/src/components/Skills';

type Props = {};
const HomePage = (props: Props) => {
  const projectsScrollToRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen scroll-pt-24 overflow-y-auto overflow-x-hidden pt-24 lg:snap-y lg:snap-mandatory lg:scroll-pt-0 xl:scrollbar xl:scrollbar-track-neutral-900/80 xl:scrollbar-thumb-neutral-50/30">
      <Hero scrollToRef={projectsScrollToRef} />
      <div ref={projectsScrollToRef}>
        <Projects />
      </div>
      <Skills />
      <Contact />
    </div>
  );
};
export default HomePage;
