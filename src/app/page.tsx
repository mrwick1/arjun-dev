import StarsCanvas from '@/components/Canvas/StarCanvas';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Overview from '@/components/Overview/Overview';
import Projects from '@/components/Projects/Projects';
import TechStack from '@/components/TechStack/TechStack';
import Testimonials from '@/components/Testimonials/Testimonials';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <main>
      <Toaster richColors position='top-right' duration={3000} />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Header />
          <Hero />
        </div>
        <Overview />
        <Experience />
        <TechStack />
        <Projects />
        <Testimonials />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </main>
  );
}
