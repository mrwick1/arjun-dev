import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import Image, { StaticImageData } from 'next/image';
import { github } from '../../../public/images';

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  liveLink,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
  liveLink: string;
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <button
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-none bg-transparent'
            >
              <Image
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </button>
          </div>
        </div>

        <div className='mt-5'>
          <a
            target='_blank'
            href={liveLink ?? '#'}
            className='text-white font-bold text-[24px]'
          >
            {name}
          </a>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
