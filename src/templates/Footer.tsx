import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-secondary-800" id="contact">
    <Section yPadding="py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Column 1: Logo and Contact */}
        <div className="flex flex-col items-center md:items-start">
          <Logo xl />
          <div className="mt-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <p className="mt-4 text-gray-300">
              <a
                href="tel:+1(267)7741222"
                className="block hover:text-primary-300"
              >
                +1 (267) 774-1222
              </a>
              <a
                href="mailto:info@atmconstructions.com"
                className="mt-2 block hover:text-primary-300"
              >
                info@atmconstructions.com
              </a>
              <span className="mt-2 block">Philadelphia, PA</span>
            </p>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Our Services</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-primary-300">
                Kitchen Remodeling
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Bathroom Renovation
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Commercial Spaces
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Home Additions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Basement Finishing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-primary-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Form */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Get a Quote</h3>
          <p className="mt-2 text-gray-300">
            Fill out this form and we&apos;ll contact you
          </p>
          <form className="mt-4 rounded-lg bg-white p-5 shadow-lg">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button className="w-full rounded-md bg-primary-500 px-4 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-primary-600">
              Request Quote
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-secondary-700 pt-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} ATM Constructions. All rights reserved.
        </p>
      </div>
    </Section>
  </Background>
);

export { Footer };
