import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-900">
    <Section yPadding="py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Column 1: Logo and Contact */}
        <div className="flex flex-col items-center md:items-start">
          <Logo xl />
          <div className="mt-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <p className="mt-4 text-gray-400">
              <a
                href="tel:+1(267)7741222"
                className="block hover:text-primary-400"
              >
                +1 (267) 774-1222
              </a>
              <a
                href="mailto:info@atmconstructions.com"
                className="mt-2 block hover:text-primary-400"
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
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-primary-400">
                Kitchen Remodeling
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Bathroom Renovation
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Commercial Spaces
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Home Additions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Basement Finishing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-primary-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Follow Us</h3>
          <div className="mt-4 flex justify-center space-x-4 md:justify-start">
            <Link
              href="/"
              className="rounded-full bg-gray-800 p-2 text-white hover:bg-primary-500"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="rounded-full bg-gray-800 p-2 text-white hover:bg-primary-500"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="rounded-full bg-gray-800 p-2 text-white hover:bg-primary-500"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="rounded-full bg-gray-800 p-2 text-white hover:bg-primary-500"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white">Newsletter</h3>
            <p className="mt-2 text-gray-400">
              Subscribe for updates and offers
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-0 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="rounded-r-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} ATM Constructions. All rights reserved.
        </p>
      </div>
    </Section>
  </Background>
);

export { Footer };
