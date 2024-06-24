'use client';
import { services } from '@/const';
import { styles } from '@/styles/styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import { ServiceCard } from '../Cards/ServiceCard';
import SectionWrapper from '../Wrappers/SectionWrapper';

const Overview = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Experienced Front-End Developer with over 2 years of expertise in
        crafting responsive, accessible, and visually appealing web applications
        using HTML, CSS, JavaScript, TypeScript, and frameworks like React and
        Next.js. Skilled in state management with Redux, Recoil, and Zustand,
        and proficient in UI/UX optimization using Bootstrap, MUI, Tailwind, and
        Styled Components. Certified as a Meta Front-End Developer Professional
        with a strong understanding of web accessibility standards (WCAG, ADA).
        Currently transitioning to full-stack development to expand proficiency
        across both front-end and back-end technologies. Demonstrated ability to
        collaborate effectively with teams, mentor junior developers, and
        deliver high-quality, production-grade applications.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Overview, 'about');
