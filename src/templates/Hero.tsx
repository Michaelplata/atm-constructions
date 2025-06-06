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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30"></div>
    </div>

    {/* Content */}
    <div className="relative">
      {/* Navigation Section with semi-transparent background */}
      <Section yPadding="py-6">
        <div className="flex items-center justify-between">
          {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 max-w-[200px]"> Added max width and reduced padding */}
          <Logo xl className="md:scale-110 lg:scale-125" />
          {/* </div>        */}

          <Link
            href="tel:+1(267) 774-1222"
            className="font-['Helvetica'] text-lg font-light tracking-wide text-white transition-colors hover:text-primary-500 md:text-4xl lg:text-2xl"
          >
            tel:+1(267) 774-1222
          </Link>
        </div>
      </Section>

      {/* Hero Content */}
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-shadow-lg text-primary-500">
                Building Dreams Into Reality
              </span>
            </>
          }
          description={
            <span className="text-xlg font-light text-white drop-shadow-lg md:text-xl">
              Residential & Commercial Renovations
            </span>
          }
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <Button
                xl={true}
                className="custom-class transition-colors hover:bg-primary-600"
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
