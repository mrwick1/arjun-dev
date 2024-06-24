'use client';

import { useSectionInView } from '@/hooks/useSectionInView';
import Image from 'next/image';
import { LegacyRef } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
interface ExperienceProps {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: ExperienceProps;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const id = experience.company_name?.toLowerCase().replace(' ', '-');
  const { inView } = useSectionInView({ id, delay: 0.8 });

  return (
    <VerticalTimelineElement
      id={id}
      visible={inView}
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point) => (
          <li
            key={`experience-point-${point}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
