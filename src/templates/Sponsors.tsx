import Image from 'next/image';

import { Section } from '../layout/Section';

const Sponsors = () => (
  <div
    className="relative bg-gradient-to-b from-gray-50 to-gray-100"
    id="projects"
  >
    {/* Subtle brand color overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/[0.03] to-primary-500/[0.03]" />

    <Section
      title="Our Projects"
      description="We Love What We Do And It Shows In Details."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            image: '/assets/images/dennis-cortes-eBPx9x7Hxyg-unsplash.jpg',
            title: 'Modern Kitchen Renovation',
            description: 'Complete kitchen remodel with custom cabinetry',
          },
          {
            image: '/assets/images/charlesdeluvio-c2thq3SXJiA-unsplash.jpg',
            title: 'Office Space Redesign',
            description: 'Commercial office transformation for tech startup',
          },
          {
            image: '/assets/images/kara-eads-L7EwHkq1B2s-unsplash.jpg',
            title: 'Luxury Bathroom',
            description: 'High-end bathroom renovation with custom fixtures',
          },
          {
            image: '/assets/images/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg',
            title: 'Historic Home Restoration',
            description: 'Preserving character while adding modern amenities',
          },
          {
            image: '/assets/images/milivoj-kuhar-Te48TPzdcU8-unsplash.jpg',
            title: 'Retail Store Renovation',
            description: 'Complete storefront and interior redesign',
          },
          {
            image:
              '/assets/images/tile-merchant-ireland-lCmZqcHM-OY-unsplash.jpg',
            title: 'Custom Tile Installation',
            description: 'Specialty tile work for residential project',
          },
        ].map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-xl font-bold text-secondary-700">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

export { Sponsors };
