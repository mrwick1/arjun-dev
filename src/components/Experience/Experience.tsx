'use client';
import { experiences } from '@/const';
import { styles } from '@/styles/styles';
import { textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import { ExperienceCard } from '../Cards/ExperienceCard';
import SectionWrapper from '../Wrappers/SectionWrapper';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline animate>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.company_name}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
