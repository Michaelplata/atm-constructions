import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-center shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl font-bold">
      <div className="text-white">{props.title}</div>
      <div className="mt-2 text-lg font-medium text-white/90">
        {props.subtitle}
      </div>
    </div>

    <div className="mt-6 sm:ml-8 sm:mt-0">{props.button}</div>
  </div>
);

export { CTABanner };
