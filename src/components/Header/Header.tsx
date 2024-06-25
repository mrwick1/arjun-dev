'use client';

import { styles } from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { close, logo, menu } from '../../../public/images';
import { navLinks } from '@/const';

const Header = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? 'bg-primary' : 'bg-transparent'
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            href='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-semibold cursor-pointer flex '>
              Arjun <span>&nbsp;</span>
              <span className='sm:block hidden'> | Software Engineer</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <Link href={`#${nav.id}`} onClick={() => setActive(nav.title)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <button
              className='w-[28px] h-[28px] object-contain border-none bg-transparent'
              onClick={() => setToggle(!toggle)}
            >
              <Image src={toggle ? close : menu} alt='menu' />
            </button>

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    <Link
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                      href={`#${nav.id}`}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
