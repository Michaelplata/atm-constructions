// templates/Testimonials.tsx
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Testimonials = () => (
  <Background color="bg-secondary-500" id="testimonials">
    <Section>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-200">
              Discover why homeowners and businesses trust ATM Constructions for
              their renovation needs
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Desktop View - 3 columns */}
            <div className="hidden gap-10 md:grid md:grid-cols-3">
              {[
                {
                  text: 'ATM Constructions transformed our kitchen beautifully. Their attention to detail and professionalism exceeded our expectations.',
                  author: 'Sarah Johnson',
                  role: 'Homeowner',
                  location: 'Philadelphia',
                  image: '/assets/images/testimonial-1.jpg',
                },
                {
                  text: 'Outstanding commercial renovation work. They completed our office remodel on time and within budget. Highly recommended!',
                  author: 'Michael Chen',
                  role: 'Business Owner',
                  location: 'Cherry Hill',
                  image: '/assets/images/testimonial-2.jpg',
                },
                {
                  text: "The team's craftsmanship is exceptional. They truly understand how to bring architectural visions to life.",
                  author: 'David Williams',
                  role: 'Property Manager',
                  location: 'Bucks County',
                  image: '/assets/images/testimonial-3.jpg',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl border-b-4 border-primary-500 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <svg
                      className="size-10 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="size-5 text-tertiary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center border-t border-gray-200 pt-4">
                    <div className="mr-4 size-12 overflow-hidden rounded-full bg-gray-200">
                      {/* Placeholder for profile image */}
                      <div className="flex size-full items-center justify-center bg-secondary-300 text-xl font-bold text-white">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-secondary-500">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-secondary-400">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Single Column */}
            <div className="md:hidden">
              <div className="rounded-xl border-b-4 border-primary-500 bg-white p-8 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <svg
                    className="size-10 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="size-5 text-tertiary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  ATM Constructions transformed our kitchen beautifully. Their
                  attention to detail and professionalism exceeded our
                  expectations.
                </p>

                <div className="flex items-center border-t border-gray-200 pt-4">
                  <div className="mr-4 size-12 overflow-hidden rounded-full bg-gray-200">
                    <div className="flex size-full items-center justify-center bg-secondary-300 text-xl font-bold text-white">
                      S
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-secondary-500">
                      Sarah Johnson
                    </p>
                    <p className="text-sm text-secondary-400">
                      Homeowner • Philadelphia
                    </p>
                  </div>
                </div>
              </div>

              {/* Pagination dots for mobile */}
              <div className="mt-6 flex justify-center space-x-2">
                <div className="size-2 rounded-full bg-white"></div>
                <div className="size-2 rounded-full bg-white/50"></div>
                <div className="size-2 rounded-full bg-white/50"></div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="hidden md:block">
              <button className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100">
                <svg
                  className="size-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100">
                <svg
                  className="size-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-md border border-transparent bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-md transition-colors duration-300 hover:bg-primary-600"
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
