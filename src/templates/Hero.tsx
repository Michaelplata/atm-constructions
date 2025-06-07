import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background className="relative" color="bg-gray-100">
    {/* Background image with overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(assets/images/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg)`,
      }}
    >
      {/* Multiple layers for better control */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40"></div>
    </div>

    {/* Content */}
    <div className="relative">
      {/* Navigation Section with semi-transparent background */}
      <Section yPadding="py-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="rounded-lg bg-white/20 p-2 shadow-lg backdrop-blur-sm md:p-3">
            <Logo
              xl
              className="scale-75 drop-shadow-md sm:scale-90 md:scale-100 lg:scale-110"
            />
          </div>

          <nav className="hidden rounded-full bg-white/10 px-6 py-3 shadow-lg backdrop-blur-sm md:block">
            <ul className="flex space-x-8 text-lg font-medium text-white">
              <li>
                <Link
                  href="#"
                  className="border-b-2 border-transparent transition-all duration-300 hover:text-primary-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="border-b-2 border-transparent transition-all duration-300 hover:text-primary-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="border-b-2 border-transparent transition-all duration-300 hover:text-primary-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="border-b-2 border-transparent transition-all duration-300 hover:text-primary-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="tel:+1(267) 774-1222"
            className="font-['Helvetica'] text-sm font-light tracking-wide text-white drop-shadow-md transition-colors hover:text-primary-300 sm:text-base md:text-xl lg:text-2xl"
          >
            +1(267) 774-1222
          </Link>
        </div>

        {/* Mobile menu button - only visible on small screens */}
        <div className="mt-4 flex justify-center md:hidden">
          <button className="rounded-md bg-primary-500 px-4 py-2 text-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Section>

      {/* Hero Content */}
      <Section yPadding="pt-16 pb-32 md:pt-24 md:pb-40">
        <HeroOneButton
          title={
            <>
              <span className="text-shadow-lg text-4xl font-bold text-primary-300 md:text-5xl lg:text-6xl">
                Building Dreams Into Reality
              </span>
            </>
          }
          description={
            <span className="mt-6 text-xl font-light leading-relaxed text-white drop-shadow-lg md:text-2xl">
              Residential & Commercial Renovations
            </span>
          }
          button={
            <Link href="#contact">
              <Button
                xl={true}
                className="mt-8 bg-primary-500 px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300"
              >
                Get a Free Quote
              </Button>
            </Link>
          }
        />
      </Section>
    </div>
  </Background>
);

export { Hero };
