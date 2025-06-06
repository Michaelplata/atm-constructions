import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Sponsors } from './Sponsors';
import { Testimonials } from './Testimonials';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="bg-[#EAE9E9] py-16 text-gray-800">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Sponsors />
    <VerticalFeatures />
    <Banner />
    <Testimonials />
    <Footer />
  </div>
);

export { Base };
