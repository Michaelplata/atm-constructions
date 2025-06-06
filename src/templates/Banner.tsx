import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="About Us"
      subtitle="Get in touch with us to learn more about our services."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get a Free Quote</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
