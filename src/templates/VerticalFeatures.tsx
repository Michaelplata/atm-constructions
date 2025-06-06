import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Services"
    description="Comprehensive Construction Services for Homes and Businesses"
  >
    <VerticalFeatureRow
      title="Home Services"
      description="Whether you're dreaming of a modern kitchen, a cozy family room, or a complete home makeover, our experienced team is here to guide you through every step. We combine skilled craftsmanship with friendly service to make your renovation journey smooth and enjoyable."
      image="/assets/images/outsite-co-R-LK3sqLiBw-unsplash.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Commercial Services"
      description="Whether you need a modern office renovation, retail space optimization, or a complete commercial transformation, our experienced team delivers results that work for your business. We combine industry expertise with practical solutions to create spaces that drive success."
      image="/assets/images/AdobeStock_831075455.jpeg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
