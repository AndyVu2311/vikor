'use client';

import { use, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { navLinks } from '../../../constants';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  //handle hide and show on scroll
  const container = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const showNavRef = useRef<(() => void) | null>(null);
  const hideNavRef = useRef<(() => void) | null>(null);
  const lastTriggerY = useRef(0);
  const tl = useRef(null);
  useGSAP(
    () => {
      const navArr = gsap.utils.toArray('.animateMenuOnScroll') as any;
      showNavRef.current = () => {
        gsap.to(navArr[1].children, {
          y: 0,
          stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
          duration: 0.4, // each animation duration
          ease: 'power3.out', // easing function
        });
        gsap.to(navArr[0], {
          x: 0,
          ease: 'power3.out', // easing function
          duration: 0.8,
        });
        gsap.to(navArr[2], {
          x: 0,
          ease: 'power3.out',
          duration: 0.8,
        });
      };
      hideNavRef.current = () => {
        gsap.to(navArr[1].children, {
          y: '-200',
          stagger: 0.05,
        });
        gsap.to(navArr[0], {
          x: '-150%',
          ease: 'power3.out', // easing function
          duration: 0.8,
        });
        gsap.to(navArr[2], {
          x: '150%',
          ease: 'power3.out',
          duration: 0.8,
        });
      };
    },
    { scope: container }
  );

  // useGSAP(
  //   () => {
  //     const nav = navComponentsRef.current;
  //     const navLi = navLiRef.current?.children;
  //     const navRight = navRightRef.current;

  //     if (!nav || !navLi || !navRight) return;

  //   },
  //   { dependencies: [open], scope: container }
  // );

  useEffect(() => {
    const THRESHOLD = 50;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = Math.abs(currentScroll - lastTriggerY.current);
      // Only trigger when user scrolled at least 50px since last animation
      if (diff < THRESHOLD || !hideNavRef.current || !showNavRef.current)
        return;

      if (currentScroll > lastScroll.current) {
        hideNavRef.current();
        // tl.current.play();
      } else {
        // tl.current.reverse();
        // showMidleNav();
        showNavRef.current();
      }
      lastScroll.current = currentScroll;
      lastTriggerY.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-hidden', isOpen);
  };

  return (
    <nav aria-label='main' className='relative'>
      {/* nav bar */}

      <div
        ref={container}
        className='fixed z-10 flex w-full items-center justify-between px-(--site-margin) pt-(--site-margin)'
      >
        {/* 1 */}
        <a
          href='/'
          // ref={navComponentsRef}
          className='font-secondary animateMenuOnScroll text-custom w-fit rounded-sm bg-(--swatch-dark) p-(--spacing-space-1) text-(--swatch-light)'
        >
          Vikor Design & Build
        </a>
        {/* 2 */}
        <ul
          className='animateMenuOnScroll hidden gap-(--spacing-space-1) md:flex'
          // ref={navLiRef}
        >
          {navLinks.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.id}
                className='font-primary w-fit rounded-sm border border-(--swatch-dark) bg-(--swatch-yellow) p-(--spacing-space-2) text-sm text-black'
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
        {/* 3 */}
        <div
          className='animateMenuOnScroll flex gap-(--spacing-space-1)'
          // ref={navRightRef}
        >
          <div className='font-primary-semibold hidden items-center justify-center rounded-sm bg-(--swatch-dark) p-(--spacing-space-1) text-center text-(--swatch-light) sm:flex'>
            Chat with us
          </div>
          <button
            aria-label='Toggle menu'
            id='menuToggle'
            onClick={toggleSubMenu}
            className='font-secondary text-custom block w-fit rounded-sm bg-(--swatch-yellow) p-(--spacing-space-1) text-black md:hidden'
          >
            {isOpen ? 'CLOSE -' : 'MENU +'}
          </button>
        </div>
      </div>

      <div className=''>
        {/* mobile nav */}
        <div
          aria-hidden={isOpen}
          // ref={mobileContainerRef}
          className={` ${isOpen ? 'block backdrop-blur-xs backdrop-brightness-75' : 'hidden'} fixed inset-0 z-1 flex h-full w-full flex-row items-end justify-center bg-(--swatch-transparent) px-(--site-margin) md:hidden`}
        >
          {/* origin-[0_100%] translate-x-[120%] translate-y-[150%] rotate-[-50deg]  */}
          {/* overlay */}
          <div className='absolute h-full w-full'> </div>
          {/* menu */}
          <div
            // ref={mobileNavRef}
            className='z-10 mb-(--site-margin) block w-full border-4 bg-(--swatch-yellow) p-(--spacing-space-3)'
          >
            <ul className='flex w-full flex-col'>
              {navLinks.map((menu) => (
                <li key={menu.id} className='h-fit w-full'>
                  <Link
                    href={menu.id}
                    className='font-secondary block rounded-sm bg-(--swatch-yellow) text-6xl text-black'
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// const showMidleNav = () => {
//   gsap.to(navLi, {
//     y: 0,
//     stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
//     duration: 0.4, // each animation duration
//     ease: 'power3.out', // easing function
//   });
//   gsap.to(nav, {
//     x: 0,
//     ease: 'power3.out', // easing function
//     duration: 0.8,
//   });
//   gsap.to(navRight, {
//     x: 0,
//     ease: 'power3.out',
//     duration: 0.8,
//   });
// };
// const hideMidleMav = () => {
//   gsap.to(navLi, {
//     y: '-200',
//     stagger: 0.05,
//   });
//   gsap.to(nav, {
//     x: '-150%',
//     ease: 'power3.out', // easing function
//     duration: 0.8,
//   });
//   gsap.to(navRight, {
//     x: '150%',
//     ease: 'power3.out',
//     duration: 0.8,
//   });
// };
