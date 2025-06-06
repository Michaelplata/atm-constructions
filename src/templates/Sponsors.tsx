import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <div className="relative bg-gradient-to-b from-gray-50 to-gray-100">
    {/* Subtle brand color overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2B558B]/[0.03] to-[#C5715E]/[0.03]" />

    <Section
      title="Our Projects"
      description="We Love What We Do And It Shows In Details."
    >
      <table className="mx-auto border-collapse">
        <tbody>
          <tr className="h-56">
            <td className="border-2 border-gray-300 p-3">
              <a
                href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
                target="_blank"
              >
                <Image
                  src="/assets/images/dennis-cortes-eBPx9x7Hxyg-unsplash.jpg"
                  alt="Sentry"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300 p-3">
              <a
                href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
                target="_blank"
              >
                <Image
                  src="/assets/images/charlesdeluvio-c2thq3SXJiA-unsplash.jpg"
                  alt="Better Stack"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300 p-3">
              <a href="https://nextlessjs.com">
                <Image
                  src="/assets/images/kara-eads-L7EwHkq1B2s-unsplash.jpg"
                  alt="React SaaS Boilerplate Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
          <tr className="h-56">
            <td className="border-2 border-gray-300 p-3">
              <a
                href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
                target="_blank"
              >
                <Image
                  src="/assets/images/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg"
                  alt="Clerk – Authentication & User Management for Next.js"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300 p-3">
              <a
                href="https://turso.tech/?utm_source=nextjsstarterbp"
                target="_blank"
              >
                <Image
                  src="/assets/images/milivoj-kuhar-Te48TPzdcU8-unsplash.jpg"
                  alt="SQLite Developer Experience"
                  width={260}
                  height={224}
                />
              </a>
            </td>
            <td className="border-2 border-gray-300 p-3">
              <a href="https://l.crowdin.com/next-js" target="_blank">
                <Image
                  src="/assets/images/tile-merchant-ireland-lCmZqcHM-OY-unsplash.jpg"
                  alt="Crowdin"
                  width={260}
                  height={224}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  </div>
);

export { Sponsors };
