import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
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
      <Section yPadding="py-8">
        <div className="flex items-center justify-between">
          <div className="rounded-lg bg-white/10 p-2 shadow-lg backdrop-blur-sm md:p-3">
            <Logo
              xl
              className="scale-75 drop-shadow-md sm:scale-90 md:scale-100 lg:scale-110"
            />
          </div>

          <Link
            href="tel:+1(267) 774-1222"
            className="font-['Helvetica'] text-sm font-light tracking-wide text-white drop-shadow-md transition-colors hover:text-tertiary sm:text-base md:text-xl lg:text-2xl"
          >
            +1(267) 774-1222
          </Link>
        </div>
      </Section>

      {/* Hero Content */}
      <Section yPadding="pt-24 pb-40">
        <HeroOneButton
          title={
            <>
              <span className="text-shadow-lg text-4xl font-bold text-primary-500 md:text-5xl lg:text-6xl">
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
                className="mt-8 px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300"
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
