import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import Image, { StaticImageData } from 'next/image';

export const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}: {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: StaticImageData;
  link: string;
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>&quot;</p>

      <div className='mt-[-20px]'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <a href={link} target='_blank'>
            <Image
              src={image}
              alt={`feedback_by-${name}`}
              className='w-10 h-10 rounded-full object-cover'
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
