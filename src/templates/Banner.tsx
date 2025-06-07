import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section yPadding="py-12">
    <CTABanner
      title="Ready to Transform Your Space?"
      subtitle="Contact us today for a free consultation and quote on your renovation project."
      button={
        <Link href="#contact">
          <Button
            xl
            className="bg-primary-500 px-8 py-4 text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-600 hover:shadow-xl"
          >
            Get a Free Quote
          </Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
