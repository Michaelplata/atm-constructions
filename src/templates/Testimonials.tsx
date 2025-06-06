// templates/Testimonials.tsx
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Testimonials = () => (
  <Background color="bg-[#2B558B]">
    <Section>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#8C9BB4]">
              Discover why homeowners and businesses trust ATM Constructions for
              their renovation needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                text: 'ATM Constructions transformed our kitchen beautifully. Their attention to detail and professionalism exceeded our expectations.',
                author: 'Sarah Johnson',
                role: 'Homeowner',
                location: 'Philadelphia',
              },
              {
                text: 'Outstanding commercial renovation work. They completed our office remodel on time and within budget. Highly recommended!',
                author: 'Michael Chen',
                role: 'Business Owner',
                location: 'Cherry Hill',
              },
              {
                text: "The team's craftsmanship is exceptional. They truly understand how to bring architectural visions to life.",
                author: 'David Williams',
                role: 'Property Manager',
                location: 'Bucks County',
              },
              {
                text: 'We were impressed by their innovative solutions for our basement renovation. The results were beyond what we imagined.',
                author: 'Emily Rodriguez',
                role: 'Homeowner',
                location: 'Montgomery County',
              },
              {
                text: 'Their team showed great expertise in historical building renovation. They preserved the character while modernizing the space.',
                author: 'Robert Thompson',
                role: 'Historical Society Director',
                location: 'Old City',
              },
              {
                text: 'The bathroom remodel was flawless. Their attention to waterproofing and fixture installation was impressive.',
                author: 'Lisa Parker',
                role: 'Homeowner',
                location: 'Main Line',
              },
              {
                text: 'ATM handled our restaurant renovation with minimal disruption to our business. The result was stunning!',
                author: 'James Kim',
                role: 'Restaurant Owner',
                location: 'Center City',
              },
              {
                text: 'They transformed our outdated retail space into a modern showroom. The craftsmanship is outstanding.',
                author: 'Amanda Foster',
                role: 'Retail Manager',
                location: 'King of Prussia',
              },
              {
                text: 'Professional, punctual, and perfect execution. Our medical office renovation exceeded expectations.',
                author: 'Dr. Mark Sullivan',
                role: 'Medical Director',
                location: 'Bryn Mawr',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <svg
                    className="size-8 text-[#C5715E]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="mb-6 text-gray-600">{testimonial.text}</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#2B558B]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#6A8AB2]">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-md border border-transparent bg-[#C5715E] px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-[#b4604f]"
            >
              Get Your Free Quote Today
            </Link>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Testimonials };
